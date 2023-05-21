// The some() method checks if any array elements pass a test (provided as a callback function).

//  executes the callback function once for each array element.

//  returns true (and stops) if the function returns true for one of the array elements.

//  returns false if the function returns false for all of the array elements.

//  does not execute the function for empty array elements.

// does not change the original array.

const ages = [1, 3, 58, 32];
console.log("someMethod", ages.some(validateAge));

//o/p: true

function validateAge(age) {
  return age > 2;
}
