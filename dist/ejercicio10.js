"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    constructor(make) {
        this.make = make;
    }
    drive() {
        console.log(`Driving a ${this.getMake()}`);
    }
    getMake() {
        return this.make;
    }
}
class ElectrictCar extends Car {
    batteryLife;
    constructor(make, battery) {
        super(make);
        this.batteryLife = battery;
    }
    charge() {
        return console.log('The car is charged');
    }
}
let newElectrictCar = new ElectrictCar('tesla', 100);
newElectrictCar.charge();
//# sourceMappingURL=ejercicio10.js.map