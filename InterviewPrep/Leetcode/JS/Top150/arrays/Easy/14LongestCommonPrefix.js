// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.


// Approach:
// We can solve this problem by using the following steps:
// We can initialize the prefix as the first string in the array.
// We can iterate through the strings in the array starting from the second string.
// We can compare the prefix with each string in the array.
// If the string does not start with the prefix using indexOf n match with 0, we can remove the last character from the prefix.
// We can return the prefix at the end.
// If the prefix becomes an empty string, we can return an empty string.





/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        // strs shpuld start with iprefix so compare with 0
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            // if prefix is empty, then return res;
            if (prefix === "") return "";
        }
    }
    return prefix;


};


// Time complexity is O(n * m) where n is the number of strings in the array and m is the length of the longest string.
// Space complexity is O(1) as we are not using any extra space.