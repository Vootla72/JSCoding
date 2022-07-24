//Que-4:what is JSON.stringify and JSON.parse

const user = {
  name: 'bhavana',
  age: 24,
};
//to convert an object into a  string we use JSON.stringify
// console.log(user); //o/p:{name: 'bhavana', age: 24}
// console.log(JSON.stringify(user)); //o/p:{"name":"bhavana","age":24}
const objStr = JSON.stringify(user);
// console.log(objStr.name); //o/p:undefined as it is a string
//*****************/

//To convert string back to an object we use JSON.parse
// console.log(JSON.parse(objStr)); //o/p:{name: 'bhavana', age: 24}

//JSON.stringify and JSON.parse we use when we want store data in local storage
//when we tries to convert oject to string forcefully it will stored as [object object]
localStorage.setItem('test', JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem('test')));
