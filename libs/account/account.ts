import {Currency} from "../currency/currencyClass";
import {Wallet} from "../wallet/walletClass";
import {TransactionStore} from "../../data/transactions-store/transactions-store.interface";
import {Transaction} from "../../interfaces/transaction/transaction.interface";
import {TransactionDetails} from "../../interfaces/transaction/transaction-details.interface";

export class Account {

    id: string
    wallets: Map<Currency, Wallet>
    currencies: Map<string, Currency>
    transactionsStore: TransactionStore
    loaded: boolean;
    loading: boolean;
    updating: boolean;
    transactions: Transaction[]

    constructor() {
        //прописать обзерверы
        this.transactionsStore.getUpdating$().subscribe(this.updateUpdating)
        this.transactionsStore.getLoading().subscribe(this.updateLoading)
        this.transactionsStore.getLoaded$().subscribe(this.updateLoaded)
        this.transactionsStore.getTransactions$().subscribe(this.updateTransactions)
    }

    public send (details: TransactionDetails): void{
        this.transactionsStore.createTransaction(details)
    }

    private updateTransactions(transactions: Transaction[]): void {
        this.updateWallets(transactions)
    }

    private updateLoading(loading: boolean): void {
        this.loading = loading;
    }

    private updateLoaded(loaded: boolean): void {
        this.loaded = loaded;
    }

    private updateUpdating(updating: boolean): void {
        this.updating = updating;
    }

    private updateWallets(transactions: Transaction[]): void {
        // итерировать транзакции
        for (let i = 0; i<= transactions.length; i++) {
            let currentTransaction = transactions[i]
            // if нет кошелька с валютой текущей транзакции
            // создать кошелёк
            if (!this.currencies.has(currentTransaction.details.currency)) {
                let newCurrency = new Currency(currentTransaction.details.currency)
                let newWallet = new Wallet(newCurrency)
                // добавить в мэпы
                this.currencies.set(newCurrency.currencyCode, newCurrency)
                this.wallets.set(newCurrency, newWallet)
                newWallet.addTransaction(currentTransaction)
            }
            // добавить транзакцию в существующий кошелёк
        }
    }

}