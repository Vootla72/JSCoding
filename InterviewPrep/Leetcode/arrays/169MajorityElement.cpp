169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?


*****************************************************************


//With SC = O(1);
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int size=nums.size();
        int votes=0;
        int count=0;
        int candidate=-1;
        for(int i=0;i<size;i++){
            if(votes==0){
                candidate=nums[i];
                votes=1;
            }
            else if(candidate==nums[i]){
                votes++;
            }
            else{
                votes--;
            }
        }
        //this check is required to see whether the candidate is majority or not
        // ex:[6,5,6,5,6,7]-- for this case, the above code majority element is 7
        for(int i=0;i<size;i++){
            if(candidate==nums[i]) count++;
        }
        if(count>size/2) return candidate;
        return -1;   
    }
};

//With SC=O(n)

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int size=nums.size();
        unordered_map<int,int>mp;
        int majEle=0;
        int maxTime=0;
        for(int i=0;i<size;i++){
            if(mp.find(nums[i])!=mp.end()){
                            mp[nums[i]]++;


            }
            else
            {
                mp[nums[i]]=1;
            }
        }
        for(auto i:nums){
            if(mp[i]>maxTime){
                maxTime=mp[i];
                majEle=i;
            }
        }
        return majEle;
        
    }
};