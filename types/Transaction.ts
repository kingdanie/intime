export interface Transaction {
    status?: Status,
    subject: string,
    message: string,
    username: string,
    date_initialized: string
}