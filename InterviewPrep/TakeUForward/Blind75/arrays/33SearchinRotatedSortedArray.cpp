There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104



///////////////sol1///////////

// As array is rotated n sorted... first we need to find the sorted part of an array


class Solution {
public:
    int search(vector<int>& nums, int target) {
        // as the array is rotated.. we need to find the sorted part of an array 
        // and we can apply binary search on that part of an array.

        int n = nums.size();
        int left = 0;
        int right = n-1;
        while(left<=right){
            int mid = left+(right-left)/2;
            if(nums[mid]==target)
            return mid;

            // check if left part of an array is sorted
            if(nums[left]<=nums[mid]){
                //check if target lies in the part
                if(nums[left]<=target && target<=nums[mid]){
                    //element exists
                    right=mid-1;// as target == nums[mid] is covered
                }
                else {
                    // element does not exists
                    left=mid+1;
                }
            }
            else {
                // right part of mid is sorted
                if(nums[mid]<=target && target<=nums[right]){
                    //element exists
                    left=mid+1;
                }
                else {
                    // element does not exists
                    right = mid-1;
                }
            }
        
        }

        return -1;
        
    }
};




//////sol2/////////

// With linear search

class Solution {
public:
    int search(vector<int>& nums, int target) {
         for(int i=0;i<nums.size();i++)
         {
            if(nums[i]==target)
            return i;
         }
         return -1;
        
    }
};