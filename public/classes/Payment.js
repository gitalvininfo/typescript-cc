export class Payment {
    constructor(receipt, details, amount) {
        this.receipt = receipt;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.receipt} is owed £ ${this.amount} for ${this.details}.`;
    }
}
