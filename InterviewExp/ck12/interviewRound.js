// i = 0;
// console.log(i);

//javascript vs react

// Virtual DOM:
// JavaScript: JavaScript does not inherently provide a virtual DOM. When you make changes to the UI, JavaScript directly updates the browser's DOM (Document Object Model), which can be inefficient for complex applications.
// React.js: React uses a virtual DOM to optimize UI updates. Instead of directly modifying the actual DOM, React first updates a virtual representation of the DOM in memory.
// It then calculates the minimal set of changes needed to update the actual DOM, resulting in improved performance and a smoother user experience.

//pure components vs components
// PureComponent is similar to Component but it skips re-renders for same props and state.



// for (i = 0; i < 5; i++) {
//   console.log(i);
// }
//o/p:0 1 2 3 4

// const obj = {
//   name1: 'bhavana',
// };
// obj.name1 = 'bhavana1';
// console.log(obj.name1);

// const nam2 = 'bhavana';
// nam2 = 'bhavana2';
// console.log(nam2);//o/p:Type Error

// var b = function () {
//   console.log(this); //this refers to window object
// };
// b();

// function a() {
//   console.log(this); //this refers to window object
// }
// a();

// let object = {
//   name6: 'xx',
//   fly: function () {
//     console.log(this);//this refers to object
//   },
//   woo: function () {
//     console.log(this); //this refers to object
//   },
//     woo()
// };
// object.fly();

// const person = {
//   name: 'bhavana',
// };

// person.name = 'priyanka';

// console.log(person); //
// o/p:name:priyanka

//A variable declared with const means one thing: the standalone variable name cannot be reassigned with = later.

// In contrast, o.a = 5; is not reassigning the variable name - it's mutating the content of the object, but it's not changing what the o variable points to in memory.

// To prevent reassignment of a variable name, use const. To prevent mutation of an object is something entirely different - for that, you'd need something like Object.freeze or manipulate objects using immutable-js.

// const i = 2;

// function a() {
//   i = 0;
//   console.log(i); //
// }
// a();

// console.log(i); //
//o/p:type error

// var i = 2;

// function a() {
//   i = 0;
//   console.log(i); //
// }
// a();

// console.log(i); //
//o/p:0

// var i = 2;

// function a() {
//   var i = 0;//creating new variable in fn scope
//   console.log(i); //
// }
// a();

// console.log(i);
//o/p:0 2

// for (i = 0; i < 5; i++) {}
// console.log(i);//o/p:5

// for (var i = 0; i < 5; i++) {}
// console.log(i); //o/p:5

/////*********** */
// var a = 10;
// function b() {
//   a = 200;
//   console.log(a); //200
// }
// b();
// console.log(a); //200
