// The unshift() method adds new elements to the beginning of an array.

// The unshift() method overwrites the original array.
//It returns the length of the updated array after modification

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("unshiftMethod", fruits.unshift("Lemon", "Pineapple"));
//o/P:6;
console.log("unshiftOriginal", fruits);
//o/p: ["Lemon","Pineapple","Banana", "Orange", "Apple", "Mango"];
