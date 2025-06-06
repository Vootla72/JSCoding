Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1


//*****************************//
sol:
if fast reaches 1 n then automatically fast stops at 1 as square of 1 is always 1
and slow will reaches to fast ==1 and gets exist out of loop   ------- true case

its using floyds algorithm


class Solution {
public:
    int square(int num){
        int ans=0;
        while(num>0){
            int remainder = num%10;
            ans+= remainder*remainder;
            num = num/10;
        }
        return ans;
    }
    bool isHappy(int n) {
        int slow = n;
        int fast=n;
        do{
            slow = square(slow);
            fast = square(square(fast));

        }while(slow!=fast);
        return slow==1;
        
    }
};


if cycle is detected , its not a happy number
else f slow==fast==1 --> happy number. Ex:19
