A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.


Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

////sol////

// Intuition
// Keeping the count of maximum distance always and whenever the sum of path becomes negative put it as 0.

// Approach
// Kandanes algorithm

// Complexity
// Time complexity:
// O(n)

// Space complexity:
// O(n)


/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:

    // Helper function to perform DFS and calculate the maximum path sum
    int dfs(TreeNode* root, int& maxs) {
        if (root == nullptr) {
            return 0;  // Base case: if the node is null, return 0
        }

        // Recursively calculate the maximum path sum for the left and right subtrees
        // If the path sum is negative, consider it as 0 (since we wouldn't include negative paths)/(kandanes algorithm)
        int leftMax = max(0, dfs(root->left, maxs));
        int rightMax = max(0, dfs(root->right, maxs));

        // Update the maximum path sum found so far by considering the current node's value and the max path sums from both subtrees
        maxs = max(maxs, root->val + leftMax + rightMax);

        // Return the value of the current node plus the maximum of the left or right subtree's path sum
        // This ensures we continue the path from this node upwards in the recursion
        return root->val + max(leftMax, rightMax);
    }

    // Main function to find the maximum path sum in a binary tree
    int maxPathSum(TreeNode* root) {
        int maxs = INT_MIN;  // Initialize the max sum to the smallest possible value
        dfs(root, maxs);     // Perform DFS to compute the maximum path sum
        return maxs;         // Return the maximum path sum found
    }
};