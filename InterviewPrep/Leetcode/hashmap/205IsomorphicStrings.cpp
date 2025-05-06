205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character
while preserving the order of characters.
-------: No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.


SOl:
//Hint isomorphic -- preserving the order of characters - store indices if values are same


//Note:In ASCII encoding, there are 256 characters in total,
// including all the standard alphanumeric characters, punctuation marks, and control characters.
// Therefore, to account for all possible characters that could appear in the strings s and t, the arrays m1 and m2 are sized to accommodate each ASCII character.


// Each element of m1 and m2 is used to store the position (index + 1) of the corresponding character in the respective string. 
// By comparing the values stored in m1 and m2 for each character position, 
// the code checks if the characters are mapped to the same positions in both strings, 
// which determines if the strings are isomorphic.



class Solution {
public:
    bool isIsomorphic(string s, string t) {
        int m = s.length();
        int n = t.length();
        if(!m || !n) return false;
        if(m!=n) return false;
        int m1[256]={0};
        int m2[256]={0};
        for(int i=0;i<m;i++){
            if(m1[s[i]]!=m2[t[i]])
            return false;
            m1[s[i]]=i+1;
            m2[t[i]]=i+1;
        }
        return true;
    }
};
