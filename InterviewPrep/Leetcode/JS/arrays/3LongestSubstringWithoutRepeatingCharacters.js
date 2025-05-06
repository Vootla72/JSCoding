// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


/////////////solution////////////////////

// Approach
// 1. We will use two pointer approach to solve this problem.
// 2. We will use set to keep track of the characters.
// 3. We will keep track of the maxLength of the substring without repeating characters.
// 4. We will keep track of the left and right pointers.
// 5. If the character is not in the set, we will add it to the set and update the maxLength.
// 6. If the character is in the set, we will remove the character from the set and increment the left pointer.
// 7. We will keep track of the maxLength and return it.



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {


    // remember in js set methods -- has, add , delete

    let set = new Set();
    let n = s.length;
    let maxLength = 0;

    let l = 0, r = 0;

    while (r < n) {
        if (set.has(s[r])) {
            while (l <= r && set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
        }
        else {
            set.add(s[r]);
            maxLength = Math.max(maxLength, (r - l) + 1);
            r++;
        }

    }
    return maxLength;

};

// TC : O(n)
// SC : O(n)
// Input: s = "abcabcbb"