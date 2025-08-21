class Car{
    make: string = 'Ford'

    drive(){
       return `Driving a ${this.make}`;
    }
}

const ford = new Car();
console.log(ford.drive());