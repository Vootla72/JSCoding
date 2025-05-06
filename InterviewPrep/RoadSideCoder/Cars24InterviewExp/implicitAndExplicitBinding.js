// Arrow functions don't have their own this or arguments binding. Instead, those identifiers are resolved in the lexical scope like any other variable. 
// That means that inside an arrow function, this and arguments refer to the values of this and arguments in the environment the arrow function is defined in (i.e. "outside" the arrow function):

var obj = {
  name: 'bhavana',
  display: function () {
    console.log(this.name);
  },
};

var obj1 = {
  name: 'vootla bhavana',
};
obj.display();
obj.display.call(obj1); // passing context obj1, so this in obj points to obj1;
// whenever function is created, this keyword is created and it is not assigned to any object, it is assigned to the object which is calling the function

//********************************************************* */

//using arrow function for displaying instead of normal function

var objarrow = {
  name: 'bhavana',
  display: () => {
    console.log(this); //it refers to the window object
    console.log(this.name); //not display anything as it will not found
    console.log(this.objarrow.name); //o/p:bhavana
  },
};
objarrow.display();
