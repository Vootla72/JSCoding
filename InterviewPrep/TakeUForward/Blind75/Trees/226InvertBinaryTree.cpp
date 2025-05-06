Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100





/////////////////sol//////////////////

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
    TreeNode* invertTree(TreeNode* root) {
        if(!root) return root;
        //first swap the children and same apply to left tree n right tree

        // first reverse it and then do apply for left and right subtree
        // Its like a pre-order traversal

        TreeNode* temp = root->left;
        root->left=root->right;
        root->right=temp;
        if(root->left) invertTree(root->left);
        if(root->right) invertTree(root->right);
        return root;
        
    }
};

TC: O(n) Where operations done for swapping of each node will be O(1) and O(n) for traversing all nodes
SC: O(h), where h is the height of the tree (worst-case O(n))  // for skewed tree
    IF tree is balanced then O(logn)