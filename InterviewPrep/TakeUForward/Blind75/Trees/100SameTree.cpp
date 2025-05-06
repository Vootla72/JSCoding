Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false




//////////////////sol///////////////

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if ((!p || !q))
            return p == q;
        if (p->val != q->val) ////important
            return false;
        bool left = isSameTree(p->left, q->left);
        bool right = isSameTree(p->right, q->right);
        return left && right;

        //or
        // return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
};


Approach:

Base Case: The base case for recursion is reached when both nodes are null, indicating the end of the subtree. 
In this case return true. If only one of the nodes in null while the other is not or vice versa, return false since they cannot be identical.

Recursive Function:

Check if the values of the current nodes in both tree are equal. If not, return false otherwise check the conditions below.
Check if the left subtree of both the trees is identical or not by calling the recursive function on the left child.
Check if the right subtree of both the trees is identical or not by calling the recursive function on the right child.



Time Complexity (TC):
The time complexity is O(n), where n is the total number of nodes in the smaller tree between p and q.

Space Complexity (SC):
The space complexity is O(h), where h is the height of the tree.

skewed - O(n)
balanced - O(logn)