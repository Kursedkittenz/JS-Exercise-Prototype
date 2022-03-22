/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age
  this.stomach = [];
}

Person.prototype.eat = function(someFood){
  if(this.stomach.length >= 10){
    return 'I\'m too full'
  }else{
    this.stomach.push(someFood)
  }
}

Person.prototype.poop = function(){
  this.stomach.splice(0)
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}
const neo = new Person('Neo',20)
//console.log(neo.name, neo.age, neo.stomach)
//console.log(neo.toString())
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons){
  this.tank += gallons
}
Car.prototype.drive = function(distance){
  if((this.tank - (distance/this.milesPerGallon)) < 0){
    console.log(`I ran out of fuel at ${this.tank*this.milesPerGallon} being ${this.odometer += (this.tank*this.milesPerGallon)}`)
    this.tank = 0
  }else{
    this.tank -= (distance/this.milesPerGallon)
    this.odometer += distance;
  }
}

const audi = new Car('Audi', 2)
//console.log(audi)
audi.fill(40)
audi.drive(20)
//console.log(audi)

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this,favoriteToy)
  this.name = name
  this.age = age
  this.favoriteToy = favoriteToy
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}


const jo = new Baby('Eric', 5, 'car')
console.log(jo)



/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. must be initialized before anything else within objects/classes
  2. refers to last object
  3. 
  4. 
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
