// Minimum number of platforms required for a railway
// Problem Statement: We are given two arrays that represent the arrival and departure times of trains that stop at the platform. We need to find the minimum number of platforms needed at the railway station so that no train has to wait.

// Examples 1:

// Input: N=6, 
// arr[] = {9:00, 9:45, 9:55, 11:00, 15:00, 18:00} 
// dep[] = {9:20, 12:00, 11:30, 11:50, 19:00, 20:00}

// Output:3
// Explanation: There are at-most three trains at a time. The train at 11:00 arrived but the trains which had arrived at 9:45 and 9:55 have still not departed. So, we need at least three platforms here.







let arr = [900, 945, 955, 1100, 1500, 1800];
let dep = [920, 1200, 1130, 1150, 1900, 2000];


// Approach
// Sort the arrival and departure times
// Initialize two pointers, i and j, to 0
// Initialize a variable, platforms, to 0
// Iterate through the arrival and departure times
// If the arrival time is less than the departure time, increment the platforms count and move the arrival pointer
// get the maximum number of platforms needed
// If the departure time is less than the arrival time, decrement the platforms count and move the departure pointer
// Return the maximum number of platforms needed


function findMinPlatforms(arr,dep){
  let platforms =0;
  let maxPlatforms = 0;
  
  
  let i=0;
  let j=0;
  let m =arr.length;
  let n = dep.length;
  
  arr.sort((a,b)=> a-b);
  dep.sort((a,b)=> a-b);
  
  
  while(i<m && j<n) {
    if(arr[i]<=dep[j]){
      // if arrival happens before the departure happens then increase the __count__
      i++;
      
      platforms++;
      maxPlatforms = Math.max(platforms, maxPlatforms);
    }
    else {
      // if departure happens before the arrival, then we can decrease the platforoms __count__
      j++;
      platforms--;
    }
  }
  return maxPlatforms;
}


console.log("findMinPlatforms", findMinPlatforms(arr,dep))

// TC: O(nlogn) -- sorting  && O(n) -- traversing the array
// SC: O(1) -- constant space