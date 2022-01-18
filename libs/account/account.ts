import {Currency} from "../currency/currencyClass";
import {Wallet} from "../wallet/walletClass";
import {TransactionStore} from "../../data/transactions-store/transactions-store.interface";
import {Transaction} from "../../models/transaction/transaction.interface";
import {TransactionDetails} from "../../models/transaction-details/transaction-details.interface";

export class Account {

    id: string;
    wallets: Map<Currency, Wallet>
    transactionsStore: TransactionStore
    loaded: boolean;
    loading: boolean;
    updating: boolean;
    transactions: Transaction[]

    constructor() {
        //прописать обзерверы
        this.transactionsStore.getUpdating$().subscribe(this.updating)
        this.transactionsStore.getLoading().subscribe(this.loading)
        this.transactionsStore.getLoaded$().subscribe(this.loaded)
        this.transactionsStore.getTransactions$().subscribe(this.transactions)
    }

    public send (details: TransactionDetails): void{
        this.transactionsStore.createTransaction(details)
    }

    public updateTransactions(transactions: Transaction[]): void {
        this.transactionsStore.getTransactions$()
    }

}