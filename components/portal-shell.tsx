import Link from "next/link"
import { Building2, FileCheck2, FolderLock, Gauge, Headphones, LogOut, ReceiptText, ShieldCheck, Wrench } from "lucide-react"
import { BrandLockup } from "@/components/brand-lockup"
import { DemoBadge } from "@/components/demo-badge"

const links = [
  ["Overview", "/portal", Gauge], ["Project", "/portal/project", Building2], ["Requests", "/portal/requests", Wrench],
  ["Estimate", "/portal/estimate", FileCheck2], ["Invoices", "/portal/invoices", ReceiptText], ["Documents", "/portal/documents", FolderLock], ["ELITE Care", "/portal/care", Headphones],
] as const

type ShellSession={user:{id:string,name:string,role:string},propertyId:string,properties:Array<{id:string,name:string,location:string}>}
export function PortalShell({ children,session }: { children: React.ReactNode,session:ShellSession }) {
  const current=session.properties.find(p=>p.id===session.propertyId)!
  return <div className="portal-light min-h-screen w-full max-w-full bg-[#F7F9FC] text-[#152942]">
    <div className="border-b border-[#DDE3EA] bg-white px-4 py-2"><div className="mx-auto flex min-w-0 max-w-[1440px] items-center justify-between gap-3"><div className="min-w-0 overflow-hidden"><BrandLockup variant="nav" onLight linked={false} /></div><DemoBadge /></div></div>
    <div className="mx-auto grid min-w-0 max-w-[1440px] lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside className="min-w-0 border-b border-[#DDE3EA] bg-white px-4 py-3 lg:min-h-[calc(100vh-52px)] lg:border-b-0 lg:border-r lg:p-6">
        <form action="/api/session/property" method="post" className="grid min-w-0 w-full gap-3">
          <label className="block min-w-0 text-[10px] font-semibold uppercase tracking-[.15em] text-[#526274]">Property
            <select name="propertyId" defaultValue={session.propertyId} className="mt-1 block w-full max-w-full min-w-0 rounded-md border border-[#CBD3DD] bg-white px-2 py-2 text-sm font-semibold text-[#152942]">{session.properties.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select>
          </label>
          <div className="flex min-w-0 flex-col gap-2">
            <Link href="/portal/requests" className="inline-flex w-full min-w-0 items-center justify-center whitespace-nowrap rounded-md bg-[#245DC1] px-3 py-2 text-sm font-semibold text-white">Request help</Link>
            <button className="text-xs font-semibold text-[#245DC1]">Switch property</button>
          </div>
        </form>
        <nav aria-label="Portal pages" className="mt-3 max-w-full lg:mt-6"><div className="flex flex-wrap gap-1 lg:grid lg:w-full lg:grid-cols-1">{links.map(([label, href, Icon]) => <Link key={href} href={href} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-[#405165] hover:bg-[#EAF0F8] hover:text-[#245DC1] lg:min-h-10 lg:px-3 lg:text-sm"><Icon className="h-4 w-4 shrink-0" />{label}</Link>)}</div></nav>
        {session.user.role==="staff"&&<Link href="/portal/staff" className="mt-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[#526274] hover:bg-[#EAF0F8]"><ShieldCheck className="h-4 w-4"/>Staff</Link>}
        <form action="/api/session/logout" method="post"><button className="mt-4 inline-flex items-center gap-2 text-xs text-[#526274] hover:text-[#245DC1]"><LogOut className="h-4 w-4" />Sign out</button></form>
      </aside>
      <div className="min-w-0 max-w-full"><header className="flex min-w-0 items-center justify-between gap-3 border-b border-[#DDE3EA] bg-white px-4 py-3 md:px-8"><p className="min-w-0 truncate text-sm font-semibold text-[#152942]">{session.user.name}<span className="ml-2 text-xs font-normal text-[#526274]">{current.name}</span></p><div className="h-8 w-8 shrink-0 rounded-full bg-[#152942] text-center text-xs font-bold leading-8 text-white">{session.user.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div></header><main className="min-w-0 max-w-full p-4 md:p-8">{children}</main></div>
    </div>
  </div>
}
