"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    return arg;
}
const num = identity(42);
console.log(num);
const str = identity("Hola mundo");
console.log(str);
const bool = identity(true);
console.log(bool);
const inferred = identity([1, 2, 3]);
console.log(inferred);
const obj = identity({ nombre: "Juan", edad: 30 });
console.log(obj);
//# sourceMappingURL=ejercicio15.js.map