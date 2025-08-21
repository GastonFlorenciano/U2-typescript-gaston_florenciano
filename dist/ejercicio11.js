"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radio;
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}
const circle = new Circle(10);
console.log(circle.area());
//# sourceMappingURL=ejercicio11.js.map