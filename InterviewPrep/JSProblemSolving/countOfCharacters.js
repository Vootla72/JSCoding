// count of characters occuring in array
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

function countOfCharacters(arr) {
  var count = {};
  for (var ele of arr) {
    count[ele] = count[ele] ? count[ele] + 1 : 1;
  }
  return count;
}
console.log(countOfCharacters(arr)); //{2: 5, 4: 1, 5: 3, 9: 1}


const countOccurences = (str) => {
  const res = {};
  for(let char of str) {
      res[char] =(res[char] || 0) + 1;
  }
  return res;
}

console.log("count occurences*******", countOccurences(['a', 'a', 'b', 'a'])) // {a: 3, b: 1}
// this input also works.. as here its a string
// console.log("count occurences*******", countOccurences("aabbc"))


//if key matches with the target return count of key repeated times

// function countOfCharacters1(arr, target) {
//   var count = {};
//   for (var ele of arr) {
//     count[ele] = count[ele] ? count[ele] + 1 : 1;
//   }
//   for (var key in arr) {
//     if (key == target) return count[key];
//   }
//
// }
// console.log(countOfCharacters1(arr, 2));



