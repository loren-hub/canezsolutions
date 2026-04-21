import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, service, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son requeridos' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Formato de email inválido' }, { status: 400 })
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json({ error: 'Error de configuración del servidor' }, { status: 500 })
    }

    // Send notification email to Canez
    await resend.emails.send({
      from: 'Canez <onboarding@resend.dev>',
      to: ['tu@canezsolutions.com'], // Replace with actual email
      subject: `Nuevo contacto: ${name}${company ? ` - ${company}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a0f0a; border-bottom: 2px solid #c8ff00; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          <div style="background: #f5f5f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ''}
            ${service ? `<p><strong>Servicio de interés:</strong> ${service}</p>` : ''}
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de canezsolutions.com
          </p>
        </div>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Canez <onboarding@resend.dev>',
      to: [email],
      subject: 'Gracias por contactarnos - Canez',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a0f0a; border-bottom: 2px solid #c8ff00; padding-bottom: 10px;">
            Gracias por contactarnos, ${name}
          </h2>
          <p>Hemos recibido tu mensaje y te responderemos en menos de 24 horas laborables.</p>
          <div style="background: #f5f5f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Tu mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Mientras tanto, si tienes alguna pregunta urgente, puedes responder directamente a este correo.</p>
          <p style="margin-top: 30px;">
            Saludos,<br/>
            <strong>El equipo de Canez</strong>
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje. Por favor, intenta nuevamente.' },
      { status: 500 }
    )
  }
}
