class Car{
    make: string;

    constructor(make: string){
        this.make = make;
    }

    drive(){
       return `Driving a ${this.make}`;
    }
}

const toyota = new Car('Toyota');
console.log(toyota.drive());