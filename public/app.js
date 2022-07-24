"use strict";
// const anchor = document.querySelector("a")!;
// console.log(anchor.href)
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3 " + this.amount + " for " + this.details + ".";
    };
    return Invoice;
}());
var inv1 = new Invoice('mario', 'work on the mario website', 100);
var inv2 = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(inv1);
invoices.push(inv2);
console.log(invoices);
var form = document.querySelector(".new-item-form");
// inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
