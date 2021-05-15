"use strict";
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.getData = function () {
        return 2400;
    };
    AppConfig.apiKey = "123456";
    return AppConfig;
}());
console.log(AppConfig.getData());
var Vehicle = /** @class */ (function () {
    function Vehicle(model, year, motor) {
        this.model = model;
        this.year = year;
        this.motor = motor;
    }
    return Vehicle;
}());
var Employee = /** @class */ (function () {
    function Employee(name, age, vehicle) {
        this.name = name;
        this.age = age;
        this.vehicle = vehicle;
    }
    return Employee;
}());
var kia = new Vehicle("my", 2009);
var me = new Employee("Jair", 20, null);
console.log(me);
console.log(kia);
var getPrice = function (price, discount) {
    var total = price;
    if (discount) {
        total = (discount * price) / 100;
    }
    return total;
};
// Lambda function
var totalPrice = function (price, discount) {
    if (discount === void 0) { discount = 0; }
    return price - (price * discount / 100);
};
console.log("price: ", totalPrice(200, 10));
