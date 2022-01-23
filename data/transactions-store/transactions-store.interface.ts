import {Observable} from 'rxjs'
import {Transaction} from "../../interfaces/transaction/transaction.interface";
import {TransactionDetails} from "../../interfaces/transaction/transaction-details.interface";

export interface TransactionStore {
    getLoaded$(): Observable<boolean>,
    getLoading(): Observable<boolean>,
    getUpdating$(): Observable<boolean>,
    getTransactions$(): Observable<Transaction[]>,
    createTransaction(details: TransactionDetails)
}