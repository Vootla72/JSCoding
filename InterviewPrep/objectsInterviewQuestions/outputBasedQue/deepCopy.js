let user = {
  name: 'vootla',
  age: 24,
};
//m-1 to clone the object
//this will not clone the nested object
const objClone1 = Object.assign({}, user);
objClone1.name = 'bhavana'; //this will not affect the user object
console.log(user); //o/p:{name: 'vootla', age: 24}
console.log(objClone1); //o/p:{name: 'bhavana', age: 24}

//m-2 to clone the object

const objClone2 = JSON.parse(JSON.stringify(user));
objClone2.name = 'bhavana2'; //this will not affect the user object
console.log(user); //o/p:{name: 'vootla', age: 24}
console.log(objClone2); //o/p:{name: 'bhavana2', age: 24}

//m-3 to clone the object
const objClone3 = { ...user };
objClone3.name = 'bhavana3'; //this will not affect the user object
console.log(user); //o/p:{name: 'vootla', age: 24}
console.log(objClone3); //o/p:{name: 'bhavana2', age: 24}
