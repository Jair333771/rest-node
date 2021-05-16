"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return JSON.stringify(this);
    }
}
class Mammal extends Animal {
    constructor(data) {
        const { name, age, canSwim } = data;
        super(name, age);
        this.canSwim = canSwim;
    }
}
class Bird extends Animal {
    constructor(name, age, canFly) {
        super(name, age);
        this.canFly = canFly;
    }
    fly() {
        return `${this.name} can fly: ${this.canFly}`;
    }
}
class Fish extends Animal {
}
const dog = new Fish("flopy", 7);
const cat = new Mammal({ name: "lindsay", age: 3, canSwim: true });
const condor = new Bird("condorito", 3, true);
console.log(`${condor.toString()} and ${condor.fly()}`);
