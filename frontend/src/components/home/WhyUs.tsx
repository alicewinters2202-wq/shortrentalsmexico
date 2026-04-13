interface Props { lang: string }

export default function WhyUs({ lang }: Props) {
  const es = lang !== 'en';

  const reasons = [
    {
      icon: '📅',
      title: es ? 'Desde 2021' : 'Since 2021',
      desc: es
        ? 'Mas de 4 anos conectando a inquilinos con las mejores propiedades amuebladas en Mexico. Conocemos el mercado como nadie.'
        : 'Over 4 years connecting tenants with the best furnished properties in Mexico. We know the market like no one else.',
    },
    {
      icon: '💰',
      title: es ? 'Mejor precio que Airbnb' : 'Better price than Airbnb',
      desc: es
        ? 'Airbnb cobra hasta un 40% de comision a los duenos. Nosotros cobramos menos, lo que se traduce en precios mas bajos para ti.'
        : 'Airbnb charges owners up to 40% commission. We charge less, which translates to lower prices for you.',
    },
    {
      icon: '👥',
      title: es ? 'Equipo de +40 personas' : 'Team of 40+ people',
      desc: es
        ? 'Contamos con agentes, abogados, personal de limpieza, managers de unidades y soporte. Siempre hay alguien para atenderte.'
        : 'We have agents, lawyers, cleaning staff, unit managers and support. There is always someone to assist you.',
    },
    {
      icon: '⚖️',
      title: es ? 'Respaldo legal' : 'Legal backing',
      desc: es
        ? 'Nuestros abogados supervisan cada contrato para que tu estancia este protegida desde el primer dia.'
        : 'Our lawyers oversee every contract so your stay is protected from day one.',
    },
    {
      icon: '🧹',
      title: es ? 'Limpieza profesional' : 'Professional cleaning',
      desc: es
        ? 'Personal de limpieza dedicado para mantener tu espacio impecable durante toda tu estancia.'
        : 'Dedicated cleaning staff to keep your space spotless throughout your stay.',
    },
    {
      icon: '🛡️',
      title: es ? 'Soporte 24/7' : '24/7 Support',
      desc: es
        ? 'Cualquier inconveniente tiene solucion. Nuestro equipo de soporte esta disponible para resolver cualquier situacion.'
        : 'Any issue has a solution. Our support team is available to resolve any situation.',
    },
  ];

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-widest uppercase font-medium mb-3" style={{ color: 'var(--gold)' }}>
          {es ? 'Por que elegirnos' : 'Why choose us'}
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl mb-4" style={{ color: 'var(--ink)' }}>
          {es ? 'La diferencia ShortStayMX' : 'The ShortStayMX difference'}
        </h2>
        <p className="text-sm max-w-xl mb-14" style={{ color: 'var(--muted)' }}>
          {es
            ? 'No somos solo una plataforma. Somos un equipo completo que te acompana antes, durante y despues de tu estancia.'
            : 'We are not just a platform. We are a complete team that accompanies you before, during and after your stay.'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <span className="text-3xl mb-4 block">{r.icon}</span>
              <h3 className="font-serif text-xl mb-2" style={{ color: 'var(--ink)' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
