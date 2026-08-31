export default function Input({ label, id, type = 'text', rows = 4, ...props }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block font-medium text-[#1a1a1a]">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          rows={rows}
          className="w-full px-4 py-2 rounded-lg bg-white text-[#1a1a1a] border border-[#e8eaed] focus:outline-none focus:ring-2 focus:ring-[#ffb347] focus:border-transparent"
          {...props}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          className="w-full px-4 py-2 rounded-lg bg-white text-[#1a1a1a] border border-[#e8eaed] focus:outline-none focus:ring-2 focus:ring-[#ffb347] focus:border-transparent"
          {...props}
        />
      )}
    </div>
  );
}
