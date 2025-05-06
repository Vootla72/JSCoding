Given a string s, find the length of the longest 
substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.



/////////////////sol/////////////////////


class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.length();
        unordered_set<char>charSet;
        int l=0;
        int ans=0;
        for(int r=0;r<n;r++){
            if(charSet.count(s[r])==0){
                charSet.insert(s[r]);
                ans=max(ans,(r-l+1));
            }
            else{
                // if the element already present
                while(charSet.count(s[r])){
                    charSet.erase(s[l]);// erase all the elements before the duplicate element
                    l++;
                }
                //as we have removed the elements including duplicate, insert the new value
                charSet.insert(s[r]);
            }

        }
        return ans;
        
    }
};


//////////////////sol/////////////////////

using set only

// Approach: We will have two pointers left and right. 
// Pointer ‘left’ is used for maintaining the starting point of the substring while ‘right’ will maintain the endpoint of the substring.
// ’ right’ pointer will move forward and check for the duplicate occurrence of the current element if found then the ‘left’ pointer will be shifted ahead so as to delete the duplicate elements.


class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int n = s.length();
        if (n == 0)
            return 0;
        unordered_set<char> set;
        int ans = INT_MIN;
        int l = 0;
        for (int r = 0; r < n; r++) {
            // the initial l need not be pointed to the duplicate element ex:abcc
            while (l < r && set.find(s[r]) != set.end()) {
                set.erase(s[l]);
                l++;
            }
            set.insert(s[r]);
            ans = max(ans, (r - l + 1));
        }
        return ans;
    }
};

// Output: The length of the longest substring without repeating characters is 9

// Time Complexity: O( 2*N ) (sometimes left and right both have to travel a complete array)

// Space Complexity: O(N) where N is the size of HashSet taken for storing the elements


