import { NextRequest, NextResponse } from 'next/server'

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

    // Hier kun je later e-mail versturen (bijv. met Resend, SendGrid of Nodemailer)
    // of opslaan in een database. Voor nu loggen we alleen.
    console.log('Contactformulier ontvangen:', {
      aanleiding: aanleiding || 'niet opgegeven',
      naam,
      email,
      telefoon: telefoon || 'niet opgegeven',
      bericht,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Er ging iets mis.' },
      { status: 500 }
    )
  }
}
