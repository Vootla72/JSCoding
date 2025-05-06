// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
 

// Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).




///sol////

//Approach:
// 1. Initialize a variable minLen to Infinity.
// 2. Initialize two pointers, left and right, to 0.
// 3. Initialize a variable sum to 0.
// 4. Iterate over the nums array with the right pointer.
// 5. Add the current element to sum.
// 6. While sum is greater than or equal to target, update minLen and remove the left element from sum.(its while *********)
// 7. Update the result if minLen is less than Infinity.
// 8. Return the result.


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let l = 0, r = 0;
    let n = nums.length;
    let minLength = Infinity;
    let sum = 0;

    while (r < n) {
        sum += nums[r++]; // here r is incremented thats y (r-1)===(r+1-l);

        // till sum is less than target, remove the l values and increment the l value
        while (sum >= target) {
            minLength = Math.min(minLength, (r - l));
            sum -= nums[l++];
        }

    }

    return minLength === Infinity ? 0 : minLength;


};

// Time complexity: O(n)
// Space complexity: O(1)