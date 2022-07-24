"use strict";
var greet;
greet = function (name, greeting) {
    console.log(greeting + " " + name);
};
var calc;
calc = function (num1, num2, action) {
    if (action === "add") {
        return num1 + num2;
    }
    return num1 - num2;
};
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
