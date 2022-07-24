// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;


age = 24;


isLoggedIn = true;


// arrays
let ninjas: string[] = [];
ninjas = ["yoshi", "mario"];


// union types
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(20);

let uid: string | number;
uid = "123";
uid = 123;



// objects
let ninjaObject: object;
ninjaObject = { name: "yoshi", age: 30 };

let ninjaTwo: {
    name: string;
    age: number;
    beltColour: string
};

ninjaTwo = {
    name: "luigi",
    age: 60,
    beltColour: "black"
}