import {Currency} from "../currency/currencyClass";
import {Transaction} from "../../interfaces/transaction/transaction.interface";

export class Wallet {

    id: string;
    currency: Currency;
    walletTransactions: Map<string, Transaction>

    constructor(currency: Currency) {
        this.id = currency.toString();
        this.currency = currency;
    }

    public getAmount(): number{
        // посчитать сумму на кошельке используя транзакции
      return
    }

    public addTransaction(transaction: Transaction): void {
        //проверить есть ли такие транзакции и добавить только новые
        if (!this.walletTransactions.has(transaction.id)){
            this.walletTransactions.set(transaction.id, transaction);
        } else console.log("This transaction already exists")
    }

    // getTransactions для получения транзакций к отображению


}