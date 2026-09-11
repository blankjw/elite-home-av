import { LogoMark } from "@/components/logo-mark"

export function IntegrationGraphic() {
  return (
    <div className="relative w-full overflow-visible" data-brand="EH-roofline" role="img" aria-label="EH roofline connecting lighting, audio, control, and network">
      <div className="pointer-events-none absolute left-[4%] top-[14%] h-[70%] w-[52%]">
        <LogoMark className="h-full w-full" size={420} />
      </div>
      <svg viewBox="0 0 700 500" fill="none" className="h-auto w-full overflow-visible" aria-hidden="true">
        <circle cx="500" cy="118" r="7" fill="#F7F9FC" />
        <circle cx="528" cy="304" r="7" fill="#F7F9FC" />
        <circle cx="500" cy="430" r="7" fill="#F7F9FC" />
        <path d="M390 118H500M390 304H528M390 430H500" stroke="#B8C3CF" strokeWidth="1.25" opacity=".85" />
        <path d="M500 118V430M500 304H528" stroke="#245DC1" strokeWidth="1.25" opacity=".7" />
        <text x="512" y="108" fill="#B8C3CF" fontSize="11" letterSpacing="1.5">CONNECT</text>
        <text x="540" y="300" fill="#B8C3CF" fontSize="11" letterSpacing="1.5">AUTOMATE</text>
        <text x="512" y="448" fill="#B8C3CF" fontSize="11" letterSpacing="1.5">PROTECT</text>
      </svg>
    </div>
  )
}
