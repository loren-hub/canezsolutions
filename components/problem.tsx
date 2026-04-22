const problems = [
  {
    text: 'Un empleado usa la misma contraseña en el correo corporativo de Microsoft 365 y en tres servicios externos. Uno de esos servicios sufre una brecha. Las credenciales aparecen en una lista pública. Nadie en la empresa lo sabe.',
  },
  {
    text: 'El último backup completo del servidor tiene cuatro meses. El disco donde se guardaban las copias diarias falló hace seis semanas. Nadie lo comprobó porque el proceso era manual.',
  },
  {
    text: 'Windows Server 2019 lleva sin actualizarse desde que lo instaló el proveedor. Hay tres vulnerabilidades críticas parcheadas por Microsoft en los últimos cinco meses. Ninguna se ha aplicado.',
  },
  {
    text: 'Un empleado accede al Google Workspace de la empresa desde un país de Europa del Este a las 3 de la mañana. No hay nadie que reciba esa alerta.',
  },
]

export function Problem() {
  return (
    <section id="problema" className="border-y border-border bg-secondary/30 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary sm:text-base">
            El contexto
          </p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Qué ocurre cuando no hay nadie mirando
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[0.8rem] text-muted-foreground sm:text-sm">0{index + 1}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
