export interface TransactionStatus {
    createdAt: Date,
    created: true,
    processedAt: Date,
    processed: boolean,
    completed: boolean,
    rejected: boolean,
    reason?: string
}