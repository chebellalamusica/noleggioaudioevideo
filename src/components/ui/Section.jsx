export default function Section({ id, title, icon: Icon, children }) {
  return (
      <section 
          id={id}
          className="relative p-8 md:p-12 rounded-2xl scroll-mt-24 overflow-visible"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.85) 40%, rgba(255,255,255,0.05) 80%, rgba(255,255,255,0) 100%)' }}
      >
        {/* Overlay sfuocato massimo, raggio ampio, nessun bordo netto */}
        <div aria-hidden className="absolute -inset-2 rounded-[2.5rem] pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0) 100%)', filter: 'blur(32px)', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}} />
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-navy mb-6 flex items-center gap-2 drop-shadow-sm">
              {Icon && <Icon className="text-gold w-7 h-7 drop-shadow-sm" />}
              {title}
          </h2>
          <div className="text-lg text-navy/90 font-medium leading-relaxed">
            {children}
          </div>
        </div>
      </section>
  )
}