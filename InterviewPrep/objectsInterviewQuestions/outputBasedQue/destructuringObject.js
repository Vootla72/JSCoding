const user = {
  name: 'bhavana',
  age: 24,
  fullName: {
    firstName: 'vootla',
    lastName: 'bhavana',
  },
};
const { name } = user; //this is destructuring
//Renaming using destructuring
const { name: myName } = user;
console.log(myName); //o/p:bhavana

//*************************/
//destructing nested objects
const {
  fullName: { firstName },
} = user;

console.log(firstName); //o/p:vootla
