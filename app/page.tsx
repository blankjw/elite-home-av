import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { StatsBar } from "@/components/stats-bar"

export default function Home() {
  return (
    <>
      
      <Hero />

      {/* Brands Section */}
      <section className="py-16 bg-[#0A0A0A] border-t border-[#1F1F1F] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm font-semibold tracking-[0.2em] text-[#6B7280] uppercase mb-10">
            Trusted Brands & Partners
          </p>
          
          <div className="relative">
            {/* Gradient masks for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10" />
            
            {/* Auto-scrolling logo track */}
            <div className="flex gap-16 items-center w-max animate-scroll-left">
              {[
                "Ubiquiti", "RTI", "Sonos", "Lutron", "Leviton", "Klipsch", "Sony", "BenQ", "Apple",
                "Ubiquiti", "RTI", "Sonos", "Lutron", "Leviton", "Klipsch", "Sony", "BenQ", "Apple"
              ].map((brand, idx) => (
                <div key={idx} className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 w-32">
                  {brand === "Sonos" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Sonos_%28Unternehmen%29_logo.svg/250px-Sonos_%28Unternehmen%29_logo.svg.png" alt="Sonos" className="h-4 object-contain invert" />}
                  {brand === "Ubiquiti" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ubiquiti_Logo_2023.svg/250px-Ubiquiti_Logo_2023.svg.png" alt="Ubiquiti" className="h-6 object-contain invert" />}
                  {brand === "Lutron" && <span className="font-bebas text-3xl sm:text-4xl tracking-widest text-white">LUTRON</span>}
                  {brand === "Leviton" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Leviton_logo.svg/250px-Leviton_logo.svg.png" alt="Leviton" className="h-5 object-contain invert" />}
                  {brand === "Klipsch" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Klipsch_logo.png/250px-Klipsch_logo.png" alt="Klipsch" className="h-6 object-contain invert" />}
                  {brand === "Sony" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/330px-Sony_logo.svg.png" alt="Sony" className="h-4 object-contain invert" />}
                  {brand === "BenQ" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BenQ_wordmark.svg/250px-BenQ_wordmark.svg.png" alt="BenQ" className="h-6 object-contain invert" />}
                  {brand === "Apple" && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/250px-Apple_logo_black.svg.png" alt="Apple" className="h-7 object-contain invert" />}
                  {brand === "RTI" && <span className="font-bebas text-3xl sm:text-4xl tracking-widest text-white italic">RTI</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Services />
      <StatsBar />
      
    </>
  )
}
