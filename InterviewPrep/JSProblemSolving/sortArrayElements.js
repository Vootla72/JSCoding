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
