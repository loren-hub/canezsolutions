const team = [
  {
    name: 'Brayan Carrión',
    role: 'Consultoría',
    description:
      'Analiza el contexto de cada empresa y traduce necesidades reales a soluciones tecnológicas viables. El que hace las preguntas incómodas antes de proponer nada.',
  },
  {
    name: 'Rubén López',
    role: 'Técnico',
    description:
      'Implementa, configura y mantiene la infraestructura. Conoce los sistemas que usa el mercado español y sabe cómo fallan. El que resuelve el problema cuando ocurre.',
  },
  {
    name: 'Miguel Ángel Acosta',
    role: 'Coordinación',
    description:
      'Gestiona el flujo de trabajo, los plazos y la comunicación con el cliente. Lo que se acuerda se cumple, y si hay un problema, lo primero que hace es comunicarlo.',
  },
]

export function Team() {
  return (
    <section id="equipo" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary">Equipo</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            El equipo
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-4">
                <div className="mb-1 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-mono text-xl font-bold text-primary">
                  {member.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </div>
              </div>
              <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
              <p className="mb-4 font-mono text-sm text-primary">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
