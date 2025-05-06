Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.



/////////////////sol//////////////


class Solution {
public:
    int firstUniqChar(string s) {
        int n = s.length();
        unordered_map<char,int>mp;
        for(int i=0;i<n;i++){
            if(!mp[s[i]]){
                    mp[s[i]]=1;
                }
                else{
                    mp[s[i]]++;
                }

        }

        for(int i=0;i<n;i++){
            if(mp[s[i]]==1)
            return i;
        }
        return -1;
        
    }
};



////////////////////sol2///////////////////////

class Solution {
public:
    int firstUniqChar(string s) {
        int n = s.length();
        vector<int>mp(26,0);
        for(int i=0;i<n;i++){
            mp[s[i]-'a']++;
        }
        for(int i=0;i<n;i++){
            if(mp[s[i]-'a']==1)
            return i;
        }
        return -1;
    }
};



///////////////////////////////////////////////

// Time Complexity (TC): The function iterates over the string s twice, each with a linear time complexity of O(n), where n is the length of the string. Hence, the overall time complexity is O(n + n), 
// which simplifies to O(n).

// Space Complexity (SC): The function uses a vector mp of constant size 26 to store the count of characters, regardless of the size of the input string. Therefore, the space complexity is O(26), 
// which simplifies to O(1) or constant space.