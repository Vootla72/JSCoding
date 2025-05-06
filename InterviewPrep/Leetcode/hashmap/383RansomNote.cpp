Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.




/////////////////////////////////////
sol:
class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        string mag = magazine;
        string ran = ransomNote;
        int m = magazine.length();
        int n = ransomNote.length();
        if(n>m)return false;
        unordered_map<int,int>mp;
        for(int i=0;i<m;i++){
            if(mp.find(mag[i])!= mp.end()){
                mp[mag[i]]++;
            }
            else{
                mp[mag[i]]=1;
            }
        }

        for(int i=0;i<n;i++){
            if(mp[ran[i]]>0){
                mp[ran[i]]--;
            }
            else{
                return false;
            }
        }
        return true;
        
    }
};


///////////////////////////////////////////////

As the data contains only lower case English letters we can use ascii point here



sol2:

class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        int m = magazine.length();
        int n = ransomNote.length();
        if(n>m)return false;
        vector<int>v(26,0);
        for(int i=0; i<m;i++){
            v[magazine[i]-'a']++;
        }
        for(int i=0;i<n;i++){
            v[ransomNote[i]- 'a']--;
        }
        for(int i=0;i<v.size();i++){
            if(v[i]<0) return false;
        }
        return true;
    }
};