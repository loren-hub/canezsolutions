export function JsonLdScript() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://canezsolutions.es'

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'CanezSolutions',
    description:
      'Monitorización, auditoría y reporte de seguridad IT para pymes en España. Supervisión continua de accesos, actualizaciones y políticas de seguridad.',
    url: baseUrl,
    logo: `${baseUrl}/icon.svg`,
    telephone: '+34 000 000 000',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ES',
    },
    sameAs: [],
    knowsAbout: [
      { '@type': 'DefinedTerm', name: 'Ciberseguridad' },
      { '@type': 'DefinedTerm', name: 'Monitorización de seguridad' },
      { '@type': 'DefinedTerm', name: 'Auditoría IT' },
      { '@type': 'DefinedTerm', name: 'Mini SOC' },
      { '@type': 'DefinedTerm', name: 'Protocolos de respuesta' },
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'España',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '500',
      highPrice: '5000',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Auditoría y Supervisión de Seguridad',
          description:
            'Supervisamos que tu infraestructura esté actualizada, con copias de seguridad funcionales y con la configuración de seguridad aplicada.',
        },
        {
          '@type': 'Offer',
          name: 'Mini SOC — Monitoreo de Accesos y Alertas',
          description:
            'Monitoreamos los accesos a tus sistemas y te avisamos cuando algo no cuadra.',
        },
        {
          '@type': 'Offer',
          name: 'Protocolos de Respuesta Sugeridos',
          description:
            'Guías de actuación documentadas para los escenarios de riesgo más comunes.',
        },
      ],
    },
  }

  const team = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Brayan Carrión',
      jobTitle: 'Consultor de Ciberseguridad',
      worksFor: { '@type': 'Organization', name: 'CanezSolutions' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Rubén López',
      jobTitle: 'Técnico de Infraestructura',
      worksFor: { '@type': 'Organization', name: 'CanezSolutions' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Miguel Ángel Acosta',
      jobTitle: 'Coordinador de Proyectos',
      worksFor: { '@type': 'Organization', name: 'CanezSolutions' },
    },
  ]

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué ocurre cuando no hay nadie mirando la seguridad IT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sin supervisión continua, las pymes acumulan riesgos silenciosos: contraseñas reutilizadas, backups sin verificar, sistemas sin actualizar y accesos no autorizados que pasan desapercibidos hasta que es demasiado tarde.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué incluye el servicio de Mini SOC?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'El Mini SOC centraliza logs de Microsoft 365, Google Workspace y dispositivos de red, detecta comportamientos anómalos y genera informes mensuales de seguridad en lenguaje no técnico.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo es el proceso de trabajo con CanezSolutions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comenzamos con un diagnóstico inicial de tu infraestructura, presentamos una propuesta concreta con prioridades y costes, acompañamos la implementación y establecemos supervisión continua con reportes periódicos.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      {team.map((item, i) => (
        <script
          key={`team-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
