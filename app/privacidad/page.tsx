import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Volver al inicio
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">Política de Privacidad</h1>
          <p className="mt-2 text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <section className="prose prose-invert max-w-none">
          <h2>1. Responsable del Tratamiento</h2>
          <p>
            <strong>Responsable:</strong> CanezSolutions
            <br />
            <strong>Dirección:</strong> [Dirección fiscal]
            <br />
            <strong>Email:</strong> [contact@canezsolutions.es]
            <br />
            <strong>Finalidad:</strong> Prestación de servicios de ciberseguridad y gestión de datos de clientes
          </p>

          <h2>2. Datos que Recopilamos</h2>
          <ul>
            <li>Datos de contacto (nombre, email, teléfono) proporcionados voluntariamente</li>
            <li>Datos de empresa y sector</li>
            <li>Datos técnicos de navegación (IP, cookies) para mejorar el servicio</li>
          </ul>

          <h2>3. Finalidad del Tratamiento</h2>
          <p>
            Los datos personales se utilizan para:
          </p>
          <ul>
            <li>Gestionar solicitudes de contacto y servicios</li>
            <li>Enviar comunicaciones comerciales relacionadas con nuestros servicios</li>
            <li>Cumplir con obligaciones legales</li>
            <li>Mejorar nuestros servicios y experiencia de usuario</li>
          </ul>

          <h2>4. Base Legal</h2>
          <p>
            El tratamiento se basa en:
          </p>
          <ul>
            <li>Ejecución de un contrato o medidas precontractuales</li>
            <li>Consentimiento del interesado</li>
            <li>Interés legítimo del responsable</li>
            <li>Cumplimiento de obligaciones legales</li>
          </ul>

          <h2>5. Derechos del Usuario</h2>
          <p>
            De acuerdo con el RGPD y la LOPDGDD, tienes derecho a:
          </p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la supresión de tus datos</li>
            <li>Limitar el tratamiento de tus datos</li>
            <li>Portabilidad de tus datos</li>
            <li>Oponerte al tratamiento de tus datos</li>
          </ul>
          <p>
            Para ejercer estos derechos, contacta a: [contact@canezsolutions.es]
          </p>

          <h2>6. Conservación de Datos</h2>
          <p>
            Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos y para determinar las posibles responsabilidades que pudieran derivarse.
          </p>

          <h2>7. Destinatarios</h2>
          <p>
            No se cederán datos a terceros salvo obligación legal o con proveedores de servicios necesarios para la prestación del servicio (hosting, email, etc.).
          </p>

          <h2>8. Seguridad</h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para proteger los datos personales contra tratamiento no autorizado o ilícito, pérdida, destrucción o daño accidental.
          </p>

          <h2>9. Cookies</h2>
          <p>
            Este sitio utiliza cookies técnicas necesarias y, con tu consentimiento, cookies analíticas para mejorar la experiencia de usuario. Consulta nuestra <Link href="/cookies" className="text-primary hover:underline">Política de Cookies</Link> para más información.
          </p>

          <h2>10. Modificaciones</h2>
          <p>
            Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta misma página.
          </p>
        </section>
      </main>
    </div>
  )
}
