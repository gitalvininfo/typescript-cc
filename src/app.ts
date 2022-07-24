
interface Person {
    name: string;
    age: number;
    speak: (a: string) => void;
    spend: (a: number) => number;
}

const me: Person = {
    name: "Alvin",
    age: 24,
    speak: (text: string): void => {
        console.log(text)
    },
    spend: (a: number): number => {
        console.log(a)
        return a;
    },
};

const greetPerson = (person: Person) => {
}

greetPerson(me);

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);


let docs: HasFormatter[] = [];

docs.push(docOne)
docs.push(docTwo)

let tup: [string, number, boolean] = ['ryu', 20, true];
tup[0] = 'ken';
tup[1] = 50;
tup[2] = true


















const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

    if (type.value === "invoice") {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, "end");

    console.log(doc)

})