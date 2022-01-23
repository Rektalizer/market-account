import {TransactionStatus} from "./transaction-status.interface";
import {TransactionDetails} from "./transaction-details.interface";

export interface Transaction {
    id: string,
    status: TransactionStatus,
    details: TransactionDetails
}