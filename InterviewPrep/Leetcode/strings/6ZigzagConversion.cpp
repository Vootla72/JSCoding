6. Zigzag Conversion
Solved
Medium
Topics
Companies
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000



// *********************************************** //
sol:

class Solution {
public:
    string convert(string s, int numRows) {
        if(numRows<=1) return s;
        vector<string>v(numRows, "");
        int currLine=0;
        bool reachEdge=true;//this will be true for corners
        for(int i=0;i<s.length();i++){
            if(currLine == 0 || currLine == (numRows - 1))
            reachEdge = !reachEdge;
            v[currLine]+=s[i];
            if(!reachEdge) currLine++;
            else currLine--;
        }
        string res="";
        for(auto &it: v)
            res+=it;
        return res;
        }
        
};