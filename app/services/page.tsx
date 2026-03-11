import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone, Music, Monitor, Cpu, Wifi, Camera, Shield,
  Zap, Droplets, HardHat, Palette, CheckCircle2, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Elite Home AV — Complete Home Solutions SE Texas',
  description:
    'Home audio, home theater, automation, networking, surveillance, security, electrical, plumbing, construction & design. All from one company in SE Texas. (409) 790-7889.',
  alternates: { canonical: 'https://www.elitehomeav.com/services' },
};

const PHONE = '(409) 790-7889';
const PHONE_HREF = 'tel:4097907889';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  metaTitle: string;
  metaDesc: string;
  headline: string;
  body: string[];
  includes: string[];
  localAngle: string;
  image: string;
}

const services: Service[] = [
  {
    id: 'audio',
    image: 'https://image.pollinations.ai/prompt/luxury%20whole%20home%20audio%20system%20ceiling%20speakers%20modern%20living%20room%20professional%20installation%20cinematic%20dark?width=1200&height=500&nologo=true&seed=42',
    icon: Music,
    title: 'Home Audio',
    metaTitle: 'Home Audio Installation | SE Texas | Elite Home AV',
    metaDesc: 'Whole-home audio, surround sound & outdoor speakers in Beaumont, Lumberton & SE Texas.',
    headline: 'Sound That Fills Your Home — Not Just One Room',
    body: [
      'Great audio isn\'t just for concert halls. It\'s for your back porch on a Friday night, your kitchen while you cook, your bedroom when you want to shut the world out. We design and install home audio systems that sound incredible and work the way you want them to.',
      'Whether you\'re looking for a fully integrated whole-home audio system, a dedicated listening room with high-end components, or outdoor speakers built to survive the Southeast Texas humidity, we build it right. No visible mess, no cheap equipment, no shortcuts.',
      'We work with leading brands — Sonos, Klipsch, Bose, and more — and we customize every system to the room, the use case, and the budget.',
    ],
    includes: [
      'Whole-home multi-zone audio design and installation',
      'Outdoor speaker systems (weather-rated for SE Texas climate)',
      'Dedicated home listening rooms',
      'Surround sound setup and calibration',
      'Hidden in-wall and in-ceiling speaker installation',
      'Integration with smart home and automation systems',
      'Custom media cabinet and equipment rack builds',
    ],
    localAngle: 'Southeast Texas homes — from waterfront properties on Toledo Bend and Sam Rayburn to neighborhoods in Beaumont, Lumberton, and Port Arthur — deserve audio that sounds as good as they look. We\'ve installed systems all across this region and we know what holds up in our climate.',
  },
  {
    id: 'video',
    image: 'https://image.pollinations.ai/prompt/dedicated%20home%20theater%20room%204K%20projector%20acoustic%20panels%20stadium%20seating%20dark%20luxury%20cinematic?width=1200&height=500&nologo=true&seed=84',
    icon: Monitor,
    title: 'Home Video',
    metaTitle: 'Home Theater & Video Install | SE Texas',
    metaDesc: '4K home theaters, projector rooms & outdoor video in SE Texas. Expert install, clean results. (409) 790-7889.',
    headline: 'Your Living Room Deserves Better Than a Big Box Store Setup',
    body: [
      'A mounted TV is not a home theater. We build video experiences — proper screen sizing, optimized placement, projector and screen setups, 4K calibration, and clean cable management that makes your room look like the installer actually cared.',
      'From a single room upgrade to a full dedicated theater room with acoustic treatment and stadium seating, we handle every step. We\'re not just hanging a TV on the wall — we\'re designing a space where watching content feels like an event.',
      'Outdoor video is also our thing. Pool area projector screens, covered patio entertainment walls, weatherproof display solutions built to handle the heat, humidity, and rain that come with living in SE Texas.',
    ],
    includes: [
      '4K/OLED/QLED TV selection guidance and installation',
      'Projector and screen installation and calibration',
      'Dedicated home theater room builds',
      'Outdoor and covered patio entertainment systems',
      'In-wall cable and conduit management',
      'AV receiver and component setup',
      'Streaming device and smart TV integration',
      'Acoustic treatment for dedicated theater rooms',
    ],
    localAngle: 'Whether you\'re building a lake house near Sam Rayburn, a new home in Lumberton, or upgrading a Port Arthur property, we bring the same level of installation quality to every job.',
  },
  {
    id: 'automation',
    image: 'https://image.pollinations.ai/prompt/smart%20home%20automation%20control%20panel%20luxury%20modern%20home%20interior%20sleek%20dark%20cinematic?width=1200&height=500&nologo=true&seed=168',
    icon: Cpu,
    title: 'Home Automation',
    metaTitle: 'Smart Home Automation | SE Texas | Elite Home AV',
    metaDesc: 'Control4, Lutron & full smart home systems in Beaumont, Lumberton & SE Texas. Lights, locks, AV, climate — all in one app. (409) 790-7889.',
    headline: 'Your Home Should Work for You',
    body: [
      'Imagine pulling into your driveway and having the lights come on, the thermostat adjust, the garage door open, and your music start — without touching a button. That\'s what a properly built smart home does. It learns how you live and gets out of the way.',
      'We design and install home automation systems that bring everything together: lighting, climate, audio, video, security, locks, shades, and more — all controlled from one app, one voice command, or one tap on a touchscreen. We work with leading platforms including Control4, Lutron, Crestron, and Savant.',
      'No oversold junk, no systems that break every time the internet hiccups. We build automation that\'s reliable, intuitive, and actually makes life easier.',
    ],
    includes: [
      'Full smart home design and system integration',
      'Lighting control and scene programming',
      'Smart thermostat and HVAC integration',
      'Automated shading and motorized window treatments',
      'Smart lock and access control installation',
      'Voice control integration (Alexa, Google Home, Siri)',
      'Single-app control for all home systems',
      'Remote access and monitoring setup',
      'Ongoing system support and updates',
    ],
    localAngle: 'Homeowners throughout SE Texas — Beaumont, Galveston, Port Arthur, Lumberton and beyond — are leveling up their homes. We bring Control4 and enterprise-grade automation to Southeast Texas homes at every price point.',
  },
  {
    id: 'networking',
    image: 'https://image.pollinations.ai/prompt/network%20rack%20server%20cabinet%20patch%20panel%20managed%20switch%20UPS%20clean%20cable%20management%20dark?width=1200&height=500&nologo=true&seed=462',
    icon: Wifi,
    title: 'Networking',
    metaTitle: 'Home Network Installation | SE Texas',
    metaDesc: 'Whole-home Wi-Fi, Cat6 wiring & structured cabling in SE Texas. No dead zones. Serving Beaumont, Lumberton, Port Arthur & beyond. (409) 790-7889.',
    headline: 'Wi-Fi That Actually Works Everywhere',
    body: [
      'If you\'ve got dead zones in your home, you\'ve got a network that wasn\'t built right. We design and install enterprise-grade Wi-Fi and networking infrastructure that covers your entire home — every corner, every floor, every garage and outbuilding.',
      'We don\'t just plug in a router. We run structured cabling, design access point placement, segment your network for security, and make sure your streaming, gaming, smart home devices, and security cameras all have the bandwidth they need.',
      'For home offices, media rooms, and connected homes with dozens of smart devices, a properly built network is the foundation everything else runs on. Don\'t skip it.',
    ],
    includes: [
      'Whole-home Wi-Fi design and installation (Ubiquiti, Eero Pro, Netgear Orbi, and more)',
      'Structured Cat6/Cat6A cabling runs',
      'Network rack and patch panel installation',
      'Wired ethernet to key locations (theater rooms, offices, game rooms)',
      'Network segmentation (IoT, guest, and private networks)',
      'Firewall and router configuration',
      'Network closet buildouts',
      'Integration with smart home and automation systems',
    ],
    localAngle: 'From rural properties near Toledo Bend and Sam Rayburn to homes in Beaumont and Port Arthur, we\'ve built networks for SE Texas homes of all sizes. We know how to handle large square footage, outbuildings, and the unique challenges of our region.',
  },
  {
    id: 'surveillance',
    image: 'https://image.pollinations.ai/prompt/4K%20security%20camera%20system%20modern%20home%20exterior%20night%20vision%20perimeter%20surveillance%20dark?width=1200&height=500&nologo=true&seed=252',
    icon: Camera,
    title: 'Surveillance',
    metaTitle: 'Security Camera Installation | SE Texas',
    metaDesc: '4K surveillance systems, night vision & remote access for SE Texas homes. Lumberton, Beaumont, Galveston, Toledo Bend. (409) 790-7889.',
    headline: 'See Everything. Miss Nothing.',
    body: [
      'A security camera system is only as good as what it can actually show you. Blurry footage, black screens at night, cameras that miss half the property — that\'s not security, it\'s theater. We install professional-grade surveillance systems with crystal-clear 4K footage, real night vision, wide coverage, and remote access from your phone.',
      'We design the camera placement, run the cabling, configure the recording and storage, and make sure you can actually see what\'s happening around your home — day or night, from anywhere in the world.',
      'We use commercial-grade equipment that outlasts the cheap box store stuff by years.',
    ],
    includes: [
      'Professional camera placement and system design',
      '4K and HD IP camera installation',
      'Night vision and low-light camera options',
      'NVR/DVR system installation and configuration',
      'Local and cloud storage setup',
      'Remote viewing via smartphone app',
      'Motion detection zones and alert configuration',
      'Driveway, perimeter, and entry point coverage',
      'Integration with smart home and automation systems',
    ],
    localAngle: 'Protecting your home in Lumberton, Beaumont, Port Arthur, or out on the lake at Toledo Bend or Sam Rayburn takes a system built for the environment. We use cameras rated for the heat, humidity, and weather conditions of Southeast Texas.',
  },
  {
    id: 'security',
    image: 'https://image.pollinations.ai/prompt/smart%20home%20security%20keypad%20luxury%20entryway%20modern%20dark%20cinematic?width=1200&height=500&nologo=true&seed=100',
    icon: Shield,
    title: 'Security',
    metaTitle: 'Home Security Systems | SE Texas | Elite AV',
    metaDesc: 'Full home security systems — sensors, smart locks & monitoring — in Beaumont, Lumberton & SE Texas. Real protection. (409) 790-7889.',
    headline: 'Real Security. Not Just a Sticker in the Window.',
    body: [
      'A yard sign isn\'t a security system. Neither is a cheap kit from the internet that loses its connection half the time. We install professional security systems with door and window sensors, motion detectors, glass break sensors, smart locks, and monitoring integration.',
      'We work with systems that integrate with your smart home, your cameras, and your phones, so you get real-time alerts, remote arming and disarming, and complete visibility into what\'s happening at your home.',
      'Security should be simple to use and impossible to beat. That\'s what we build.',
    ],
    includes: [
      'Full security system design and installation',
      'Door and window contact sensors',
      'Motion detection coverage',
      'Glass break and environmental sensors',
      'Smart lock installation and integration',
      'Keypads and touchscreen control panels',
      'Smart home and automation integration',
      'Remote arm/disarm via smartphone',
      'Professional monitoring setup (optional)',
      'Video doorbell installation',
    ],
    localAngle: 'Homeowners across SE Texas — from Galveston Island to Beaumont neighborhoods to rural properties in Hardin County — trust us to build security systems that work even when the power flickers or the internet goes down.',
  },
  {
    id: 'electrical',
    image: 'https://image.pollinations.ai/prompt/luxury%20modern%20lighting%20design%20interior%20architecture%20smart%20home%20dark%20cinematic?width=1200&height=500&nologo=true&seed=200',
    icon: Zap,
    title: 'Electrical',
    metaTitle: 'Electrical Services | Beaumont & SE Texas',
    metaDesc: 'Panel upgrades, circuit additions & rewires in Lumberton, Beaumont & SE Texas. Safe, code-compliant electrical work. (409) 790-7889.',
    headline: 'Electrical Work Done Right — Safe, Clean, and Up to Code',
    body: [
      'Electrical isn\'t the place to cut corners. We handle everything from adding circuits for your new home theater or EV charger to full-panel upgrades and whole-home rewires. Every job is done to code, inspected when required, and built to last.',
      'Need a 20A dedicated circuit for your AV equipment rack? A subpanel for a new addition? Outlet relocation for a media room remodel? We handle all of it as part of the complete project — no waiting on a separate electrician to show up later.',
      'Our electrical work integrates seamlessly with our AV, automation, and construction work — because when one company does it all, the coordination is built in.',
    ],
    includes: [
      'Circuit additions and dedicated circuit runs',
      'Panel upgrades and subpanel installation',
      'Whole-home rewires',
      'Outlet, switch, and fixture installation',
      'In-wall conduit and low-voltage wiring',
      'EV charger circuit installation',
      'Recessed lighting and smart lighting wiring',
      'Code compliance and inspection coordination',
    ],
    localAngle: 'Southeast Texas homes — especially older construction in Beaumont and Port Arthur — often need electrical upgrades to handle the demands of modern home systems. We\'ve done this work throughout the region and know the local code requirements.',
  },
  {
    id: 'plumbing',
    image: 'https://image.pollinations.ai/prompt/luxury%20modern%20bathroom%20spa%20smart%20shower%20dark%20cinematic%20architectural?width=1200&height=500&nologo=true&seed=300',
    icon: Droplets,
    title: 'Plumbing',
    metaTitle: 'Plumbing Services | Lumberton & SE Texas',
    metaDesc: 'New construction, remodel & repair plumbing in SE Texas. Lumberton, Beaumont, Port Arthur. No waiting on a separate contractor. (409) 790-7889.',
    headline: 'Plumbing That\'s Part of the Plan — Not an Afterthought',
    body: [
      'When you\'re building a media room addition, finishing a basement, or doing a full home remodel, plumbing is part of the project — not a separate call to a separate company. We handle new rough-in, fixture installation, repairs, and remodel plumbing as part of the complete job.',
      'We keep it simple: you tell us what you\'re building, and we make sure it has what it needs. New bathroom in the addition? We run the drain and supply lines. Outdoor kitchen at the pool? We handle the connections.',
      'No plumber waiting three weeks to show up. No one waiting on someone else. We get it done.',
    ],
    includes: [
      'New construction rough-in plumbing',
      'Remodel plumbing and rerouting',
      'Bathroom and kitchen fixture installation',
      'Outdoor kitchen and entertainment area plumbing',
      'Water line additions and extensions',
      'Drain line installation',
      'Water heater installation',
    ],
    localAngle: 'Southeast Texas construction — new builds, additions, lake house builds near Sam Rayburn and Toledo Bend — all need plumbing handled right from the start. We integrate it into the full project scope so nothing gets missed.',
  },
  {
    id: 'construction',
    image: 'https://image.pollinations.ai/prompt/luxury%20home%20remodel%20living%20room%20architectural%20design%20dark%20cinematic?width=1200&height=500&nologo=true&seed=400',
    icon: HardHat,
    title: 'Construction & Remodel',
    metaTitle: 'Home Remodel & Construction | SE Texas',
    metaDesc: 'Theater rooms, additions & full home remodels in SE Texas. Pre-wired for AV from day one. Serving Lumberton, Beaumont & beyond. (409) 790-7889.',
    headline: 'We Build It Right — Then We Make It Smart',
    body: [
      'Most AV companies install into spaces someone else built. We build the spaces ourselves — and then make them smart. Dedicated home theater rooms, media room additions, bonus room buildouts, full home remodels — we handle the framing, drywall, trim, flooring, and finishes, then integrate the technology seamlessly because we planned for it from day one.',
      'No gap between what the builder does and what the AV installer needs. No "we can\'t run that cable because the walls are already up." We think through the whole project — every wire path, every equipment location, every access point — before the first stud goes up.',
      'We also do full home remodels: kitchens, bathrooms, additions, and whole-home renovations. Whatever your home needs, we have the trades to do it.',
    ],
    includes: [
      'Home theater room design and buildout',
      'Media room and bonus room additions',
      'Home remodels (kitchen, bath, living areas)',
      'Framing, drywall, insulation',
      'Finish carpentry and trim',
      'Flooring installation',
      'Acoustic treatment and soundproofing',
      'Custom built-ins and entertainment walls',
      'Pre-wire during construction for AV and automation',
      'Full general contracting services',
    ],
    localAngle: 'From new construction in the Lumberton area to lake house builds and remodels across SE Texas — Beaumont, Vidor, Silsbee, and beyond — we bring the full construction and technology package under one contract.',
  },
  {
    id: 'design',
    image: 'https://image.pollinations.ai/prompt/luxury%20home%20office%20architectural%20plans%20interior%20design%20dark%20moody?width=1200&height=500&nologo=true&seed=500',
    icon: Palette,
    title: 'Design',
    metaTitle: 'Home AV & Smart Home Design | SE Texas',
    metaDesc: 'Pre-project design for home theaters, automation & AV systems in SE Texas. Get it right before you build. Lumberton & Beaumont. (409) 790-7889.',
    headline: 'Plan It Right Before You Build It',
    body: [
      'The biggest mistake in home projects is skipping the design phase. Running the wrong cable, putting a TV where the light kills the picture, building a room that looks good but sounds terrible — these are problems that get caught in design, not after the drywall is up.',
      'We work with you before the project starts to plan every detail: screen placement for optimal viewing angles, speaker placement for ideal acoustics, lighting positions that don\'t create glare, equipment locations with proper ventilation, cable paths that don\'t require tearing up walls later.',
      'Good design makes the build faster, the result better, and the whole process a lot less painful.',
    ],
    includes: [
      'Home theater and media room design',
      'Smart home system design and layout',
      'Lighting design for function and ambiance',
      'Network infrastructure planning',
      'AV equipment selection and specification',
      'Room acoustic analysis and treatment planning',
      '3D renderings and layout drawings (where applicable)',
      'Pre-construction consultation and planning',
    ],
    localAngle: 'Whether you\'re building from scratch in Lumberton or planning a renovation in Beaumont or Port Arthur, getting the design right means the finished product is exactly what you envisioned — and it actually works the way you want it to.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">What We Do</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Complete Integration.<br />
            <span className="text-[#E8521A]">Flawlessly Executed.</span>
          </h1>
          <div className="divider-orange mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            End-to-end expertise. From initial architectural planning through final calibration — we handle your home's entire technology ecosystem, ensuring every system communicates perfectly under a single master integrator.
          </p>
          <a href={PHONE_HREF} className="btn-primary">
            <Phone className="w-4 h-4" />
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Services Jump Nav */}
      <nav className="sticky top-16 md:top-20 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#222222] overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex gap-0 min-w-max">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-center gap-1.5 px-3 py-3 text-xs font-bold uppercase tracking-wide text-gray-400 hover:text-[#E8521A] transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-[#E8521A]"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {s.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Service Sections */}
      <div className="bg-[#0A0A0A]">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isAlt = index % 2 === 1;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 md:py-24 ${isAlt ? 'bg-[#0d0d0d]' : 'bg-[#0A0A0A]'} border-b border-[#222222] scroll-mt-32`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* AI Generated Service Image */}
                <div className="w-full h-64 md:h-96 mb-12 relative overflow-hidden rounded-md border border-[#222] bg-[#141414] group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10 opacity-60" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <div className="w-12 h-1 bg-[#E8521A] mb-3" />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Left: Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#E8521A] flex items-center justify-center rounded-sm">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="section-label">{service.title}</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                      {service.headline}
                    </h2>
                    <div className="divider-orange mb-6" />
                    <div className="space-y-4 mb-8">
                      {service.body.map((para, i) => (
                        <p key={i} className="text-gray-400 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Local Angle */}
                    <div className="bg-[#E8521A]/10 border border-[#E8521A]/20 rounded-sm p-4 mb-8">
                      <p className="text-[#E8521A] font-bold text-xs uppercase tracking-widest mb-2">SE Texas Local</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{service.localAngle}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={PHONE_HREF} className="btn-primary">
                        <Phone className="w-4 h-4" />
                        Call {PHONE}
                      </a>
                      <Link href="/contact" className="btn-outline-orange">
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Includes list */}
                  <div className="card-dark p-6 md:p-8">
                    <h3 className="text-white font-black text-lg mb-6 uppercase tracking-wide">
                      What&rsquo;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#E8521A] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-6 border-t border-[#222222]">
                      <p className="text-gray-500 text-xs mb-2">Questions? We give straight answers.</p>
                      <a
                        href={PHONE_HREF}
                        className="text-[#E8521A] font-black text-xl hover:text-white transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Footer */}
      <section className="py-20 bg-[#E8521A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white text-4xl md:text-5xl font-black mb-4">
            One Company. Every Trade.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            No juggling contractors. No waiting on callbacks. Elite Home AV handles everything.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-black text-white font-black text-2xl px-10 py-5 rounded-sm hover:bg-[#0A0A0A] transition-colors"
          >
            <Phone className="w-6 h-6" />
            {PHONE}
          </a>
        </div>
      </section>
    </>
  );
}
