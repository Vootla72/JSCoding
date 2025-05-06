// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Approach
// Simply, we calculate max area of rectangle then return it. Formula is width * height;
// 1. l =0 ; r=n-1;
// 2. calculate the arrea untill l<r;
// 3. For each iteration , cal the current area and update the max Area;
// 4.then move l or r based on which one height is lower.. hint remember: hold the max Height bar as we can get the max Area in future;
// 5. when the l<r loop breaks, return the maxArea;

// Intuition:

// Using two pointer to get width easily and improve time complexity is O(n)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxArea = 0;

  while (l < r) {
    let minHeight = Math.min(height[l], height[r]);
    maxArea = Math.max(maxArea, minHeight * (r - l));
    // keep the maxHeight pointer as it is as we can get the maxArea with this
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
};

TC: O(n);
SC: O(1);
