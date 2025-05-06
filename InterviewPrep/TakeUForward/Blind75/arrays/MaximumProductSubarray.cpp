152. Maximum Product Subarray
Solved
Medium
Topics
Companies
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.





////////////////sol1/////////////

class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size();

        int max_so_far = INT_MIN;
        int max_end_here=1;

        for(int i=0;i<n;i++){
            max_end_here = max_end_here*nums[i];
            if(max_so_far<max_end_here){
                max_so_far= max_end_here;
            }
            if(max_end_here==0){
                max_end_here =1;
            }
        }
        max_end_here=1;
        for(int i=n-1;i>=0;i--){
            max_end_here = max_end_here*nums[i];
            if(max_so_far<max_end_here){
                max_so_far= max_end_here;
            }
            if(max_end_here==0){
                max_end_here =1;
            }
        }

        return max_so_far;
        
    }
};



////////////sol2/////////////////



class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int maxi=INT_MIN;
        int prefix=1,suffix=1;
        for(int i =0;i<nums.size();i++){
            if(prefix == 0) prefix=1;
            if(suffix==0) suffix =1;

            prefix*=nums[i];
            suffix*=nums[nums.size()-i-1];
            maxi=max(maxi,max(prefix,suffix));
        }
        return maxi;
    }





//Approach

Key Explanation and proof for this algorithm:
let n be the # of negative numbers.
If n is even it obviously works.
If n is odd, then the answer is some subarray without one of the negative numbers, i.e. to the right or to the left of that negative number.
Take a look at any negative number in the array.
Consider the subarrays to the left of this number and to the right of this number. they both have an even # of negative numbers,
Then, when we take max products from the right and from the left, we encounter these arrays` product too.
And this is true for every negative number in the array, so for sure we will encounter the answer.