export class InquiryStore {
  constructor(filename?: string)
  create(row: { intent?: string; name: string; phone: string; email?: string; service: string; message: string }): any
  get(id: string): any
  close(): void
}
export function getInquiryStore(): InquiryStore
