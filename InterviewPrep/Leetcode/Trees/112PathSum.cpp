Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000


//////

TC:O(n) -- in worst case
sol:

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
    bool hasPathSum(TreeNode* root, int targetSum) {
        if(!root) return false;
        if(!root->left && !root->right) return (root->val==targetSum);
        //if its a leaf node

        bool left_sum = hasPathSum(root->left,targetSum-root->val);
        bool right_sum = hasPathSum(root->right,targetSum-root->val);
        //if any of the path matches the sum...if anyone of them is empty
        return left_sum || right_sum;
        
    }
};





///////////////sol2/////////////

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
    bool hasPathSum(TreeNode* root, int targetSum) {
        if(!root) return false;
        if(!root->left && !root->right) return (root->val==targetSum);
        //if its a leaf node

        //if any of the path matches the sum...if anyone of them is empty
        return hasPathSum(root->left,targetSum-root->val) || hasPathSum(root->right,targetSum-root->val);
        
    }
};



intution:

f root is None (i.e., the tree is empty), there can't be any path with the desired sum. So, the function returns False.
If root is a leaf node (i.e., it has no left or right children), the function checks whether the value of the leaf node is equal to the remaining targetSum. If they are equal, it returns True, indicating that a valid path with the target sum has been found.
If the above conditions are not met, the function recursively checks for a valid path with the target sum in both the left and right subtrees. It subtracts the value of the current node from the targetSum before passing it to the recursive calls.
The result of the recursive calls on the left and right subtrees (left_sum and right_sum) are then combined using the logical OR operation. This is because if either the left subtree or the right subtree has a valid path, it means there's a valid path in the entire tree, so the function should return True.
If none of the above conditions are met, the function returns False.
The base cases (when the tree is empty or when a leaf node with a matching value is found) guarantee that the recursion will eventually terminate. The recursion explores all possible paths from the root to leaf nodes, checking if any of them sum up to the given targetSum. The logical OR operation on the results of the recursive calls ensures that the function correctly returns True if a valid path is found anywhere in the tree.

This solution has a time complexity of O(N), where N is the number of nodes in the binary tree, as it visits each node once in the worst case.








///////////
The time complexity of this algorithm depends on the structure of the binary tree. In the worst-case scenario, where the binary tree is highly unbalanced (e.g., skewed), the time complexity could be O(n), where 'n' is the number of nodes in the tree. This is because in the worst case, the algorithm might need to traverse all nodes of the tree to find the path sum.

However, if the binary tree is balanced, the time complexity can be better. In a balanced binary tree with 'n' nodes, the height of the tree is O(log n). In such cases, the time complexity of the algorithm is O(n log n), as each node is visited once, and for each node, there could be a recursion depth of O(log n).

The space complexity of this algorithm is also dependent on the structure of the binary tree. In the worst-case scenario, the space complexity can be O(n), where 'n' is the number of nodes in the tree. This is because in the worst case, the algorithm might need to store the entire tree structure in the call stack during recursion. However, in a balanced binary tree, the space complexity is O(log n) due to the recursion depth being O(log n).

So, in summary:

Time Complexity: O(n log n) in a balanced tree, O(n) in an unbalanced tree.
Space Complexity: O(log n) in a balanced tree, O(n) in an unbalanced tree.