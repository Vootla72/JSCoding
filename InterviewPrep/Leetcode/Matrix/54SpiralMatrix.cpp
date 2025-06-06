Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100





///////////////sol////////////////

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        if(matrix.empty() || matrix[0].empty()) return {};

        int top =0, left = 0; // To store where we are at any moment
        int bottom = matrix.size()-1;
        int right = matrix[0].size()-1;

        vector<int> ans;      
        while(top<=bottom && left<=right) {
            for(int j=left; j<=right; j++) { //For row where top points to
                ans.push_back(matrix[top][j]);
            }
            top++;

            for(int i=top; i<=bottom; i++) {
                ans.push_back(matrix[i][right]);
            }
            right--;

            if(top<=bottom) {
                for(int j=right; j>=left; j--) {
                    ans.push_back(matrix[bottom][j]);
                }
                bottom--;
            }
            
            if(left<=right) {
                for(int i=bottom; i>=top; i--) {
                    ans.push_back(matrix[i][left]);
                }
                left++;
            }
            
        }

        return ans;
    }
};