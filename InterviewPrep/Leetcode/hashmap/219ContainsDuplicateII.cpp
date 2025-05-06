Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105


////////////////////////////////


class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        int n = nums.size();
        unordered_map<int,int>mp;
        for(int i=0;i<n;i++){
            if(mp.find(nums[i])!=mp.end()){
                if((i-mp[nums[i]])<=k)
                return true;
            }
            mp[nums[i]]=i;
        }
        return false; 
    }
};






sol2
/////////////////////////////////


Time and Space Complexity => O(n), where n is the size of nums

class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        unordered_map<int,int> mp;
        int n = nums.size();
        
        for(int i=0; i<n; i++)
        {
            // mp.count() will tell whatever ith index that I want, have I seen it before?
            if(mp.count(nums[i]))
            {
                // if I have already seen this number, then check for condition abs(i - j) <= k
                if(abs(i-mp[nums[i]])<=k)
                    return true;
            }
            // if I have not seen this number before, insert the number with its position in the map
            // and if the number is already present in the map, then update the position of that number
            mp[nums[i]] = i;
        }
        // after the complete traversal, if we don't find a pair to satisfy the condition, return false
        return false;
    }
};




//Note:
mp[4]=2;
but key = 4 occurs only one time in mao, then the mp.count(4) value is 1 
if the key is not present in the map,then mp.count(key) is 0


Yes, that's correct. mp.count(4) returns the number of occurrences of the key 4 in the map mp.
In this case, it would return 1 because the key 4 is present once in the map mp. If the key were not present, it would return 0.


Please note if the value is not <=k then if index increase, the the difference will be more ..
so update the value of the respective key with the new index
