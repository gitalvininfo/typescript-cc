import { HasFormatter } from "../interfaces/HasFormatter.js";


export class ListTemplate {

    constructor(
        private container: HTMLUListElement
    ) {

    }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        console.log('***', item)
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p)

        if (pos === "start") {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}


// GENERICS

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);

    return { ...obj, uid }
}

let docOne = addUID({ name: 'yoshi', age: 40 });


console.log(docOne.uid);


interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}


const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'alvin',
    data: { name: "alvin" }
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: "shoppingList",
    data: ["bread", "milk", "butter"]
}

console.log(docThree, docFour)