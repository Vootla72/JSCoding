// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



// Approach:
// We can solve this problem by using the following steps:
// We can convert the string to lowercase and remove all non-alphanumeric characters.
// We can use two pointers to check if the string is a palindrome.
// We can iterate through the string from the start and end.
// If the characters at the start and end are not the same, we return false.
// If the characters at the start and end are the same, we continue the loop.
// If the loop completes, we return true.
// If the string is empty, we return true.
// If the string has only one character, we return true.
// If the string is not a palindrome, we return false.



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    //*****important */
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if(str.length==0 || str.length==1) return true;
    let n = str.length;
    let l=0;
    let r=n-1;
    while(l<r){
        if(str[l]!==str[r])
        return false;
        l++;
        r--;
    }

    return true;
};

// Time complexity is O(n) where n is the length of the string.
// Space complexity is O(n) as we are not using any extra space.



/// Another solution


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
        // Move left pointer to the next alphanumeric character
        while (l < r && !isAlphaNumeric(s[l])) l++;
        // Move right pointer to the previous alphanumeric character
        while (l < r && !isAlphaNumeric(s[r])) r--;

        // Compare characters (case-insensitive)
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        l++;
        r--;
    }

    return true;
};

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(c) {
    return /[a-z0-9]/i.test(c); // Using case-insensitive regex( both capital and small letters return true)
}

// Time complexity is O(n) where n is the length of the string.
// Space complexity is O(1) as we are not using any extra space.