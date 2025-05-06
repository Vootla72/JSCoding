// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true

 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


//Approach:
// We can solve this problem by using the following steps:
//if lengths are different return false
//if current index value of s & t are same..
// if not return the false
//else assign the i+1 to both the values in the map( not idx bcz if 0 is the case n t somehow undefined present, it will be falsy)
//if comes out of the loop, return true


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let m = s.length;
    let n = t.length;
    if (m !== n) return false;
    let mp1 = {};
    let mp2 = {};
    for (let i = 0; i < m; i++) {
        let charS = s[i];
        let charT = t[i];
        if (mp1[charS] !== mp2[charT])
            return false;
        mp1[charS] = i + 1;
        mp2[charT] = i + 1;

        // not assigning i bcz if i==0, then some case undefined matches. it will be falsy
    }

    return true;

};


// Time complexity is O(n) where n is the length of the string.
// Space complexity is O(1) → At most 26 characters stored in the maps
