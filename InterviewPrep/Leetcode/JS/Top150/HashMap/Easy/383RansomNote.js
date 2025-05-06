// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.




// Approach:
// We can solve this problem by using the following steps:
// We can iterate through the magazine string and store the count of each character in a map.
// We can iterate through the ransomNote string and check if the character is present in the map.
// If the character is present in the map, we can decrement the count of the character in the map.
// If the character is not present in the map, we can return false.



/****Sol1 ****/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let m = magazine.length;
    let n = ransomNote.length;
    if (m < n || (m === 0 && n !== 0)) return false;
    let mp = {};
    for (let char of magazine) {
        mp[char] = (mp[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!mp[char]) return false;
        else {
            mp[char]--;
        }
    }
    return true;

};

// Time complexity is O(m) where n is the length of the ransomNote.
// Space complexity is O(n) as we are using a mp


/****Sol2 ****/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let m = magazine.length;
    let n = ransomNote.length;
    if (m < n || (m === 0 && n !== 0)) return false;
    let mp = {};
    for (let i = 0; i < m; i++) {
        if (!mp[magazine[i]])
            mp[magazine[i]] = 1;
        else
            mp[magazine[i]]++;
    }

    for (let j = 0; j < n; j++) {
        if (mp[ransomNote[j]])
            return false;
        else {
            mp[ransomNote[j]]--;

        }
    }
    return true;

};

// Time complexity is O(m) where n is the length of the ransomNote.
// Space complexity is O(n) as we are using a mp