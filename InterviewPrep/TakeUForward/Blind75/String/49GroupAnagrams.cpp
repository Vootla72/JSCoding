49. Group Anagrams
Solved
Medium
Topics
Companies
Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.



////////////////sol1/////////////////////


class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string,vector<string>>mp;
        // imp line to store the key as the sorted one and value as the vector of the words
        for(auto x:strs){
            string word=x;
            sort(word.begin(), word.end());
            mp[word].push_back(x);
        }
        vector<vector<string>>ans;
        for(auto x:mp){
            ans.push_back(x.second);
            //to push all the values for respectives keys available
        }
        return ans;
    }
};

