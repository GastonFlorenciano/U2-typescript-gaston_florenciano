function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
console.log(num);

const str = identity<string>("Hola mundo");
console.log(str);

const bool = identity<boolean>(true);
console.log(bool);

const inferred = identity([1, 2, 3]);
console.log(inferred);

const obj = identity({ nombre: "Juan", edad: 30 });
console.log(obj);
