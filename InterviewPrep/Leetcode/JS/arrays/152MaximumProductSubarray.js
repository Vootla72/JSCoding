// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any subarray of nums is guaranteed to fit in a 32-bit integer.




///////sol//////


// 1. make two variables --> curr_product:1 and max_product: -Infinity
// 2. Cal the max subarray product from left to right
//     1. Make sure when the curr product is 0 , make it to 1
// 3. Cal the max subarray product from right to left
//     1. Make sure when the curr product is 0 , make it to 1
// 4. cal the max sum


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {

    let curr_product = 1;
    let max_product = -Infinity;

    //left to right calculation
    for (let i = 0; i < nums.length; i++) {
        curr_product = curr_product * nums[i];
        if (curr_product > max_product)
            max_product = curr_product;
        if (curr_product == 0)
            curr_product = 1;
    }
    // right to left calculation

    curr_product = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        curr_product = curr_product * nums[i];
        if (curr_product > max_product)
            max_product = curr_product;
        if (curr_product == 0)
            curr_product = 1;
    }
    return max_product;

};