class AppConfig {
    static apiKey: string = "123456";
    static getData() {
        return 2400;
    }
}

console.log(AppConfig.getData());

class Vehicle {
    model: string;
    year: number;
    motor?: string;

    constructor(model: string, year: number, motor?: string) {
        this.model = model;
        this.year = year;
        this.motor = motor;
    }
}

class Employee {
    name: string;
    age: number;
    vehicle: Vehicle | null;

    constructor(name: string, age: number, vehicle: Vehicle | null) {
        this.name = name;
        this.age = age;
        this.vehicle = vehicle;
    }
}

const kia = new Vehicle("my", 2009);
const me = new Employee("Jair", 20, null);
console.log(me);
console.log(kia);

const getPrice = (price: number, discount?: number): number => {
    let total = price;
    if (discount) {
        total = (discount * price) / 100;
    }
    return total;
}

// Lambda function
const totalPrice = (price: number, discount: number = 0): number => 
    price - (price * discount / 100);

console.log("price: ", totalPrice(200, 10));
