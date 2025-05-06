Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?





///////////////sol//////////////
class Solution {
public:
    bool isAnagram(string s, string t) {
        int m = s.length();
        int n = t.length();
        if(n!=m ) return false;
        unordered_map<char,int>v;
        for(int i=0;i<m;i++){
            v[s[i]]++;
        }

        for(int i=0;i<n;i++){
            v[t[i]]--;
            if(v[t[i]]<0)
            return false;
        }
        return true;
        
    }
};


Time Complexity:
The time complexity is dominated by the two loops in the function.
First Loop (to build the frequency map for s): This loop iterates m times, where m is the length of string s. Thus, its time complexity is 
O(m).
Second Loop (to check against string t): This loop also iterates n times, where n is the length of string t. Since in this problem, 
m=n, this is 
O(n), which is equivalent to O(m) as well.
Thus, the overall time complexity is 
O(m+n), which simplifies to 
O(n), where n is the length of the input strings.

Space Complexity:
The space complexity is determined by the unordered_map<char, int> mp, which stores character frequencies.
In the worst case, the map can contain up to k distinct characters from the strings s and t, where k is a constant representing the number of unique characters (usually limited by the alphabet size). For the English alphabet, 
k=26.
Thus, the space complexity is 
O(k), which simplifies to 

O(1) because the number of characters is constant (i.e., a maximum of 26 for lowercase English letters).

Final Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
////////////////sol2////////////

class Solution {
public:
    bool isAnagram(string s, string t) {
        int m = s.length();
        int n = t.length();
        if(!m || !n || m!=n) return false;// Tc : O(1)
        vector<int>v(26,0);
        for(int i=0; i<m; i++){
            v[s[i]-'a']++;
        }
        for(int i=0;i<n;i++){
            v[t[i]-'a']--;
        }
        //imp the condn is with v.size() not with n or m
        for(int i=0;i<v.size();i++){
            if(v[i]<0) return false;
        }
        return true;
        
    }
};

if m = n --> TC : O(n)
SC: O(1)