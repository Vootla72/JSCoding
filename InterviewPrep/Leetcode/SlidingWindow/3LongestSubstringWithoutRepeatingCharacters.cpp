Given a string s, find the length of the longest 
substring
 without repeating characters.

 

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




///////////////sol////////////


Approach 1 - Set
We use a set (charSet) to keep track of unique characters in the current substring.
We maintain two pointers, left and right, to represent the boundaries of the current substring.
The maxLength variable keeps track of the length of the longest substring encountered so far.
We iterate through the string using the right pointer.
If the current character is not in the set (charSet), it means we have a new unique character.
We insert the character into the set and update the maxLength if necessary.
If the character is already present in the set, it indicates a repeating character within the current substring.
In this case, we move the left pointer forward, removing characters from the set until the repeating character is no longer present.
We insert the current character into the set and continue the iteration.
Finally, we return the maxLength as the length of the longest substring without repeating characters.



    

class Solution {
public:
    int lengthOfLongestSubstring(string s) {

        int n = s.length();
        int ans=0;
        unordered_set<char>charSet;
        int l=0;
        int r;
        for(int r=0;r<n;r++){
            if(charSet.count(s[r])==0){
                charSet.insert(s[r]);
                ans=max(ans,r-l+1);
            }
            else{
                while(charSet.count(s[r])){
                    charSet.erase(s[l]);// remove all the elements before the duplicate number as max cant be found with include of this
                    l++;
                }
                charSet.insert(s[r]);//As l points to the part of string where r pointing now;
            }
 
        }
        return ans;
        
    }
};