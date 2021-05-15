"use strict";
var Person = /** @class */ (function () {
    function Person(dni, data) {
        this.dni = dni;
        var name = data.name, age = data.age;
        this._age = age;
        this._name = name;
        this.dni = dni;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.trim().length === 0)
                throw new Error("Invalid name");
            else
                this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value <= 0)
                throw new Error("Invalid age");
            else
                this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Person;
}());
var person1 = {
    _age: 27,
    _job: "Developer",
    _name: "Jair"
};
var person = new Person("1019287465", { name: "Luisa", age: 27 });
console.log(person.toString());
console.log(person.dni);
console.log(person.name);
person.name = " ";
