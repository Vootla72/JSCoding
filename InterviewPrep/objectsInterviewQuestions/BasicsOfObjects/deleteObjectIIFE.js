const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func); //o/p:5

//delete keyword is used to delete properties in an object not a local variable
//here a is a local variable..so delete 'a' will not affect at all
