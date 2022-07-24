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
};
greetPerson(me);
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
let tup = ['ryu', 20, true];
tup[0] = 'ken';
tup[1] = 50;
tup[2] = true;
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
});
