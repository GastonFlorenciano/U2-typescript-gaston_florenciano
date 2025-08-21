"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    constructor(make) {
        this.make = make;
    }
    drive() {
        return `Driving a ${this.make}`;
    }
    getMake() {
        return this.make;
    }
}
const toyota = new Car('Toyota');
console.log(toyota.getMake());
console.log(toyota.drive());
//# sourceMappingURL=ejercicio9.js.map