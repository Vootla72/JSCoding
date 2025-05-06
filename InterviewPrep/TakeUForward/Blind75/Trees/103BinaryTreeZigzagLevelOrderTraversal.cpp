Given the root of a binary tree, 
return the zigzag level order traversal of its nodes values. (i.e., from left to right, then right to left for the next level and alternate between).


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []




////////////////sol//////////////

class Solution {
public:
    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
        vector<vector<int>> res;
        if (!root)
            return res;
        queue<TreeNode*> q;
        q.push(root);
        int level = 1;

        // each time check the q size after completion of each level so define
        // level variable on top of it
        while (!q.empty()) {
            int s = q.size();
            vector<int> v;

            while (s--) {
                TreeNode* temp = q.front();
                q.pop();
                v.push_back(temp->val);
                if (temp->left)
                    q.push(temp->left);
                if (temp->right)
                    q.push(temp->right);
            }
            // after each level
            if (level % 2 == 0) {
                reverse(v.begin(), v.end());
            }
            res.push_back(v);
            ++level;
        }
        return res;
    }
};

// Time Complexity (TC)
// Traversal of the Tree:

// The algorithm visits each node exactly once, and there are n nodes in the tree.
// Each node is processed in constant time, and so the time complexity for traversal is O(n).
// Reversing the Vector:

// After processing each level, the vector v is reversed if the current level is even.
// In the worst case, the reversing operation for each level takes O(m) time, where m is the number of nodes at that level. However, over all levels, the total cost of reversing is 
// O(n) because the sum of nodes across all levels is n.
// Thus, the total time complexity is:

// Time Complexity=O(n)+O(n)=O(n)
// Space Complexity (SC)
// Space for Result Vector:

// The res vector will store all the nodes of the tree, so it will take O(n) space.
// Space for the Queue:

// The queue<TreeNode*> q will hold at most O(w) nodes at any time, where w is the maximum width of the tree.
// In the worst case (a complete binary tree), the width w can be approximately n/2, so the space used by the queue is O(n).
// Space for the Temporary Vector:

// The vector<int> v used to store nodes at each level will require O(w) space at each level. But since v is reused, it does not contribute additional space complexity beyond O(n).
// Thus, the total space complexity is:

// Space Complexity=O(n)+O(n)=O(n)
// Conclusion
// Time Complexity (TC): O(n)
// Space Complexity (SC): O(n)