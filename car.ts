// Define the Vehicle interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement the Car class that implements Vehicle
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Camry", 2023);

// Call the start method
myCar.start();

// Log the car details to verify properties
console.log(`Car details: ${myCar.year} ${myCar.make} ${myCar.model}`);