function Dog(name) {
  this.name = name;
  this.speak = function () {
    return 'warf';
  };
}

Dog.prototype.speak = function () {
  return 'arf';
};
const dog = new Dog('pogo');
console.log(dog.speak());

//o/p:warf
//it gets dog.speak() only it never goes to its parent i.e.dog.prototype.speak()

// function Dog(name) {
//   this.name = name;
//   //   this.bark = function () {
//   //     console.log('bark');
//   //   };
// }
// Dog.prototype.bark = function () {
//   console.log(this.name + ' says woof');
// };
// let fido = new Dog('fido');
// fido.bark();
