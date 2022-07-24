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


enum ResourceType {
    BOOK, AUTHOR, FILM, DIRECTOR, PERSON
}

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T
}



const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "alvin" }
}

const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: { name: "alvin" }
}

console.log(docOne, docTwo)