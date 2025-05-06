Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1



///////////////////sol///////////////////


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
    bool isValidBST(TreeNode* root) {
        return isValidBSTHelper(root, nullptr, nullptr);
    }

    bool isValidBSTHelper(TreeNode* root, TreeNode* lowerBound, TreeNode* upperBound)
    {
        if (!root)
            return true;
        if (lowerBound && root->val <= lowerBound->val)
            return false;
        if (upperBound && root->val >= upperBound->val)
            return false;
        return isValidBSTHelper(root->left, lowerBound, root) &&
            isValidBSTHelper(root->right, root, upperBound);
    }
};


//////////////sol2/////////////////


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
    vector<int> nodes;
    void inorder(TreeNode* root) {
        if (root->left) inorder(root->left);
        nodes.push_back(root->val);
        if (root->right) inorder(root->right);
    }
    bool isValidBST(TreeNode* root) {
        inorder(root);
        for (int i = 0; i < nodes.size() - 1; i++) {
            if (nodes[i] >= nodes[i+1]) return false;
        }
        return true;
    }
};


////or////

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
    void inOrderTraversal(TreeNode*& root, vector<int>& res) {
        if (!root)
            return;
        inOrderTraversal(root->left, res);
        res.push_back(root->val);
        inOrderTraversal(root->right, res);
    }

    bool isValidBST(TreeNode* root) {
        if (!root)
            return true;

        vector<int> res;
        inOrderTraversal(root, res);

        for (int i = 1; i < res.size(); i++) {
            if (res[i - 1] >= res[i])
                return false;
        }
        return true;
    }
};

// Time Complexity (TC)
// In-order traversal: The inOrderTraversal function performs an in-order traversal of the binary tree, visiting each node exactly once. Thus, the time complexity for this function is O(n), where 
// n is the number of nodes in the binary tree.
// Validation loop: The isValidBST function iterates through the vector res, which contains all the node values from the in-order traversal. This loop also runs in 
// O(n) time.
// Combining both, the overall time complexity of the isValidBST function is: O(n)+O(n)=O(n)

// Space Complexity (SC)
// Call stack: The space complexity due to the call stack for the in-order traversal is O(h), where h is the height of the tree. In the worst case (for a skewed tree), O(n).
// Vector storage: The vector res stores all the node values from the in-order traversal, requiring O(n) space.
// Combining both, the overall space complexity is: 
// O(n)+O(h)

// In the worst case (for a skewed tree), 

// h=O(n), so the space complexity is: O(n)

// Thus, the time complexity is O(n) and the space complexity is O(n).