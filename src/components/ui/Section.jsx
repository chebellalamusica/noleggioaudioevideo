export default function Section({ id, title, icon: Icon, children }) {
  return (
    <section 
      id={id}
      className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 
                 transition-all hover:translate-y-[-5px] hover:shadow-lg shadow-sky-800/30
                 scroll-mt-24"
    >
      <h2 className="text-2xl font-semibold text-[#5F5F5F]-5 mb-6 flex items-center gap-2">
        {Icon && <Icon className="text-[#A0D1F6] w-7 h-7" />}
        {title}
      </h2>
      {children}
    </section>
  )
}