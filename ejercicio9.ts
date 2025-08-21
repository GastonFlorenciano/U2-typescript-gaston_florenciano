class Car{
    private make: string;

    constructor(make: string){
        this.make = make;
    }

    drive(){
       return `Driving a ${this.make}`;
    }

    getMake(){
        return this.make;
    }
}

const toyota = new Car('Toyota');
console.log(toyota.getMake());
console.log(toyota.drive());