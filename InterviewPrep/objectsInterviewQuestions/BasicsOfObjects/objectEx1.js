const user = {
  name: 'bhavana',
  age: 24,
};

console.log(user);
user.name = 'vootla';
console.log(user); //o/p:{name: 'vootla', age: 24}
delete user.name; //deleting name property of user object
console.log(user); //o/p:{age: 24}
