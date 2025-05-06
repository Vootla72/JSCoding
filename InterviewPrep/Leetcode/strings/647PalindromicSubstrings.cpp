647. Palindromic Substrings
Solved
Medium
Topics
Companies
Hint
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.


///////////sol1///////////

class Solution {
public:
    int checkIsPalindrome(int i, int j, string& s) {
        while (i < j) {
            if (s[i] != s[j])
                return 0;
            else {
                i++;
                j--;
            }
        }
        return 1;
    }
    int countSubstrings(string s) {

        int n = s.length();
        if (n <= 1)
            return n;
        int sum = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                if (checkIsPalindrome(i, j, s)) {
                    sum++;
                }
            }
        }
        return sum;
    }
};

Time Complexity: O(n2) * O(n) // for generating substrings and to check palindrome

Space Complexity: O(1) 