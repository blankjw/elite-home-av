type Props = { name: string; alt: string; className?: string; priority?: boolean; sizes?: string }
export function EditorialImage({name,alt,className="",priority=false,sizes="(min-width: 1024px) 50vw, 100vw"}:Props){
 return <img className={className} src={`/images/editorial/${name}-1536.webp`} srcSet={`/images/editorial/${name}-768.webp 768w, /images/editorial/${name}-1536.webp 1536w`} sizes={sizes} width={1536} height={1024} alt={alt} loading={priority?"eager":"lazy"} fetchPriority={priority?"high":"auto"} decoding="async" />
}
