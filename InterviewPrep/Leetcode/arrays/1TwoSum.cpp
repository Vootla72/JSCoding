Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


**************************************


class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int>result;
        unordered_map<int,int>mp;
        for(int i=0;i<nums.size();i++){
            int numToFind= target-nums[i];
            if(mp.find(numToFind)!=mp.end()){
                result.push_back(mp[numToFind]);
                result.push_back(i);
            }
            //in else as well as in true case, we need to store the value in hashmap
            mp[nums[i]]=i;

        }
        return result;

        
    }
};


/////////////////////or//////////////////

// sol2:

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int>res;
        int n= nums.size();
        unordered_map<int,int>mp;
        for(int i=0;i<n;i++){
            int valToFind = target-nums[i];
            if(mp.find(valToFind)!=mp.end()){
                res.push_back(mp[valToFind]);
                res.push_back(i);

            }
            else{
                mp[nums[i]]=i;
            }
        }
        return res;
    }
};


// in js

const arr1= [2,7,11,15];
const target = 9;

const findIndices = (arr, target) => {
    let res = [];
    let mp = {};
    if(arr.length<=1) return res;

    arr.forEach((char, index) => {
        const valToFind = (target-char);
        if(mp[valToFind]){
            res.push(index,mp[valToFind]);

        }
        else {
            mp[valToFind]= index
        }

    })
    return res;

}

console.log("findIndices*****", findIndices(arr1, target))