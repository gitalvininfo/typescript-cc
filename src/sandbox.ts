let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
    console.log(`${greeting} ${name}`)
}


let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if (action === "add") {
        return num1 + num2;
    }
    return num1 - num2;
}


let logDetails: (obj: { name: string, age: number }) => void;

logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}