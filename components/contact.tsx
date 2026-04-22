'use client'

import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const serviceOptions = [
  'Auditoría y supervisión de seguridad',
  'Mini SOC — monitoreo de accesos y alertas',
  'Protocolos de respuesta sugeridos',
  'No sé todavía, necesito orientación',
]

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Error al enviar el mensaje')
      }

      setStatus('success')
      e.currentTarget.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje')
    }
  }

  return (
    <section id="contacto" className="border-t border-border bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary">
              Contacto
            </p>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Contacto
            </h2>
            <p className="text-lg text-muted-foreground">
              Cuéntanos tu situación. Te respondemos en menos de 24 horas en días laborables.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-card p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Mensaje enviado</h3>
                <p className="text-muted-foreground">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Tu nombre"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Nombre de tu empresa"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">¿En qué servicio estás interesado?</Label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={status === 'loading'}
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Cuéntanos sobre tu situación actual..."
                    rows={4}
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {status === 'error' && (
                  <div
                    className="flex items-center gap-2 text-sm text-destructive"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="h-4 w-4" />
                    {errorMessage}
                  </div>
                )}

                <Button type="submit" className="w-full gap-2" disabled={status === 'loading'}>
                  {status === 'loading' ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
