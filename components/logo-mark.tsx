type LogoMarkProps = { className?: string; size?: number; onLight?: boolean }

/** EH roofline monogram, drawn as a crisp, small-size navy and gold mark. */
export function LogoMark({ className = "", size = 48, onLight = false }: LogoMarkProps) {
  const navy = onLight ? "#08243F" : "#F1F3F5"
  return <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true" data-brand="EH">
    <path d="M7 31 50 10 93 31" fill="none" stroke="#BE9B59" strokeWidth="4" />
    <path d="M8 37 50 17 92 37" fill="none" stroke={navy} strokeWidth="7" />
    <path d="M15 44H46V53H25V63H43V72H25V83H46V92H15Z" fill={navy}/>
    <path d="M53 44H63V63H80V44H90V92H80V73H63V92H53Z" fill="#BE9B59"/>
  </svg>
}
