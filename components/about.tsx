import { CheckCircle2 } from 'lucide-react'

const values = [
  {
    description: 'Lo que acordamos lo documentamos. No hay sorpresas en la factura.',
  },
  {
    description: 'Trabajas con las mismas personas desde el primer día.',
  },
  {
    description: 'Si algo falla fuera de horario, hay un número al que llamar.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Nosotros</p>
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">Canez</h2>
          <p className="mb-8 text-base text-muted-foreground leading-relaxed sm:text-lg">
            Somos tres personas: un consultor, un técnico y un coordinador. Trabajamos con PYMEs que
            no tienen departamento IT propio. Actuamos como tu equipo de apoyo: supervisamos la
            seguridad de tu infraestructura, te avisamos cuando algo va mal y recomendamos cómo
            proceder en cada situación.
          </p>

          <div className="space-y-4">
            {values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
