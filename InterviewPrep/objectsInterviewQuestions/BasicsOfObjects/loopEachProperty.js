const user = {
  name: 'bhavana',
  age: 24,
  isTotallyAwesome: true,
};

console.log(user);
//*********************************/
//to access each key in an object ---------->use key "in" object and for value user[key]
for (key in user) {
  console.log(key);
  console.log(user[key]);
}
