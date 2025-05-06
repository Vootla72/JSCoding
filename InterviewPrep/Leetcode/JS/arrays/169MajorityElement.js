// 169. Majority Element
// Solved
// Easy
// Topics
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?





/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    let n = nums.length;
    let candidate = -1;
    let votes = 0;

    // count to check it passess the half of the count

    let count = 0;
    let i = 0;

    while (i < n) {
        if (votes == 0) {
            candidate = nums[i];
            // increase the votes
            // set the votes count to 1
            votes++;
        }
        else if (candidate === nums[i]) {
            votes++;
        } else {
            votes--;
        }
        i++;
    }
    // to get the count of candidate from the given array
    for (let i = 0; i < n; i++) {
        if (candidate === nums[i])
            count++;
    }

    if (count > Math.floor(n / 2)) return candidate;
    return -1;

};

// TC: O(n)
// SC: O(1) -- constant space
