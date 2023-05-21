//The Slice() method returns the selected elements in an array
//It does not modifies the original array
//Start index default is 0 and end index default is end of the array
//Starting index is inclusive and last index is exclusive

//return value : A new array containing the selected elements.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log("sliceMethod", fruits.slice(0, 2));
//o/p:["Banana","Orange"]
console.log("sliceOriginal", fruits);
//o/p:["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log("sliceMethodNeg", fruits.slice(-3, -1));
//o/p:As last index is exclusive, o/p will be -2 & -3 -->["Lemon","Apple"];

//***********Exceptional Cases***********/

console.log("sliceMethodNeg", fruits.slice(-3, 0));
// As last index is 0 which is invalid, o/p will be an empty array []

console.log("sliceMethodNeg", fruits.slice(-8, -1));
//As first index is inclusive and if exceeds the array length also, o/p will be upto all the elements in an array  ["Banana", "Orange", "Lemon", "Apple"]

//To get the last element in an array by using slice method

console.log("sliceMethod", fruits.slice(fruits.length - 1));
//o/p:["Mango"] -- the last index can be ntg or greater than the first index
