import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactPayload = {
  name?: string
  email?: string
  message?: string
}

type ResendError = {
  name?: string
  message?: string
  statusCode?: number
}

function normalize(value: unknown, limit: number) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Resend API key is not configured.' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  const payload = (await request.json().catch(() => null)) as ContactPayload | null

  const name = normalize(payload?.name, 80)
  const email = normalize(payload?.email, 120)
  const message = normalize(payload?.message, 2000)

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Khyati Portfolio <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? 'khyatikvl@gmail.com',
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; border: 2px solid #111111; background: #ffffff;">
          <div style="background: #d7f041; color: #111111; padding: 18px 20px; border-bottom: 2px solid #111111;">
            <p style="margin: 0; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">Khyati Portfolio Transmission</p>
            <h1 style="margin: 8px 0 0; font-size: 24px;">New contact message</h1>
          </div>
          <div style="padding: 22px 20px; color: #111111;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <div style="margin-top: 18px; padding: 16px; border: 1px solid #111111; background: #f5f5f5; line-height: 1.6;">
              ${safeMessage}
            </div>
          </div>
        </div>
      </div>
    `
  })

  if (error) {
    const resendError = error as ResendError

    console.error('Resend contact send failed', {
      name: resendError.name,
      message: resendError.message,
      statusCode: resendError.statusCode
    })

    return NextResponse.json(
      {
        error:
          resendError.message ??
          'Message could not be sent. Check the Resend sender domain and recipient settings.'
      },
      { status: resendError.statusCode ?? 500 }
    )
  }

  return NextResponse.json({ ok: true })
}
