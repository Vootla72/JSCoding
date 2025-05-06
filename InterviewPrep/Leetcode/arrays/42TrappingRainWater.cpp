Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105


//sol:

class Solution {
public:
    int trap(vector<int>& height) {
        int n=height.size();
        int res=0;
        vector<int>left(n);
        vector<int>right(n);
        left[0]=height[0];
        right[n-1]=height[n-1];
        for(int i=1;i<n;i++){
            left[i]=max(left[i-1],height[i]);
        }
        for(int i=n-2;i>=0;i--){
            right[i]=max(right[i+1],height[i]);
        }
        for(int i=0;i<n;i++){
            int minVal=min(left[i],right[i]);
            res+=(minVal-height[i]);
        }
        return res;
    }
};



sol2:

class Solution {
public:
    //total water is trapped into the bars
    int trap(vector<int>& h) {
        int l=0,r=h.size()-1,lmax=INT_MIN,rmax=INT_MIN,ans=0;
        while(l<r){
            lmax=max(lmax,h[l]);
            rmax=max(rmax,h[r]);
            ans+=(lmax<rmax)?lmax-h[l++]:rmax-h[r--];
        }
        return ans;
    }
};


// sol2: Approach


Approach
instead of computing the left and right parts separately, we may think of some way to do it in one iteration.

Suppose we start from both the left and right end by maintaining two pointers left and right. If the smaller tower is at the left end, water trapped would be dependent on the tower's height in the direction from left to right. Similarly, if the tower at the right end is smaller, water trapped would be dependent on the tower's height in the direction from right to left. So we first calculate water trapped on the smaller tower among height[left] and height[right] and move the pointer associated with the smaller tower.

Loop will run till the left pointer doesn't cross the right pointer. In terms of an analogy, we can think of height[left] and height[right] as a wall of a partial container where we fix the higher end and flow water from the lower end.

Solution steps
We Initialise left and right pointers.
We also Initialise variables trappedWater, leftMax, and rightMax.

int ans = 0
int leftMax = INT_MIN, rightMax = INT_MIN
int left = 0, right = n - 1
Now we run a loop to scan the array i.e. while (left <= right)

If height[left] < height[right] and height[left] < leftMax: We calculate the amount of rainwater trapped between both towers and increase the left pointer. But if height[left] > leftMax: We update the value of leftMax and increase the left pointer.
if (height[left] < height[right])
{
    if (height[left] > leftMax)
        leftMax = height[left]
    else
        trappedWater = trappedWater + leftMax - height[left]
    left = left + 1
}
If height[left] > height[right]) and height[right] < rightMax: We calculate the amount of rainwater trapped between both towers and decrease the right pointer. But if height[right] > rightMax: We update the value of rightMax and decrease the right pointer.
if (height[left] > height[right])
{
    if (height[right] > rightMax)
        rightMax = height[right]
    else
        trappedWater = trappedWater + rightMax - height[right]
    right = right - 1
}
When left > right, then we exit the loop and return the value stored in the trappedWater.
Complexity
Time complexity:O(N)

Space complexity:O(1)

