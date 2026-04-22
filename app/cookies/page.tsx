import Link from 'next/link'

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Volver al inicio
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight">Política de Cookies</h1>
          <p className="mt-2 text-muted-foreground">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-12">
        <section className="prose prose-invert max-w-none">
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando las visitas. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
          </p>

          <h2>2. ¿Qué tipos de cookies utilizamos?</h2>

          <h3>Cookies técnicas (necesarias)</h3>
          <ul>
            <li><strong>session_id:</strong> Sesión del usuario (si aplica)</li>
            <li><strong>cookie_consent:</strong> Preferencia de consentimiento de cookies</li>
          </ul>

          <h3>Cookies analíticas</h3>
          <ul>
            <li><strong>_ga:</strong> Google Analytics — identifica visitantes únicos (2 años)</li>
            <li><strong>_ga_&lt;ID&gt;:</strong> Google Analytics — mantiene estado de sesión (2 años)</li>
            <li><strong>_gid:</strong> Google Analytics — identifica visitantes (24 horas)</li>
          </ul>

          <h3>Cookies de personalización</h3>
          <ul>
            <li><strong>theme:</strong> Preferencia de tema (claro/oscuro)</li>
          </ul>

          <h2>3. ¿Cómo gestionar las cookies?</h2>
          <p>
            Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se envía una cookie. Sin embargo, si rechazas las cookies, es posible que algunas funciones del sitio no funcionen correctamente.
          </p>

          <h2>4. Cookies de terceros</h2>
          <p>
            Utilizamos los siguientes servicios de terceros que pueden instalar cookies:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> Análisis de tráfico web. <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad</Link></li>
            <li><strong>Vercel Analytics:</strong> Análisis de rendimiento. <Link href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de privacidad</Link></li>
          </ul>

          <h2>5. Consentimiento</h2>
          <p>
            Al utilizar este sitio web, aceptas el uso de cookies según los términos descritos en esta política. Puedes retirar tu consentimiento en cualquier momento configurando las preferencias de cookies en tu navegador.
          </p>

          <h2>6. Actualizaciones</h2>
          <p>
            Esta política de cookies puede actualizarse periódicamente. Te recomendamos revisarla de vez en cuando.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Si tienes alguna pregunta sobre nuestra Política de Cookies, no dudes en contactarnos a: [contact@canezsolutions.es]
          </p>
        </section>
      </main>
    </div>
  )
}
