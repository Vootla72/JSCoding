Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?


///////////sol//////////////////


sol1:

class Solution {
public:
    bool isPalindrome(int x) {
        if(x<0) return false;
        long long reverseVal = 0;
        long long int temp=x;
        while(temp!=0){
            int digit = temp%10;
            reverseVal=reverseVal*10+digit;
            temp=temp/10;
        }
        return (x==reverseVal);
    }
};


/////////////sol2/////////////

reversing half of the number and compare...
for odd -- we dont need to reverse the middle number --> comparinng reversed/10

For an even number of digits, if x is equal to reversed, then the number is a palindrome. We return true.
For an odd number of digits, if x is equal to reversed / 10 (ignoring the middle digit), 
then the number is a palindrome. We return true.


class Solution {
public:
    bool isPalindrome(int x) {
        // zeroes before number will not be considered.. so if last digit is 0 then it will not a palindrome
        if(x<0 ||(x!=0 && x%10 == 0)) return false;
        int reversed = 0;
        while(x>reversed){
            int digit = x%10;
            reversed=reversed*10 + digit;
            x=x/10;
        }
        return(x == reversed) || (x == reversed/10);
    }
};


/////////////sol3-- converting into string----//////////////


class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0)
            return false;
        string s = to_string(x);
        int n = s.size();
        for (int i = 0; i < n; i++)
            if (s[i] != s[n - i - 1])
                return false;
        return true;
    }
};
