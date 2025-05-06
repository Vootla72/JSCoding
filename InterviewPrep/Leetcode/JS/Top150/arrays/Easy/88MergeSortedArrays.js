// 88. Merge Sorted Array
// Solved
// Easy
// Topics
// Companies
// Hint
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.



// Approach  -- using two pointer approach

// simple logic..
// place al;l the higher elements at the last..
// then replace all the remaining elements-- it does inplace sorting


// Start from the end
// Since nums1 has extra space at the end, we begin filling it from the last index (i.e., m + n - 1).
// This avoids shifting elements unnecessarily.
// Use two pointers

// One pointer (i) starts at the last valid element of nums1 (m - 1).
// Another pointer (j) starts at the last element of nums2 (n - 1).
// A third pointer (k) points to the last position in nums1 (m + n - 1).
// Compare elements from the back

// If nums1[i] > nums2[j], place nums1[i] at nums1[k] and decrement i.
// Else, place nums2[j] at nums1[k] and decrement j.
// Move k backward after each step.
// Handle remaining elements in nums2

// If nums2 still has elements left (j >= 0), copy them into nums1.
// No need to check nums1, because if i < 0, it means nums1 elements are already in place.
// Done!

// nums1 is now completely merged and sorted.



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // two pointer appraoch
    let i = m - 1;
    let j = n - 1;
    let k = (m + n) - 1;

    while (j >= 0) {
        // as we need to merge nums2 to nums1 -- so take condition of j
        if (i >= 0 && nums1[i] > nums2[j]) {
            // replace k elements with greater elements
            nums1[k--] = nums1[i--];
        }
        else {
            // if all the i elements are greater than j(i>=0 case fails)
            // or any other element is less than j ( nums1[i]> nums2[j] case fails)
            nums1[k--] = nums2[j--];

        }
    }
};



// Time Complexity:
// O(m + n) → Since we traverse both arrays only once.
// Space Complexity:
// O(1) → No extra space used; we modify nums1 in place.