export type CaseStudyChapter = {
  label: "Constraint" | "Thinking" | "Execution" | "Intended result"
  title: string
  copy: string
}

export type CaseStudy = {
  slug: string
  title: string
  location: string
  status: string
  summary: string
  scope: readonly string[]
  chapters: readonly CaseStudyChapter[]
  mediaSlots: readonly string[]
}

export const CASE_STUDIES: readonly CaseStudy[] = [{
  slug: "under-the-surface",
  title: "Planning the invisible",
  location: "Southeast Texas",
  status: "Renovation planning underway",
  summary: "A whole-home renovation creates one valuable window to coordinate the infrastructure that will disappear behind the finished space.",
  scope: ["Network and Wi-Fi", "Audio and video", "Surveillance", "Lighting coordination", "Service access"],
  chapters: [
    { label: "Constraint", title: "Make the hard decisions while access is still practical.", copy: "Once insulation, drywall, cabinetry, and finishes return, every missed pathway becomes more disruptive and expensive. The planning stage has to account for the structure and the customer's long-term priorities before cable is pulled." },
    { label: "Thinking", title: "Plan the property as one connected system.", copy: "Network coverage, display locations, audio zones, camera views, lighting control, equipment ventilation, and future service all compete for space. Coordinating them early prevents one trade's solution from becoming another system's obstruction." },
    { label: "Execution", title: "Turn possibilities into documented pathways.", copy: "The work begins with field verification, equipment-location planning, route protection, room-by-room decisions, and clear rough-in requirements. The goal is a serviceable foundation rather than a collection of one-off wires." },
    { label: "Intended result", title: "A finished home that does not advertise the effort behind it.", copy: "The project is still underway, so this is a design objective rather than a completed-project claim: dependable coverage, clean equipment placement, straightforward control, and room to adapt without reopening finished construction." },
  ],
  mediaSlots: ["Existing shell", "Open-wall conditions", "Existing cable path", "Ceiling coordination"],
}] as const
