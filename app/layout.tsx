import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'CanezSolutions | Ciberseguridad Monitorizada para Pymes',
  description:
    'Monitorización, auditoría y reporte de seguridad IT para pymes en España. Supervisión continua de accesos, actualizaciones y políticas de seguridad.',
  keywords: [
    'ciberseguridad pymes',
    'monitorización seguridad',
    'auditoría it',
    'protección de datos',
    'seguridad gestionada españa',
    'soc para pymes',
  ],
  authors: [{ name: 'CanezSolutions' }],
  openGraph: {
    title: 'CanezSolutions | Ciberseguridad Monitorizada para Pymes',
    description:
      'Monitorización, auditoría y reporte de seguridad IT para pymes en España. Supervisión continua y protocolos de respuesta.',
    type: 'website',
    locale: 'es_ES',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
