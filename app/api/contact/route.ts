import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_EMAIL_TO || 'j.smits@zorgjustintime.nl'
const FROM_EMAIL = process.env.RESEND_FROM || 'Zorg Just In Time <onboarding@resend.dev>'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { aanleiding, naam, email, telefoon, bericht } = body

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey || apiKey.trim() === '') {
      console.error('RESEND_API_KEY is niet gezet.')
      return NextResponse.json(
        { error: 'E-mail is niet geconfigureerd. Neem contact op via de contactgegevens in de footer.' },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)
    const aanleidingTekst = aanleiding === 'zorgbemiddelaar' ? 'Zorgbemiddelaar' : 'Zorgvrager'
    const telefoonTekst = telefoon?.trim() ? telefoon : 'Niet opgegeven'

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Contactformulier: ${naam} (${aanleidingTekst})`,
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <p><strong>Naam:</strong> ${escapeHtml(naam)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefoon:</strong> ${escapeHtml(telefoonTekst)}</p>
        <p><strong>Neem contact op als:</strong> ${aanleidingTekst}</p>
        <h3>Bericht</h3>
        <p>${escapeHtml(bericht).replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Verzonden via het contactformulier op zorgjustintime.nl</p>
      `,
    })

    if (result.error) {
      const msg = typeof result.error === 'object' && result.error !== null && 'message' in result.error
        ? String((result.error as { message?: unknown }).message)
        : String(result.error)
      console.error('Resend error:', result.error)
      return NextResponse.json(
        { error: msg || 'Het verzenden van het bericht is mislukt. Probeer het later opnieuw.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Er ging iets mis.'
    console.error('Contact API error:', err)
    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  if (!text) return ''
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return String(text).replace(/[&<>"']/g, (m) => map[m])
}
