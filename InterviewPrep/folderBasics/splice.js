const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.splice(2, 2, 'Lemon', 'Kiwi'));
//splice first arg: at wt posn adding of new elements in an array can occur
//2nd arg hw many elements needs to get deleted before
//returs the new array with deleted elements
//o/p:[Apple,Mango]

const points = [40, 100, 1, 5, 25, 10];
console.log(
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  })
);

console.log(Math.max(...points));
console.log(Math.min(...points));

console.log(new Date('2015'));
console.log(new Date('2015-03'));
console.log(new Date('2015-03'));
console.log(new Date('2015-03-25'));
console.log(new Date().getHours());
