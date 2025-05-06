// 1. add

function add(a, b) {
    return a + b;
}

// console.log(add(2,3))

// **************************************************

// 2. get the max number from the given array

function getMax(arr) {
    return Math.max(...arr);
}

function getMaxScratch(arr) {
    return arr.reduce((total, curr) => {
        return (total = curr > total ? curr : total);
    }, 0);
}
// console.log("getMaxScratch", getMaxScratch([1,2,3,4]))
// *******************************************************

// 3.check if the given string is palindrome or not

function palindrome(s) {
    return s == s.split("").reverse().join("");
}

function palindromeScratch(s) {
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] !== s[n - i - 1]) return false;
    }
    return true;
}

console.log("palindrome****", palindromeScratch("abda"));

//********************************//

// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function getEven(arr) {
    let res = [];

    arr.forEach((ele) => {
        if (ele % 2 == 0) {
            res.push(ele);
        }
    });
    return res;
}

// TC: O(n)
// SC: O(n)

function getEvenFilter(arr) {
    return arr.filter((ele) => ele % 2 == 0);
}

// TC: O(n)
// SC: O(n)

// same TC n SC but increases the readability

// console.log('getEven numbers*****', getEvenFilter([1,2,3,4,5]))

//*************************/

// 6. Write a JavaScript program to calculate the factorial of a given number.

// using recursion u are not storing the computed values..
// everytime u come across the number u are calculating the factorial;

function factorial(n) {
    if (n <= 0) return 1;
    if (n <= 2) return n;
    return n * factorial(n - 1);
}
// TC: O(n)
// SC: O(n)

// console.log('factorial*********', factorial(5));

// using dp u are storing the computed values..
// so whenever we come across we can get the value from stored dp instead of re-calculating

function factorialDP(n) {
    let dp = new Array(n + 1).fill(1); // take the dp size of n+1 as we need to fill from 0 to n and initialize all the values to 1

    for (let i = 2; i <= n; i++) {
        dp[i] = i * dp[i - 1];
    }
    return dp[n];
}
// TC: O(n)
// SC: O(n)

//optimised approach
function factorialOptimised(n) {
    if (n <= 2) return n;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res *= i;
    }
    return res;
}

// TC: O(n)
// SC: O(1)

// Note:
// DP uses bottom-up approach : which nmeans it solves small ones first and then higher
//recyrsion uses top-down appraoch as it targets the main number first and down the line.. it reduces to min value

// console.log('factorial*********', factorialOptimised(5));

//******************/

// 7. Write a JavaScript function to check if a given number is prime.

function checkIsPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// TC = O(√n)
// SC :  O(1)

console.log("checkIsPrime**********", checkIsPrime(2));

//**********************************************************/

// 8. Write a JavaScript program to find the largest element in a nested array.

function largest(arr) {
    let flatArr = arr.flat(Infinity);
    return Math.max(...flatArr);
}

console.log(
    "largest element in nested arr********",
    largest([1, 2, 3, [4, 5, [6, 7], 8], 9, -2])
);

// TC: O(n)
// SC: O(n)

/// sol2 : using recursion

function largestUsingRecursion(arr) {
    let max = -Infinity;
    for (let ele of arr) {
        if (Array.isArray(ele)) {
            max = Math.max(max, largestUsingRecursion(ele));
        } else {
            max = Math.max(max, ele);
        }
    }
    return max;
}

// TC: O(n)
// SC: O(d)  --- d is the depth of the recursion tree

console.log(
    "largest element in nested arr largestUsingRecursion********",
    largestUsingRecursion([1, 2, 3, [4, 5, [6, 7], 8], 9, -2])
);

//********************** */

// 9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 


function fibonacciSeries(n) {
    if (n <= 0) return []; // Edge case: No terms
    if (n === 1) return [0]; // Only one term (0)

    let dp = new Array(n);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp;
}
// TC: O(n)
// SC: O(n)

// console.log("fibonnacci************", fibonacciSeries(7))

//********************************************************** */

// using generator function

function* fibonacciGenerator(n) {
    let a = 0, b = 1;
    for (i = 0; i < n; i++) {
        yield a;  // Yield the current Fibonacci number
        [a, b] = [b, a + b]; //swapping the numbers
    }
}
// TC: O(n)
// SC: O(1)

console.log([...fibonacciGenerator(7)]);  // Output: [0, 1, 1, 2, 3, 5, 8]

//********************/
// 10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 


///////Note
///@@@@@@@@@@@@@@@ it won't work as word carries a copy.. n string is immutable in js
// 🔹 word only holds a copy of each array element, so modifying it does not update words[].

//XXXXXXXXXXXXXXXXXXXXX///

function titleCaseWontWork(s) {
    let words = s.split(' ');
    for (let word of words) {
        word = word[0].toUpperCase() + word.slice(1);
    }

    return words.join(' ');

}

//XXXXXXXXXXXXXXXXXXXX//


function titleCase(s) {
    let words = s.split(' ');
    return words.map(ele => ele = ele[0].toUpperCase() + ele.slice(1)).join(' ');


}


console.log('titleCAse each word in a string******', titleCase('i am bhavana vootla'))

// 1️⃣ Time Complexity (TC)
// Step-by-Step Breakdown:
// split(' ') – Splits the string into words → O(N)
// map(...) – Iterates through each word and modifies it → O(N)
// join(' ') – Joins the words back into a string → O(N)
// 🔹 Total Time Complexity:

// O(N)+O(N)+O(N)=O(N)
// ✔ Final Time Complexity: O(N) (Linear time complexity, where N is the length of the input string)

// Space Complexity (SC)
// Memory Usage:
// New array from split(' ') → O(N)
// New array from map() → O(N)
// New string from join(' ') → O(N)
// 🔹 Total Space Complexity: O(N)+O(N)+O(N)=O(N)
// ✔ Final Space Complexity: O(N) (Since we store a modified copy of the string in memory)



//**************************** advanced *************/

// 2. Write a function that takes an array of objects and a key
// and returns a new array sorted based on the values of that key in ascending order. 

function sortByKey(arr, key) {
    // slice creates a copy of array.. which wont modify the original array
    // without slice we will modify the original array
    return arr.slice().sort((a, b) => a[key] - b[key])
}

const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

const sortedByAge = sortByKey(people, "age");
// console.log("sort y Age *****", sortedByAge, people)

// TC : O(nlog n)
// SC: O(n) // slice creates a shallow copy of array -- so space complexity -- O(1) without slice

//**************************** */

// 3. Implement a deep clone function in JavaScript that creates a copy of a nested object 
// or array without any reference to the original. 


const original = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "cycling"],
    address: {
        city: "New York",
        zip: 10001
    }
};

function deepClone1(original) {
    return JSON.parse(JSON.stringify(original));
}


// console.log("deepclone1****", deepClone1(original));


const cloned = deepClone1(original);
cloned.address.city = "Los Angeles"; // Modify cloned object

// console.log(original.address.city); // "New York" (original remains unchanged)
// console.log(cloned.address.city);


// another method using recursion


function deepClone2(obj) {
    if (obj === null || typeof obj !== "object")// primitive data type
        return obj;

    // if its an array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone2(item));
    }

    // if its an object
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone2(obj[key])
        }
    }
    return clonedObj;
}

const deepClonePart2 = deepClone2(original);
console.log("deepClonePart2*********", deepClonePart2)


// Time Complexity: O(n), where n is the total number of properties in the object.
// Space Complexity: O(n), since we store a new deep copy of the object.


// for modern browsers... ot work for old browsers
const deepCloned3 = structuredClone(original);
console.log("deepcloned3*****", deepCloned3)


//***********************************/


// 4.Write a recursive function to calculate the factorial of a given number. 


function getFactorial(n){
    if(n<=1) return 1;
    return n*getFactorial(n-1);
}

console.log("getFctorial*****", getFactorial(5))

//**************************************/

// 5. Implement a function that takes two sorted arrays and 
// merges them into a single sorted array without using any built-in sorting functions. 


const arr1 = [4,6,7,8];
const arr2 = [1,2,3,4];

// using build in method
function mergeSortedArrays(arr1,arr2){
    const mergedArr = [...arr1, ...arr2];
    return mergedArr.sort((a,b)=>a-b);
}

// console.log("MergeSortedArrays", mergeSortedArrays(arr1,arr2))


// without using built in methods

function mergeSortedArrays1(arr1, arr2){
    let res = [];
    let i=0,j=0;
    let m = arr1.length;
    let n = arr2.length;
    while(i<m && j<n){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }
    while(i<m){
        res.push(arr1[i]);
        i++;
    }
    while(j<n){
        res.push(arr2[j]);
        j++;

    }
    return res;

}

console.log("mergeSortedArrays1*************", mergeSortedArrays1(arr1,arr2))


// Time Complexity (TC) Analysis
// The function merges two sorted arrays by iterating through both once.
// The while (i < m && j < n) loop runs O(min(m, n)) times.
// The two remaining while loops (if one array is exhausted earlier) run O(m) or O(n) in total.
// Overall, the function processes all elements from both arrays, so the time complexity is O(m + n).

// Final Complexity
// Time Complexity: O(m + n)
// Space Complexity: O(m + n) (since we are storing the merged array separately). 