export default function Stats() {
  const stats = [
    { value: "95%", label: "Customer Satisfaction" },
    { value: "90%", label: "Project Success" },
    { value: "85%", label: "Client Retention" }
  ]

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-4xl px-2 sm:px-0" aria-label="Impact statistics">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-item border border-neutral-800/80 bg-neutral-900/40 rounded-lg p-2.5 sm:p-5 text-center backdrop-blur-sm hover:border-neutral-700 transition-colors"
        >
          <div className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-0.5 sm:mb-1">
            {stat.value}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium leading-tight">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
