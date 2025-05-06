Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109


//////sol/////////

class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> set;
        //here set only used in order to store the unique elements
        int mini=INT_MAX;
        int l=nums.size();
        for(int i=0;i<l;i++)
        {
            set.insert(nums[i]);
        }
        int count=1,finalcount=0;
        for(auto it:set)
        {
            int num=it;
            count=1;
            //if the prev element is present, so this is not the starting point..so continue
            if(set.find(num-1)!=set.end())continue;
            while(true){
                if(set.find(num+1)!=set.end()){
                    //here num++ acts as a postfix
                    num++;
                    count++;
                }else
                break;
            }
            finalcount=max(finalcount,count);
        }
        return finalcount;
    }
};