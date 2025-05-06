Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104





////////////////////sol////////////////////


class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max_end_here=0,max_so_far=INT_MIN;
        for(int i=0;i<nums.size();i++){
            max_end_here+=nums[i];
            if(max_so_far<max_end_here)
            max_so_far=max_end_here;
            if(max_end_here<0)
            max_end_here=0;
        }
        return max_so_far;
        
    }
};





//Note:
// The idea of Kadane’s algorithm is to maintain a variable max_ending_here that stores the maximum sum contiguous 
// subarray ending at current index and a variable max_so_far stores the maximum sum of contiguous subarray found so far,
// Everytime there is a positive-sum value in max_ending_here compare it with max_so_far and update max_so_far 
// if it is greater than max_so_far.