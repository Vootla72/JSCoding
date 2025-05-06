var arr = [2, 6, 8, 12, 99, 88];
var arr1 = ['voot', 'voo', 'vootla'];
console.log(arr.sort()); // 12 2 6 8 88 99
console.log(arr.sort((a, b) => a - b)); //ascending order
console.log(arr.sort((a, b) => b - a)); //descending order
console.log(arr1.sort((a, b) => b.length - a.length)[0]); //descending order
console.log(arr1.sort().reverse()[0]); // descending order: ;

let animaux = ['zèbre', 'abeille', 'écureuil', 'chat'];
animaux.sort();

console.log(animaux);

// The sort() method is working fine with the strings with ASCII characters. However, for the strings with non-ASCII characters e.g., é, è, etc., the sort() method will not work correctly. For example:
// As you see, the écureuil string should come before the zèbre string.

// To resolve this, you use the localeCompare() method of the String object to compare strings in a specific locale, like this:
animaux.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(animaux);

//////////////////

// sort the arr using a key



function sortArr(arr, key){
  return arr.sort((a,b)=>a[key]-b[key]);
}

// By default, the sort() function sorts values as strings.
// so for numbers , as if sort consideered as string.. 1 comes before than 2 ryt.. so 100 will be first after that 25 in ascending order
// const arr1=[1,25,100,6]
// const arr2 =['ab', 'ac','ba','bh']
const arr3 = [
  {name:'bhavana', age:20},
  {name:'vootla', age:14},
  {name:'bv', age:24}
]

// console.log(sortArr(arr1))
console.log(sortArr(arr3, "age"))


