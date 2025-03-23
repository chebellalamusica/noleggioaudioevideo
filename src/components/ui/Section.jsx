export default function Section({ id, title, icon: Icon, children }) {
  return (
    <section 
      id={id}
      className="bg-white rounded-2xl border border-gray-200 p-8 mb-8 
                 transition-all hover:translate-y-[-5px] hover:shadow-lg
                 scroll-mt-24"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        {Icon && <Icon className="text-blue-600 w-6 h-6" />}
        {title}
      </h2>
      {children}
    </section>
  )
}