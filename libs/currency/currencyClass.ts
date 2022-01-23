export class Currency {

    title: string;
    currencyCode: string;
    isBaseCurrency: boolean;

    constructor(currencyCode: string) {
        this.currencyCode = currencyCode;
    }

    public toString(): string{
        return this.currencyCode;
    }



}