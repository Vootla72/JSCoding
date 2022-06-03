var obj = {
  hasOwnProperty: 1,
  foo: 2,
};
const keys = Object.keys(obj);
console.log(keys); //array of keys as a string
console.log(obj.hasOwnProperty('foo')); //key should be always string to search for the specific
//property is present in the obj or not
// console.log(new Set([1, 2, 3, 4, 4]));
// const obj1 = {
//   a: 5,
//   b: {
//     c: 6,
//   },
// };
// // console.log(obj1);
// const obj2 = Object.assign({}, obj1);
// // console.log(obj2);
// const obj3 = { ...obj1 };
// // console.log(obj3);
// obj1.b.c = 8;
// // console.log(obj1);
// console.log(Object.assign({}, obj1, obj2, obj3));

// var foo = function () {
//   var args = Array.prototype.slice.call(arguments);
//   console.log(args[1]);
// };
// foo(1, 2, 4);

// function foo() {
//   console.log(a);
//   var a = 10;
//   console.log(a);
// }
// foo();

//o/p:undefined 10
//*****************************************************************/
// let foo = function () {
//   console.log(a);
//   let a = 10;
//   console.log(a);
// };
// foo();
// o/p:reference error

// function person(id, name1) {
//   var id = id;
//   var name1 = name1;
// }
// function student(id, name1) {
//   person.call(this, id, name1);
// }
// console.log(new student(50, 'bhav').name1);
//o/p:undefined
