interface Person {
    firstName: string;
    lastName: string;
}

let person: Person = {
    firstName: "Gastón",
    lastName: "Florenciano"
};

console.log(`Hola, soy ${person.firstName} ${person.lastName}`);
