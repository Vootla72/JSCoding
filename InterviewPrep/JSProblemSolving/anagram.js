function anagram(str1, str2) {
  const normalize = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  };
  return normalize(str1) === normalize(str2);
}

console.log(anagram('bhavana', 'bhav'));

//This solution will utilize a helper function to remove all unwanted punctuation and symbols, basically non-alphabetic characters


function isAnagram(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  if (m != n) return 0;
  const str1 = s1.split('').sort().join();
  const str2 = s2.split('').sort().join();
  for (let i = 0; i < m; i++) {
    if (str1[i] != str2[i]) return 0;
  }
  return 1;
}


function areAnagrams(str1, str2) { 

  return str1.split("").sort().join("") === str2.split("").sort().join(""); 

} 

// sol to get the sorted string method separately and checking the anagaram

const getSortedStr = (str) => {
  return str.split('').sort().join('');
}

function anagramChecker(str1, str2) {
  if (str1.length !== str2.length) return false;
  return getSortedStr(str1) === getSortedStr(str2);

}

console.log("anagram checker ", anagramChecker("auc", "cba"))


// Time Complexity (TC):

// Splitting the String (split):

// str.split('') converts the string into an array of characters.
// Time Complexity: 
// O(n), where 
// n is the length of the string.

// /////////////
// Sorting the Array (sort):
// Sorting an array takes 
// O(nlogn) time.


// /////////////
// Joining Back to String (join):

// Joining the array of characters back into a string takes 
// O(n).
// The above process is done for both strings, so the overall time complexity for the sorting process is:
// O(nlogn)+O(mlogm)
// where 
// n is the length of str1 and 
// m is the length of str2.

// In the worst case, 
// n=m, so
// TC=O(nlogn)

// ///////////////////////
// Space Complexity (SC):
// Space for Splitting the String:

// split creates a new array of length n.
// Space Complexity: 

// O(n) for str1 and 
// O(m) for str2.
// Space for Sorting:

// Sorting uses 

// O(k) auxiliary space, where 

// k is the size of the array being sorted.
// For a typical comparison-based sorting algorithm, this is O(n) for str1 and O(m) for str2.

// Space for Joining:

// Joining does not require additional space beyond the result string.
// Overall Space Complexity:

// SC=O(n)+O(m)
// For n=m, this simplifies to:SC=O(n)

// ///////////
// Final Analysis:
// Time Complexity: O(nlogn)
// Space Complexity: O(n)


///////////////////////////most optimised solution ////////////////////

const anagramChecker = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const freqCount = {};
  for (let char of s1) {
      freqCount[char] = (freqCount[char] || 0) + 1;
  }
  for (let char of s2) {
      if (!freqCount[char]) return false;
      freqCount[char]--;
  }
  return true;
}

// TC: O(n)
// SC: O(k)  where k is the number of unique characters in the strings


// console.log("anagram checker****", anagramChecker("abc", "edd"))
