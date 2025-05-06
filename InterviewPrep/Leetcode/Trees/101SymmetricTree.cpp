Easy
Topics
Companies
/////////////////////////////////////////////////////////////// 
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?


//Note:Need to learn iterative manner code

sol1:

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
    bool getIsSymmetric(TreeNode* node1,TreeNode* node2){
        if(!node1 || !node2) return node1==node2;
        if(node1->val != node2->val) return false;//return false when data not matches at any pooint of calculation... if data matches then only go further.
        return getIsSymmetric(node1->left,node2->right) && getIsSymmetric(node1->right,node2->left);
    }
    bool isSymmetric(TreeNode* root) {
        if(!root) return true;
        return getIsSymmetric(root->left,root->right);
        
    }
};


sol2:

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
    bool getIsSymmetric(TreeNode* node1,TreeNode* node2){
        if(!node1 || !node2) return node1==node2;
        return (node1->val != node2->val) &&
         getIsSymmetric(node1->left,node2->right) && getIsSymmetric(node1->right,node2->left);
    }
    bool isSymmetric(TreeNode* root) {
        if(!root) return true;
        return getIsSymmetric(root->left,root->right);
        
    }
};





