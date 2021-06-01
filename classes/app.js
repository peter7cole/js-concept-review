/* 
  Using ES6 Classes, replicate the behavior of the 
  Vehicle, Car, and Motorcycle implementations using 
  constructor functions and prototypes as created
  in the "vehicles-with-constructor.js" file

  Your output from this file should be exactly the same 
  as the output from the other version (vehicles-with-constructor.js).

  Clicking the "run >" button will execute both versions
  You'll notice that the "constructor" version works just 
  fine. Your job here is to replicate the output using classes.
*/

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  drive() {
    return 'Moving Forward';
  }
  stop() {
    return 'Stopping';
  }
}

class Car extends Vehicle {
  constructor(name, wheels) {
    super(name, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(name, wheels) {
    super(name, 2);
  }
  wheelie() {
    return 'Wheee!';
  }
}

// vs prototypes

// // Vehicle Parent Class
// const Vehicle = function (name, wheels) {
// 	this.name = name;
// 	this.wheels = wheels;
// };
// Vehicle.prototype.drive = () => {
// 	return 'Moving Forward';
// };
// Vehicle.prototype.stop = () => {
// 	return 'Stopping';
// };
// // Car Constructor (sub-class)
// const Car = function (name) {
// 	Vehicle.call(this, name, 4);
// };
// Car.prototype = new Vehicle();
// const Motorcycle = function (name) {
// 	Vehicle.call(this, name, 2);
// };

// // Motorcycle Constructor (sub-class);
// Motorcycle.prototype = new Vehicle();
// Motorcycle.prototype.wheelie = () => {
// 	return 'Wheee!';
// };

console.log('\nES6 CLASSES\n');

let mazda = new Car('Mazda 3');
console.log('Car');
console.log('mazda.name', mazda.name);
console.log('mazda.drive()', mazda.drive());
console.log('mazda.stop()', mazda.stop());

console.log('\n-------------------------------\n');

let harley = new Motorcycle('Fatboy');
console.log('Motorcycle');
console.log('harley.name', harley.name);
console.log('harley.drive()', harley.drive());
console.log('harley.wheelie()', harley.wheelie());
console.log('harley.stop()', harley.stop());
