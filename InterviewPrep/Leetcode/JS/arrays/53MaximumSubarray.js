// Kadane's Algorithm, maximum subarray sum




/////////sol1/////////


var maxSubArray = function (nums) {
    let max_sum = -Infinity;
    let curr_sum = 0;
    for (let i = 0; i < nums.length; i++) {
        curr_sum = curr_sum + nums[i];
        if (curr_sum > max_sum) {
            max_sum = curr_sum;
        }
        if (curr_sum < 0) {
            curr_sum = 0
        }
    }
    return max_sum

};



////////////sol2//////////

var maxSubArray = function (nums) {
    let max_sum = -Infinity;
    let curr_sum = 0;
    for (let i = 0; i < nums.length; i++) {
        // updating the curr_sum till ow.. it can be current element or curr_sum+current element
        curr_sum = Math.max(curr_sum + nums[i], nums[i]);
        if (curr_sum > max_sum) {
            max_sum = curr_sum;
        }

    }
    return max_sum

};


TC:O(n)
SC:O(1)