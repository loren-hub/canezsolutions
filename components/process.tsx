const steps = [
  {
    number: '01',
    title: 'Diagnóstico inicial',
    description:
      'Analizamos tu infraestructura actual: qué tienes, cómo está configurado y dónde están los riesgos más inmediatos. El resultado es un informe concreto, no una presentación comercial.',
  },
  {
    number: '02',
    title: 'Propuesta concreta',
    description:
      'Te presentamos qué necesitas, en qué orden y a qué coste. Sin paquetes inflados ni servicios que no vas a usar.',
  },
  {
    number: '03',
    title: 'Acompañamiento en la Implementación',
    description:
      'Te guiamos en la ejecución de lo acordado. Supervisamos cada paso para asegurar que se sigue el plan de seguridad definido.',
  },
  {
    number: '04',
    title: 'Supervisión continua',
    description:
      'No desaparecemos después de la implantación. Monitorizamos sistemas y reportamos periódicamente el estado de seguridad.',
  },
]

export function Process() {
  return (
    <section id="proceso" className="border-y border-border bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">Proceso</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Cómo trabajamos con cada cliente
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-border to-transparent lg:block" />
              )}
              <div className="mb-4 font-mono text-4xl font-bold text-primary/20">{step.number}</div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
