// Implement the Car class that implements Vehicle
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Camry", 2023);
// Call the start method
myCar.start();
// Log the car details to verify properties
console.log("Car details: ".concat(myCar.year, " ").concat(myCar.make, " ").concat(myCar.model));
