'use client'

import { useState } from 'react'
import { Server, Eye, BookOpen, ChevronDown, ChevronUp } from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'Auditoría y Supervisión de Seguridad',
    description:
      'Supervisamos que tu infraestructura esté actualizada, con copias de seguridad funcionales y con la configuración de seguridad aplicada. El trabajo de revisión que debería estar ocurriendo siempre y que en la mayoría de pymes se descuida.',
    bullets: [
      'Supervisión de backups: verificación periódica de políticas de retención, pruebas de restauración documentadas y alertas de fallo',
      'Control de actualizaciones de Windows, Microsoft 365 y Google Workspace: reporte de parches críticos pendientes y ventanas de mantenimiento sugeridas',
      'Auditoría periódica de firewall, antivirus endpoint y políticas de acceso: revisión de MFA, caducidad de contraseñas y sesiones activas',
    ],
    caso: 'Una empresa de 12 personas lleva usando la misma contraseña de administrador en el router desde que lo instaló el operador hace tres años. El antivirus lleva sin actualizarse porque "siempre sale un aviso". Con este servicio, esos riesgos se detectan y se reportan en el diagnóstico inicial para su corrección inmediata.',
  },
  {
    icon: Eye,
    title: 'Mini SOC — Monitoreo de Accesos y Alertas',
    description:
      'Monitoreamos los accesos a tus sistemas y te avisamos cuando algo no cuadra. Inicios de sesión fuera de horario, intentos de acceso repetidos, conexiones desde ubicaciones inusuales. No esperamos a que el daño ocurra para enterarnos.',
    bullets: [
      'Centralización de logs de Microsoft 365, Google Workspace y dispositivos de red — correlación de eventos con reglas de alerta configuradas para tu entorno concreto',
      'Detección de comportamientos anómalos: accesos fuera del horario habitual, múltiples intentos de login fallidos o actividad desde IPs no autorizadas',
      'Informe mensual de seguridad: resumen de eventos, alertas generadas y vulnerabilidades detectadas — entregado en lenguaje no técnico',
    ],
    caso: 'Un empleado de una gestoría introduce sus credenciales en un sitio de phishing. El atacante accede a su buzón desde el extranjero a las 2 de la mañana. Con este servicio, la alerta de acceso inusual se reporta de inmediato al responsable técnico para su bloqueo antes de que se produzca una fuga de datos.',
  },
  {
    icon: BookOpen,
    title: 'Protocolos de Respuesta Sugeridos',
    description:
      'Guías de actuación documentadas para los escenarios de riesgo más comunes. Cuando algo falla, el cliente dispone de un paso a paso detallado sobre qué hacer y a quién contactar. Sin improvisar.',
    bullets: [
      'Guía ante ransomware: protocolo de aislamiento, notificación a autoridades, proceso de recuperación desde backup y plan de comunicación',
      'Guía para cuentas comprometidas: pasos para la revocación de sesiones, auditoría de actividad y restablecimiento seguro de credenciales',
      'Protocolos de escalado: árbol de decisión y contactos clave para la restauración de servicios prioritarios tras un fallo crítico',
    ],
    caso: 'Una empresa sufre un incidente un viernes noche. Sin protocolo, se pierde tiempo crítico decidiendo si apagar o no los equipos. Con una guía de respuesta clara a mano, el responsable aplica la primera acción de contención recomendada en minutos. La diferencia entre una recuperación rápida o una crisis de días.',
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group relative rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/30 hover:bg-card/80">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <service.icon className="h-6 w-6 text-primary" />
        </div>
        <span className="font-mono text-sm text-muted-foreground">0{index + 1}</span>
      </div>

      <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
      <p className="mb-6 text-muted-foreground">{service.description}</p>

      <ul className="mb-6 space-y-3">
        {service.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between border-t border-border pt-4 text-sm text-primary transition-colors hover:text-primary/80"
      >
        <span>Ver caso real</span>
        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isExpanded && (
        <div className="mt-4 rounded-lg bg-secondary/50 p-4">
          <p className="text-sm text-muted-foreground italic leading-relaxed">{service.caso}</p>
        </div>
      )}
    </div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-wider text-primary">Servicios</p>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Servicios
          </h2>
          <p className="text-lg text-muted-foreground">
            Tres servicios. Ninguno es opcional si quieres una base sólida.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
