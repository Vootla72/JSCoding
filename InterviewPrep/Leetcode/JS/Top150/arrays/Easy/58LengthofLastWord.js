// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.


// Approach:
// We can solve this problem by using the following steps:
// We can trim the string to remove the leading and trailing spaces.
// We can split the string by space and get the last word.
// We can return the length of the last word.



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    return s.trim().split(" ").pop().length;

};

// Time complexity is O(n) 
//  Space complexity is O(1) as we are not using any extra space.