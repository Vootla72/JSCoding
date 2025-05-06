Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true
Example 2:


Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
Output: false
 

Constraints:

The number of nodes in the root tree is in the range [1, 2000].
The number of nodes in the subRoot tree is in the range [1, 1000].
-104 <= root.val <= 104
-104 <= subRoot.val <= 104





////////////////sol/////////////////


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
    bool isSubtree(TreeNode* root, TreeNode* subRoot) {
        // If subRoot is NULL, any subtree can match, so return true
        if(subRoot == NULL){
            return true;
        }
        // If root is NULL, there are no nodes left in the root tree to check, so return false
        if (root == NULL) {
            return false;
        }
        // If the subtree rooted at the current node of root matches the subRoot, return true
        if (same(root, subRoot)) {
            return true;
        }
        // Recursively check if subRoot is a subtree of the left or right child of the current node
        return isSubtree(root->left, subRoot) || isSubtree(root->right, subRoot);
    }
private:
//This code is same as same Tree
    bool same(TreeNode* r, TreeNode* s) {
        // If both trees are NULL, they are identical
        if (r == NULL && s == NULL) {
            return true;
        }
        // If one tree is NULL while the other is not, they are not identical
        if (r == NULL || s == NULL) {
            return false;
        }
        // If the values of the current nodes do not match, the trees are not identical
        if (r->val != s->val) {
            return false;
        }
        // Recursively check if the left and right subtrees are identical
        return same(r->left, s->left) && same(r->right, s->right);
    }
};



// Time Complexity (TC):
// isSubtree function:

// For each node in the root tree, we check whether the subtree rooted at this node is identical to the subRoot. This involves calling the same function.
// If the root has n nodes, and each call to same may take up to 
// m time (where m is the number of nodes in subRoot), the worst-case time complexity is O(n×m).
// same function:

// This function checks if two trees are identical. It compares the root values and then recursively compares their left and right subtrees.
// In the worst case, it checks all nodes of both trees, leading to 
// O(m) operations for each call.
// Thus, the total time complexity is:O(n×m)

// The recursion depth is determined by the height of the trees. In the worst case, the height of the root tree is 
//   and the height of subRoot is h
//  .
// Space complexity due to the recursion stack is O(n+m) in the worst case.