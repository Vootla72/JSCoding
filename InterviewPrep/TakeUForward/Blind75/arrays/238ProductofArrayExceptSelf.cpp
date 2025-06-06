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






/////////////////////sol1///////////////

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int>left(n);
        vector<int>right(n);
        vector<int>result(n);
        left[0]=right[n-1]=1;
        for(int i=1; i<n; i++){
            left[i]=left[i-1]*nums[i-1];
        }
        for(int i=n-2;i>=0;i--){
            right[i]=right[i+1]*nums[i+1];
        }
        for(int i=0;i<n;i++){
            result[i]=left[i]*right[i];
        }
        return result;
        
    }
};





/////////////////////////sol2//////////////////////


with SC =  O(1) which we will not consider the array o/p


class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int>res(n,1);
        for(int i=n-2;i>=0;i--){
            res[i]=res[i+1]*nums[i+1];
        }
        int b=1;
        for(int i=1;i<n;i++){
            b=b*nums[i-1];// left product
            res[i]=res[i]*b; // ans =right product * left product
        }

        return res;
        
    }
};

