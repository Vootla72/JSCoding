Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1


//////////sol/////////


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
    vector<double> averageOfLevels(TreeNode* root) {
        vector<double>res;
        double sum=0,avg=0;
        queue<TreeNode*>q;
        if(!root) res.push_back(0);
        q.push(root);
        while(!q.empty()){
            int s= q.size();
            int n=q.size();
            sum=0;
            avg=0;
            while(s--){
                TreeNode* t = q.front();
                sum+=t->val;
                q.pop();
                if(t->left) q.push(t->left);
                if(t->right) q.push(t->right);

            }
            avg=sum/n;
            res.push_back(avg);
        }
        return res;
        
    }
};






///////////TC n SC ////////////

Time Complexity (TC):

Let n be the number of nodes in the binary tree.
In the worst-case scenario, where the binary tree is completely skewed, the while loop will run for each node, visiting all nodes once.
Within the loop, operations like pushing and popping from the queue take constant time O(1).
Hence, the time complexity of the solution is O(n).

Space Complexity (SC):

The space complexity is primarily governed by the queue data structure used for level order traversal.
In the worst case, the queue might hold all the nodes at a particular level. This can happen when the tree is complete binary tree, thus having roughly n/2 nodes at the last level.
Therefore, the space complexity is O(n/2), which simplifies to O(n) asymptotically.
So, the Time Complexity is O(n) and the Space Complexity is O(n).