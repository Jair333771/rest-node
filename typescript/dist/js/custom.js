"use strict";
class AppConfig {
    static getData() {
        return 2400;
    }
}
AppConfig.apiKey = "123456";
console.log(AppConfig.getData());
class Vehicle {
    constructor(model, year, motor) {
        this.model = model;
        this.year = year;
        this.motor = motor;
    }
}
class Employee {
    constructor(name, age, vehicle) {
        this.name = name;
        this.age = age;
        this.vehicle = vehicle;
    }
}
const kia = new Vehicle("my", 2009);
const me = new Employee("Jair", 20, null);
console.log(me);
console.log(kia);
const getPrice = (price, discount) => {
    let total = price;
    if (discount) {
        total = (discount * price) / 100;
    }
    return total;
};
// Lambda function
const totalPrice = (price, discount = 0) => price - (price * discount / 100);
console.log("price: ", totalPrice(200, 10));
