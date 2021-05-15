abstract class Animal {
    protected name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return JSON.stringify(this);
    }
}

class Mammal extends Animal {
    canSwim: boolean;
    constructor(data: { name: string, age: number, canSwim: boolean }) {
        const { name, age, canSwim } = data;
        super(name, age);
        this.canSwim = canSwim;
    }
}

class Bird extends Animal {
    canFly: boolean;
    constructor(name: string, age: number, canFly: boolean) {
        super(name, age);
        this.canFly = canFly;
    }

    fly(): string {
        return `${this.name} can fly: ${this.canFly}`;
    }
}

class Fish extends Animal {
}

const dog = new Fish("flopy", 7);
const cat = new Mammal({ name: "lindsay", age: 3, canSwim: true});
const condor = new Bird("condorito", 3, true);

console.log(`${condor.toString()} and ${condor.fly()}`);