import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    constructor(
        private receipt: string,
        private details: string,
        private amount: number
    ) {
    }

    format() {
        return `${this.receipt} is owed £ ${this.amount} for ${this.details}.`;
    }

}