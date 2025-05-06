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




/////////////////sol/////////////////


class Solution {
    private:
    int reverseNumber (int &x){
        long long int sum=0;
        while(x>0){
            int remainder = x%10;
            sum=sum*10 + remainder;
            x=x/10;

        }
        return sum;

    }
public:
    bool isPalindrome(int x) {
        if(x<0) return false;
        int actualNum = x;

        int revNum = reverseNumber(x);
        if(actualNum == revNum)
        return true;
        return false;
        
    }
};


In general, the number of digits d in a number x is roughly equal to log10(x).
In your code, you are processing each digit of the number x in the reverse function, dividing x by 10 repeatedly. Since the number of digits is proportional to log10(x), the number of iterations needed to process all digits is log10(x).
Therefore, the time complexity for reversing or comparing all digits is proportional to the number of digits, which gives the time complexity of O(log10(x)).

Time Complexity (TC): O(log10(x))
Space Complexity (SC): O(1)



//////////////sol/////////////////

class Solution {
public:
    bool isPalindrome(int x) {
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