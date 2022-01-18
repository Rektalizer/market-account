import {TransactionStatus} from "../transaction-status/transaction-status.interface";
import {TransactionDetails} from "../transaction-details/transaction-details.interface";

export interface Transaction {
    status: TransactionStatus,
    details: TransactionDetails
}