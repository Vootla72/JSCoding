

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.


//////////////////////////sol1////////////////////////
// using recursion

class Solution {
    int lcs(string& s1, string& s2, int m, int n) {
        if (!m || !n)
            return 0;
        // compare the last character, if that is same, increase the count and
        // do recursion on remaining string
        if (s1[m - 1] == s2[n - 1])
            return 1 + lcs(s1, s2, m - 1, n - 1);

        return max(lcs(s1, s2, m - 1, n), lcs(s1, s2, m, n - 1));
    }

public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.size();
        int n = text2.size();
        return lcs(text1, text2, m, n);
    }
};





//////////////////////////sol2////////////////////////
// using memorization



class Solution {
    int lcs(string& s1, string& s2, int m, int n, vector<vector<int>>&memo) {
        if (!m || !n)
            return 0;
        if(memo[m][n]!=-1) return memo[m][n];
        // compare the last character, if that is same, increase the count and
        // do recursion on remaining string
        if (s1[m - 1] == s2[n - 1])
            return memo[m][n] = 1 + lcs(s1, s2, m - 1, n - 1, memo);

        return memo[m][n]= max(lcs(s1, s2, m - 1, n, memo), lcs(s1, s2, m, n - 1, memo));
    }

public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.size();
        int n = text2.size();
        vector<vector<int>>memo(m+1,vector<int>(n+1,-1));
        return lcs(text1, text2, m, n, memo);
    }
};

TC: O(m*n)
SC: O(m*n) - Auxilarry space for memoization





//////////////////////////sol3////////////////////////

// using DP

class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int m = text1.size();
        int n = text2.size();
        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
        // using DP Bottom Up Approach

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1[i - 1] == text2[j - 1])
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                else
                    dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
        return dp[m][n];
    }
};

TC: O(m*n)
SC: O(m*n) - Auxilarry space