"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    make;
    constructor(make) {
        this.make = make;
    }
    drive() {
        return `Driving a ${this.make}`;
    }
}
exports.Car = Car;
const toyota = new Car('Toyota');
console.log(toyota.drive());
//# sourceMappingURL=ejercicio8.js.map