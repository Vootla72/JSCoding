//Different ways to create an object


// Literals are smaller and simpler ways to define objects. 
// We simply define the property and values inside curly braces as shown below: 


// Creating js objects with object literal 
let car = { 
    name : 'GT', 
    maker : 'BMW', 
    engine : '1998cc'
}; 


//2.Creating js object with Object.create()
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const coder = { 
    isStudying : false, 
    printIntroduction : function(){ 
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`); 
    } 
}; 
const me = Object.create(coder); 
me.name = 'Mukul'; 
me.isStudying = true; 
me.printIntroduction();

// o/p:
// My name is Mukul. Am I studying?: true   


// Using es6 classes: ES6 supports class concept like any other Statically typed or object oriented language.
// So, object can be created out of a class in javascript as well as shown below: 



// Using es6 classes 
class Vehicle { 
    constructor(name, maker, engine) { 
      this.name = name; 
      this.maker =  maker; 
      this.engine = engine; 
    } 
  } 
    
  let car1 = new Vehicle('GT', 'BMW', '1998cc'); 
    
  console.log(car1.name); 

//because of this.. the o/p is GT..
// here this refers to the instance of the new object created


// Creating object with a constructor:

// One of the easiest ways to instantiate an object is in JavaScript. 
// Constructor is nothing but a function and with help of a new keyword, 
// the constructor function allows to create of multiple objects of the same flavor as shown below: 


function vehicle2(name,maker,engine){ 
    this.name = name; 
    this.maker = maker; 
    this.engine = engine; 
} 
// New keyword to create an object 
let car2  = new vehicle2('GT','BMW','1998cc'); // here this refers to vehicle2{name...etc}
// Property accessors 
console.log(car2.name); 
console.log(car2.maker); 
console.log(car2['engine']);


// In JavaScript, when you use the new keyword with a constructor function,
//  it automatically creates a new object and returns that object. 
//  Even if the constructor function does not have an explicit return statement, 
//  the newly created object is returned implicitly.