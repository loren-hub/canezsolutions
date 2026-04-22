import Link from 'next/link'

const footerLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

const legalLinks = [
  { href: '/aviso-legal', label: 'Aviso Legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Canez<span className="text-primary">Solutions</span>
            </Link>
            <nav aria-label="Navegación principal" className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-6">
            <nav aria-label="Enlaces legales" className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-sm text-muted-foreground sm:text-base">
              &copy; {new Date().getFullYear()} CanezSolutions. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
