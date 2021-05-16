"use strict";
class Person {
    constructor(dni, data) {
        this.dni = dni;
        const { name, age } = data;
        this._age = age;
        this._name = name;
        this.dni = dni;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.trim().length === 0)
            throw new Error("Invalid name");
        else
            this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value <= 0)
            throw new Error("Invalid age");
        else
            this._age = value;
    }
    toString() {
        return JSON.stringify(this);
    }
}
let person1 = {
    _age: 27,
    _job: "Developer",
    _name: "Jair"
};
const person = new Person("1019287465", { name: "Luisa", age: 27 });
console.log(person.toString());
console.log(person.dni);
console.log(person.name);
person.name = " ";
