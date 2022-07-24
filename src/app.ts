// const anchor = document.querySelector("a")!;
// console.log(anchor.href)



class Invoice {
    client: string;
    details: string;
    amount: number;


    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }


    format(): string {
        return `${this.client} owes £ ${this.amount} for ${this.details}.`;
    }

}


const inv1 = new Invoice('mario', 'work on the mario website', 100);
const inv2 = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = []

invoices.push(inv1);
invoices.push(inv2);

console.log(invoices)





const form = document.querySelector(".new-item-form") as HTMLFormElement;
// inputs

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})