// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)



///////sol1//////


var productExceptSelf = function (nums) {
    let n = nums.length;

    let lArr = [];
    let rArr = [];
    let res = [];
    lArr[0] = 1;
    rArr[n - 1] = 1;

    for (let i = 1; i < n; i++) {
        lArr[i] = lArr[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        rArr[i] = rArr[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < n; i++) {
        res[i] = lArr[i] * rArr[i];
    }

    return res;

};


TC: O(n);
SC: O(n);


/////////sol2//////

var productExceptSelf = function (nums) {
    let n = nums.length;
    let res = [];
    // calculate the product from left

    let left = 1;
    for (let i = 0; i < n; i++) {
        res[i] = left;
        left *= nums[i];
    }

    // calculate the product from right
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }

    return res;

};

TC : O(n);
SC: O(1); // as we are not calculating res space