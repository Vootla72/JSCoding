// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.




// Approach:
// We can solve this problem by using the following steps:
// We can iterate through the haystack string and check if the substring of the haystack starting from the current index is equal to the needle string.
// If the substring is equal to the needle string, we can return the current index.
// If the substring is not equal to the needle string, we can continue the loop.
// If we do not find the needle string in the haystack string, we can return -1 at the end.


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length == 0 || haystack.length < needle.length) return -1;

    let m = haystack.length;
    let n = needle.length;

    for (let i = 0; i <= (m - n); i++) {
        if (haystack.substring(i, i + needle.length) === needle) return i;
    }
    return -1;

};





/// Another solution
// using indexOf
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length == 0 || haystack.length < needle.length) return -1;
    return haystack.indexOf(needle);



};