"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(data) {
        var _this = this;
        var name = data.name, age = data.age, canSwim = data.canSwim;
        _this = _super.call(this, name, age) || this;
        _this.canSwim = canSwim;
        return _this;
    }
    return Mammal;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name, age, canFly) {
        var _this = _super.call(this, name, age) || this;
        _this.canFly = canFly;
        return _this;
    }
    Bird.prototype.fly = function () {
        return this.name + " can fly: " + this.canFly;
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fish;
}(Animal));
var dog = new Fish("flopy", 7);
var cat = new Mammal({ name: "lindsay", age: 3, canSwim: true });
var condor = new Bird("condorito", 3, true);
console.log(condor.toString() + " and " + condor.fly());
