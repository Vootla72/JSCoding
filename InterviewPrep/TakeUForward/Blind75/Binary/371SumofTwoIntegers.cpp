Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = 2, b = 3
Output: 5
 

Constraints:

-1000 <= a, b <= 1000


////////////////sol1/////////////////////


class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
            int temp = (a & b) << 1;
            a = a ^ b; // sum without carry
            b = temp;  // now b holds the carry
        }
        return a;
    }
};

// Time Complexity: O(n), where n is the number of bits in the integer (32 for typical systems).
// SC: O(1)