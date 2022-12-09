export interface Message {
    status?: Status,
    message: string,
    recipient: Recipient,
    username: string,
    delivery_date?: string,
    sent_date: string
}

export interface Recipient {
    name?: string,
    phone: string,
    email?: string
}

export enum Status {sent = "SENT", draft = "DRAFT", delivered = "DELIVERED", failed = "NOT SENT", scheduled = "SCHEDULED"}