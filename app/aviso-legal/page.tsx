import Link from 'next/link'

export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Volver al inicio
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">Aviso Legal</h1>
          <p className="mt-2 text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <section className="prose prose-invert max-w-none">
          <h2>1. Datos Identificativos</h2>
          <p>
            En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:
          </p>
          <ul>
            <li><strong>Titular:</strong> CanezSolutions</li>
            <li><strong>Domicilio:</strong> [Dirección fiscal]</li>
            <li><strong>Email:</strong> [email@canezsolutions.com]</li>
            <li><strong>Teléfono:</strong> [Teléfono de contacto]</li>
            <li><strong>Actividad:</strong> Servicios de ciberseguridad y consultoría IT</li>
          </ul>

          <h2>2. Objeto</h2>
          <p>
            El presente sitio web tiene por objeto facilitar información sobre los servicios de ciberseguridad que ofrece CanezSolutions a sus clientes y potenciales clientes.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            Los derechos de propiedad intelectual del sitio web, así como su código fuente, diseño, estructura, textos, imágenes, logotipos, iconos, textos, sonias, marcas u otros signos, pertenecen a CanezSolutions o a sus licenciantes. Queda prohibida la reproducción, distribución, comunicación pública o transformación de esta obra sin autorización expresa.
          </p>

          <h2>4. Condiciones de Uso</h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos a través de este sitio web, absteniéndose de emplearlos para:
          </p>
          <ul>
            <li>Realizar actividades ilícitas, contrarias a la buena fe</li>
            <li>Dañar los derechos e intereses de terceros</li>
            <li>Difundir contenidos o propaganda de carácter ilegal</li>
            <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y falsificar, intentar utilizar y/o utilizar las cuentas de correo electrónico de otro usuario</li>
          </ul>

          <h2>5. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            CanezSolutions no otorga ninguna garantía ni se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que puedan traer causa de la falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos en los contenidos.
          </p>

          <h2>6. Legislación Aplicable</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier conflicto que pudiera surgir entre las partes, el usuario y CanezSolutions se someten a los Juzgados y Tribunales de [Ciudad], renunciando a cualquier otro fuero que pudiera corresponderles.
          </p>
        </section>
      </main>
    </div>
  )
}
