Given an integer array nums, return the length of the longest strictly increasing 
subsequence
.

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104

////////////////////////sol1////////////////////////
// using recursion


class Solution {
public:
    int lis(int prev_ind, int ind, int n, vector<int>& arr) {
        if (ind == n)
            return 0;
        // not take in count -- increase the  currrent index and prev_index will
        // be same
        int len = 0 + lis(prev_ind, ind + 1, n, arr);

        if (prev_ind == -1 || (arr[ind] > arr[prev_ind])) {
            // take it into the account -- then prev becomes current and
            // curr_ind will be increased to next value
            len = max(len, 1 + lis(ind, ind + 1, n, arr));
        }
        return len;
    }
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        return lis(-1, 0, n, nums);
    }
};


////////////////////////sol2////////////////////////
// using dp (memoization)


class Solution {
public:
    int lis(int prev_ind, int ind, int n, vector<int>& arr,
            vector<vector<int>>& dp) {
        if (ind == n)
            return 0;

        if (dp[ind][prev_ind + 1] != -1)
            return dp[ind][prev_ind + 1];
        // not take in count -- increase the  currrent index and prev_index will
        // be same
        int len = 0 + lis(prev_ind, ind + 1, n, arr, dp);

        if (prev_ind == -1 || (arr[ind] > arr[prev_ind])) {
            // take it into the account -- then prev becomes current and
            // curr_ind will be increased to next value
            len = max(len, 1 + lis(ind, ind + 1, n, arr, dp));
        }
        // here prev_ind +1 bcz prev_ond starts with -1
        return dp[ind][prev_ind + 1] = len;
    }
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> dp(n, vector<int>(n + 1, -1));
        return lis(-1, 0, n, nums, dp);
    }
};

// Time Complexity (TC):
// The function lis(prev_ind, ind, n, arr, dp) recursively explores all possible subsequences.
// In each recursive call, the function checks two possibilities:
// Not including the current element (lis(prev_ind, ind + 1, n, arr, dp)).
// Including the current element if the conditions are satisfied (lis(ind, ind + 1, n, arr, dp)).
// Since the function has two choices at each step and computes results based on two parameters (ind and prev_ind), memoization is applied to avoid recomputation.
// The memoization table dp[ind][prev_ind + 1] has dimensions n x (n + 1):
// ind ranges from 0 to n-1 (i.e., n possible values).
// prev_ind + 1 ranges from 0 to n (i.e., n + 1 possible values).
// Thus, time complexity is 

// O(n 
// 2
//  ) because each pair (ind, prev_ind) is computed once and memoized.

// Space Complexity (SC):
// The recursive stack depth is at most n (since ind goes from 0 to n), so the space used by recursion is 
// O(n).
// The memoization table dp takes 

// O(n 
// 2
//  ) space because it stores n * (n + 1) entries.
// Thus, the space complexity is 

// O(n 
// 2
//  ), which includes the memoization table and the recursive call stack.

// Final Time and Space Complexity:
// Time Complexity: 
// O(n 
// 2
//  )
// Space Complexity: 

// O(n 
// 2
//  )
