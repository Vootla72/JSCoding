Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.


**************************************************

class Solution {
public:
    int strStr(string haystack, string needle) {
        // if(!haystack && needle) return -1;

        if(haystack.length()<needle.length()) return -1;
        int m=haystack.length();
        int n=needle.length();
        int flag=0;
        int index=0;
        for(int i=0;i<m;i++){
            if(haystack[i]==needle[0]){
                flag=1;
                index=i;
                for(int k=1;k<n;k++){
                    if(haystack[k+i]!=needle[k]){
                    flag=0;
                    break;
                    }
                }
                // two cases to come out of inner loop
                if(flag) //successfully find the string
                {
                    return index;
                }
            }
        }
        return -1;       
    }
};