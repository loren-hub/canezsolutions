import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'

const resend = new Resend(process.env.RESEND_API_KEY)

// Get client IP from request headers
function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip') || 'unknown'
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request)
  const { allowed, retryAfter } = rateLimit(clientIp)

  if (!allowed) {
    return NextResponse.json(
      { error: `Demasiados intentos. Espera ${retryAfter} segundos.` },
      { status: 429 }
    )
  }

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
      from: 'Canez <contact@canezsolutions.es>',
      to: [
        'bcarrion@canezsolutions.com',
        'rlopez@canezsolutions.com',
        'macosta@canezsolutions.com',
      ],
      subject: `Nuevo contacto: ${name}${company ? ` - ${company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nuevo mensaje de contacto</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0f1a0f; font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f1a0f;">
            <tr>
              <td align="center" style="padding: 48px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #1a2a1a; border-radius: 12px; border: 1px solid #2a3a2a; overflow: hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 40px 40px 32px; border-bottom: 1px solid #2a3a2a;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #5a7a5a;">
                              CanezSolutions
                            </p>
                          </td>
                          <td align="right">
                            <span style="display: inline-block; background-color: #c8ff00; color: #0f1a0f; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; padding: 4px 12px; border-radius: 999px;">
                              NUEVO
                            </span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 32px 40px 0;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f2f2f0; letter-spacing: -0.02em;">
                        Nuevo mensaje de contacto
                      </h1>
                      <p style="margin: 8px 0 0; font-size: 14px; color: #7a9a7a;">
                        Alguien ha completado el formulario de contacto.
                      </p>
                    </td>
                  </tr>

                  <!-- Contact Info -->
                  <tr>
                    <td style="padding: 24px 40px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f1a0f; border-radius: 8px; border: 1px solid #2a3a2a;">
                        <tr>
                          <td style="padding: 24px;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size: 14px;">
                              <tr>
                                <td style="padding: 8px 0; color: #7a9a7a; width: 90px; vertical-align: top; font-size: 13px;">
                                  Nombre
                                </td>
                                <td style="padding: 8px 0; color: #f2f2f0; font-weight: 500;">
                                  ${name}
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 8px 0; color: #7a9a7a; font-size: 13px;">
                                  Email
                                </td>
                                <td style="padding: 8px 0; color: #f2f2f0;">
                                  <a href="mailto:${email}" style="color: #c8ff00; text-decoration: none;">${email}</a>
                                </td>
                              </tr>
                              ${phone ? `
                              <tr>
                                <td style="padding: 8px 0; color: #7a9a7a; font-size: 13px;">
                                  Teléfono
                                </td>
                                <td style="padding: 8px 0; color: #f2f2f0;">
                                  <a href="tel:${phone}" style="color: #f2f2f0; text-decoration: none;">${phone}</a>
                                </td>
                              </tr>
                              ` : ''}
                              ${company ? `
                              <tr>
                                <td style="padding: 8px 0; color: #7a9a7a; font-size: 13px;">
                                  Empresa
                                </td>
                                <td style="padding: 8px 0; color: #f2f2f0;">
                                  ${company}
                                </td>
                              </tr>
                              ` : ''}
                              ${service ? `
                              <tr>
                                <td style="padding: 8px 0; color: #7a9a7a; font-size: 13px;">
                                  Servicio
                                </td>
                                <td style="padding: 8px 0; color: #f2f2f0;">
                                  ${service}
                                </td>
                              </tr>
                              ` : ''}
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 40px 32px;">
                      <p style="margin: 0 0 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: #c8ff00;">
                        Mensaje
                      </p>
                      <div style="background-color: #0f1a0f; border: 1px solid #2a3a2a; border-left: 3px solid #c8ff00; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #d0d8d0; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #2a3a2a; background-color: #152015;">
                      <p style="margin: 0 0 4px; font-size: 12px; color: #5a7a5a;">
                        Enviado desde canezsolutions.es
                      </p>
                      <p style="margin: 0; font-size: 11px; color: #3a5a3a;">
                        ${new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'medium' })}
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    // Send confirmation email to the user
    await resend.emails.send({
      from: 'Canez <contact@canezsolutions.es>',
      to: [email],
      subject: 'Gracias por contactarnos - Canez',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Gracias por contactarnos</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #0f1a0f; font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f1a0f;">
            <tr>
              <td align="center" style="padding: 48px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 580px; background-color: #1a2a1a; border-radius: 12px; border: 1px solid #2a3a2a; overflow: hidden;">
                  
                  <!-- Header with accent bar -->
                  <tr>
                    <td style="padding: 0;">
                      <div style="height: 4px; background: linear-gradient(90deg, #c8ff00 0%, #a0cc00 100%);"></div>
                    </td>
                  </tr>

                  <!-- Logo area -->
                  <tr>
                    <td style="padding: 40px 40px 0; text-align: center;">
                      <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #5a7a5a;">
                        CanezSolutions
                      </p>
                    </td>
                  </tr>

                  <!-- Success icon -->
                  <tr>
                    <td style="padding: 24px 0 0; text-align: center;">
                      <div style="display: inline-block; width: 56px; height: 56px; background-color: rgba(200, 255, 0, 0.1); border: 1px solid rgba(200, 255, 0, 0.2); border-radius: 50%; text-align: center; line-height: 56px;">
                        <span style="font-size: 24px;">✓</span>
                      </div>
                    </td>
                  </tr>

                  <!-- Title -->
                  <tr>
                    <td style="padding: 24px 40px 0; text-align: center;">
                      <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f2f2f0; letter-spacing: -0.02em;">
                        Gracias por contactarnos, ${name}
                      </h1>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding: 16px 40px 0; text-align: center;">
                      <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #a0b8a0;">
                        Hemos recibido tu mensaje y te responderemos en menos de 24 horas laborables.
                      </p>
                    </td>
                  </tr>

                  <!-- Your message recap -->
                  <tr>
                    <td style="padding: 32px 40px 0;">
                      <p style="margin: 0 0 12px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase; color: #c8ff00;">
                        Tu mensaje
                      </p>
                      <div style="background-color: #0f1a0f; border: 1px solid #2a3a2a; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #d0d8d0; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- CTA -->
                  <tr>
                    <td style="padding: 32px 40px;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background-color: rgba(200, 255, 0, 0.08); border: 1px solid rgba(200, 255, 0, 0.15); border-radius: 8px; padding: 20px; text-align: center;">
                            <p style="margin: 0 0 4px; font-size: 14px; color: #f2f2f0; font-weight: 500;">
                              ¿Necesitas ayuda urgente?
                            </p>
                            <p style="margin: 0; font-size: 13px; color: #7a9a7a;">
                              Responde directamente a este correo y te atenderemos lo antes posible.
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Signature -->
                  <tr>
                    <td style="padding: 0 40px 32px; text-align: center;">
                      <p style="margin: 0; font-size: 14px; color: #a0b8a0; line-height: 1.7;">
                        Saludos,<br>
                        <strong style="color: #f2f2f0;">El equipo de Canez</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; border-top: 1px solid #2a3a2a; background-color: #152015; text-align: center;">
                      <p style="margin: 0 0 4px; font-size: 12px; color: #5a7a5a;">
                        CanezSolutions — Ciberseguridad monitorizada para pymes
                      </p>
                      <p style="margin: 0; font-size: 11px; color: #3a5a3a;">
                        <a href="https://canezsolutions.es" style="color: #5a7a5a; text-decoration: none;">canezsolutions.es</a>
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
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
