Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 




class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n= nums.size();
        k=k%n;
        //first rotate n-k elements
        //second rotate last k elements
        //then reverse the whole list
        reverse(nums.begin(),(nums.end()-k));
        reverse((nums.end()-k),nums.end());
        reverse(nums.begin(),nums.end());
    }
};

//Note:rotate to the right means ACW

//***********************************************************//



Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [4,5,6,7,1,2,3]

// rotate the arraay left ----> CW

class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n= nums.size();
        k=k%n;
        //reverse the whole list
        //first rotate n-k elements
        //second rotate last k elements
        reverse(nums.begin(),nums.end());
        reverse(nums.begin(),(nums.end()-k));
        reverse((nums.end()-k),nums.end());
    }
};

//Note : for right ACW
1. rotate n-k
2.rotate k
3.rotate whole list

//Note: for left CW

1. ROTATE whole list
2.rotate n-k
3.rotate k