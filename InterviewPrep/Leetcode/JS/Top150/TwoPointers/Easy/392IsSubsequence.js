// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false
 

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.


// Approach:
// We can solve this problem by using the following steps:
// We can iterate through the string t and check if the characters match with the characters in the string s.
// Initiate two pointers i and j to iterate through the strings s and t.
// If the characters match, we can increment the pointer j.
// If the characters do not match, we can continue the loop.(main loop)
// when we come out of the loop, we can check if the pointer j matches with the length of the string s.






/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let n = s.length;
    let m = t.length;
    if ((m == 0 && n != 0) || m < n) return false;
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (t[i] == s[j]) {
            j++;
        }

        i++;
    }
    // check when comes out of the loop if j matches with the target length
    return j === n;

};

// Time complexity is O(m) where n is the length of the main string. -- worst case
// Space complexity is O(1) as we are not using any extra space.



/****** Another Solution */



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let n = s.length;
    let m = t.length;
    if ((m == 0 && n != 0) || m < n) return false;
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (t[i] == s[j]) {
            j++;
            if(j==n) return true;
        }

        i++;
    }
    // check when comes out of the loop if j matches with the target length
    return false;

};