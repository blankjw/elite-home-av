"use client"

export function StatsBar() {
  const stats = [
    { value: "10", label: "Expert Trades", suffix: "+" },
    { value: "1", label: "Unified Company", suffix: "" },
    { value: "Lumberton", label: "Texas Based", suffix: "" },
    { value: "Zero", label: "Subcontractors", suffix: "" }
  ]

  return (
    <section className="relative py-20 sm:py-28 bg-[#0D0D0D] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              #E8521A 100px,
              #E8521A 101px
            )`
          }}
        />
      </div>
      
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent" />
      
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#E8521A]/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center text-center px-4 lg:px-8"
            >
              {/* Divider line (except first) */}
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#E8521A]/40 to-transparent" />
              )}
              
              {/* Value */}
              <div className="flex items-baseline gap-1">
                <span className="font-bebas text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="font-bebas text-3xl lg:text-4xl text-[#E8521A]">{stat.suffix}</span>
                )}
              </div>
              
              {/* Label */}
              <div className="mt-3 text-sm sm:text-base text-[#6B7280] uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>
              
              {/* Underline accent */}
              <div className="mt-4 w-8 h-px bg-[#E8521A]/50" />
            </div>
          ))}
        </div>
        
        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto">
            When you call Elite, you get <span className="text-white font-medium">Elite</span>. 
            Every technician is our employee, trained to our standards.
          </p>
        </div>
      </div>
    </section>
  )
}
