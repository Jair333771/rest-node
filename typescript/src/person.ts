interface IPerson {
    _name: string;
    _age: number;
}

interface IEmployee extends IPerson {
    _job: string;
}

class Person {
    _name: string;
    _age: number;

    constructor(readonly dni: string, data: { name: string, age: number }) {
        const { name, age } = data;
        this._age = age;
        this._name = name;
        this.dni = dni;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        if (value.trim().length === 0)
            throw new Error("Invalid name");
        else
            this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value: number) {
        if (value <= 0)
            throw new Error("Invalid age");
        else
            this._age = value;
    }

    toString() {
        return JSON.stringify(this);
    }
}

let person1: IEmployee = {
    _age: 27,
    _job: "Developer",
    _name: "Jair"
}

const person = new Person("1019287465", { name: "Luisa", age: 27 });
console.log(person.toString());
console.log(person.dni);
console.log(person.name);
person.name = " ";