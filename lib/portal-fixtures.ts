export const properties = [
  { id: "prop_lake", name: "Lakeview Residence", location: "Lumberton, TX", role: "Owner" },
  { id: "prop_studio", name: "Calder Studio", location: "Beaumont, TX", role: "Project contact" },
]

export const currentProject = {
  id: "prj_2048", title: "Whole-home integration", phase: "Trim & commissioning", progress: 72,
  next: "Lighting scenes review", nextDate: "September 16",
  milestones: [
    { label: "Design approved", state: "complete" },
    { label: "Prewire & infrastructure", state: "complete" },
    { label: "Trim & commissioning", state: "active" },
    { label: "Client orientation", state: "upcoming" },
  ],
}

export const attention = [
  { kind: "Photo request", title: "Upload media-wall dimensions", meta: "Requested Sep 9", href: "/portal/requests" },
  { kind: "Decision", title: "Review lighting keypad finish", meta: "Due Sep 14", href: "/portal/estimate" },
]

export const serviceEvents = [
  { date: "Sep 8", title: "Network tuning", detail: "Completed · published by ELITE" },
  { date: "Aug 27", title: "Equipment rack installation", detail: "Completed · 6 approved photos" },
  { date: "Aug 12", title: "Prewire walkthrough", detail: "Completed · summary available" },
]
