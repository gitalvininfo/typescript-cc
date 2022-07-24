const me = {
    name: "Alvin",
    age: 24,
    speak: (text) => {
        console.log(text);
    },
    spend: (a) => {
        console.log(a);
        return a;
    },
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
const inv1 = new Invoice('mario', 'work on the mario website', 100);
const inv2 = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.format());
});
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
