49. Group Anagrams
Solved
Medium
Topics
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
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

//sol:///////////////////


Intuition:
The intuition is to group words that are anagrams of each other together. Anagrams are words that have the same characters but in a different order.

Explanation:
Let's go through the code step by step using the example input ["eat","tea","tan","ate","nat","bat"] to understand how it works.

Initializing Variables

We start by initializing an empty unordered map called mp (short for map), which will store the groups of anagrams.
Grouping Anagrams
We iterate through each word in the input vector strs. Let's take the first word, "eat", as an example.

Sorting the Word
We create a string variable called word and assign it the value of the current word ("eat" in this case).

Next, we sort the characters in word using the sort() function. After sorting, word becomes "aet".

Grouping the Anagram
We insert word as the key into the mp unordered map using mp[word], and we push the original word ("eat") into the vector associated with that key using mp[word].push_back(x), where x is the current word.

Since "aet" is a unique sorted representation of all the anagrams, it serves as the key in the mp map, and the associated vector holds all the anagrams.

For the given example, the mp map would look like this after processing all the words:

{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}
Creating the Result
We initialize an empty vector called ans (short for answer) to store the final result.

We iterate through each key-value pair in the mp map using a range-based for loop. For each pair, we push the vector of anagrams (x.second) into the ans vector.
For the given example, the ans vector would look like this:

[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
Returning the Result
We return the ans vector, which contains the groups of anagrams.


class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string,vector<string>>mp;
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