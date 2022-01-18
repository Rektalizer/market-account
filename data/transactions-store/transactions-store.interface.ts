import {Observable} from 'rxjs'
import {Transaction} from "../../models/transaction/transaction.interface";
import {TransactionDetails} from "../../models/transaction-details/transaction-details.interface";

export interface TransactionStore {
    getLoaded$(): Observable<boolean>,
    getLoading(): Observable<boolean>,
    getUpdating$(): Observable<boolean>,
    getTransactions$(): Observable<Transaction[]>,
    createTransaction(details: TransactionDetails)
}