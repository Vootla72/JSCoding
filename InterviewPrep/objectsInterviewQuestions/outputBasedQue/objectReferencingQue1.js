let c = { greeting: 'Hey!' };
let d;
d = c; //here we are providing the reference of the object but we are not completely copy the object
c.greeting = 'Hello!';
console.log(d.greeting); //'Hello!'
// d.greeting = 'Hello!';
// console.log(c.greeting); //'Hello!'
//changing d or c will  effect both
