const user = { name: 'bhavana', age: 24 };
const admin = { admin: true, ...user };
console.log(admin); //o/p:{admin: true, name: 'bhavana', age: 24}
