// Sum of Array Elements
// Write a function to calculate the sum of all elements in an array.
// Example:
// Input: [1, 2, 3, 4] → Output: 10


// const arr1=[1,2,3,4,5,6];


function sumOfArr(arr) {
  return  arr.reduce((total,current)=>total+=current,0)

}

console.log("sumOfArr",sumOfArr(arr1))