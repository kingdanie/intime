export interface Message {
    status?: Status,
    message: string,
    reciever_number: Recipient[],
    username: string,
    delivery_date?: string,
    sent_date: string
}

interface Recipient {
    name?: string,
    phone: string,
    email?: string
}

enum Status {sent = "SENT", delivered = "DELIVERED", failed = "NOT SENT", scheduled = "SCHEDULED"}