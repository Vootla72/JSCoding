let data = [1, 3, 2, 4, 5];

// sort first
data = data.sort();

// to get the sets only

let minSet = data.slice(0, -1); //without last element-- slice of 2nd index will not be included
let maxSet = data.slice(1);
console.log(minSet, maxSet);

// to get just the max/min value
const sum = data.reduce((a, total) => a + total, 0);
console.log(sum - data[data.length - 1], sum - data[0]);
