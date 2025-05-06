238. Product of Array Except Self
Solved
Medium
Topics
Companies
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)



sol:

TC:O(n)
SC:O(n)


/*

    Time Complexity : O(N), As we iterate the Array(nums) thrice. Where N = size of the array.

    Space complexity : O(N), Array(left_Product and right_Product) space. 

    Solved using Dynamic Programming Approach(tabulation).

*/

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n= nums.size();
        vector<int>output(n);
        output[0]=1;
        vector<int>LP(n);
        vector<int>RP(n);
        LP[0]=1;
        RP[n-1]=1;
        for(int i=1;i<n;i++){
            LP[i]=LP[i-1]*nums[i-1];
        }
        for(int i=n-2;i>=0;i--){
            RP[i]=RP[i+1]*nums[i+1];
        }
        for(int i=0;i<n; i++){
            output[i]=LP[i]*RP[i];
        }
        return output;
        
    }
};





sol2: TC:O(n)
    SC: O(1)


    /*

    Time Complexity : O(N), As we iterate the Array(nums) twice. Where N = size of the array.

    Space complexity : O(1), Constant space. Extra space is only allocated for the Array(output), however the
    output does not count towards the space complexity.

    Solved using Dynamic Programming Approach(Space Optimization). Optimized Approach.

*/




    class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n= nums.size();
        vector<int>output(n);
        output[0]=1;
        int right=1;
        for(int i=1;i<n;i++){
            output[i]=output[i-1]*nums[i-1];
        }
        for(int i=n-1;i>=0;i--){
            output[i] *=right;
            right*=nums[i];   
        }
        return output;
    }
};