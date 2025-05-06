Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.

A circular array means the end of the array connects to the beginning of the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].

A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

 

Example 1:

Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.
Example 2:

Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
Example 3:

Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
 

Constraints:

n == nums.length
1 <= n <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104


/////////////////sol///////////////////////


class Solution {
public:
int minSubArr(vector<int>nums){
    int min_so_far=INT_MAX;
    int min_here=0;
    for(int i = 0;i<nums.size();i++){
        min_here+=nums[i];
        if(min_here<min_so_far){
            min_so_far=min_here;
        }
        if(min_here>0)
        min_here=0;
    }
    return min_so_far;
}
int maxSubArr(vector<int>nums){
    int max_so_far=INT_MIN;
    int max_here=0;
    for(int i = 0;i<nums.size();i++){
        max_here+=nums[i];
        if(max_here>max_so_far){
            max_so_far=max_here;
        }
        if(max_here<0)
        max_here=0;
    }
    return max_so_far;
}

    int maxSubarraySumCircular(vector<int>& nums) {
        int sum=0;
        for(int i=0;i<nums.size();i++){
            sum+=nums[i];
        }
        int s2=0,s1;
        s1=maxSubArr(nums);
        s2=sum-(minSubArr(nums));
        //Note:s2==0 case is all numbers in an array is negative
        return s2==0?s1: max(s1,s2);
        
    }
};

//note
//if maxvalue can be case1: in linear form or case2: inn circular form
// case1: it represents direct kadane's algorithm
// cas2:cal remaining part-- which will be min sum continuguious subarrayif 

// if case 2:0 --> then all negative no;s so return case1 value