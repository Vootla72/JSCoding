const user = {
  name: 'bhavana',
  age: 24,
  'like this video': true,
};
console.log(user);
console.log(user['like this video']);
console.log(user['age']);
// console.log(user[age]); //o/p:age is not defined... keep it in quotes
delete user['like this video'];
console.log(user); //o/p:{name: 'bhavana', age: 24}

//inorder to add a property inside the user having space b/n the words place them in a quotes
//when trying to access them use syntax of user['like this video'] instead of user.(propertyname)
