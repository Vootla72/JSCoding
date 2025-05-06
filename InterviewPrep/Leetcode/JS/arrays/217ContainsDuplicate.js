// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109





//////// sol1 ////////

// using set

var containsDuplicate = function (nums) {
    const set = [...new Set(nums)];
    return nums.length !== set.length;
};

// The new Set(nums) operation removes duplicates and creates a set, which has a time complexity of 
// O(n), where 
// n is the length of the input array nums.
// The spread operator (...) and the array constructor ([...]) convert the set back into an array. This also has a time complexity of 
// O(n)

// the space complexity is O(n).

// Time Complexity: O(n)
// Space Complexity: O(n)



////sol2/////
// TC Exceeded

var containsDuplicate = function (nums) {

    return nums.some((val, index) => nums.indexOf(val) !== index);

};


// which iterates over the array. Inside the some() method, nums.indexOf(val) is called, which has a time complexity of O(n).
// Thus, for every element in the array (let's assume there are n elements):
// some() iterates O(n) times.
// indexOf() for each iteration takes O(n)
// This results in an overall time complexity of O(n2)

// SC : O(1)


/////// sol3///

var containsDuplicate = function (nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num))
            return true;
        set.add(num);
    }
    return false;
};

    // SC : O(n)
    // TC : O(n)
