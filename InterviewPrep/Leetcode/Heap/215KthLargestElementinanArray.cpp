Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 

Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104





///////////////sol///////////////
1.With sorting


class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int n=nums.size();
        sort(nums.begin(),nums.end());
        return nums[n-k];
    }
};


/////////////sol////////////////
2.Without sorting -- to find the kth largest element is using min_heap
minheap holds the lowest number atthe top..finally it holds the kth largest element at the top with k elements


class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        int n=nums.size();
        priority_queue<int, vector<int>, greater<int>> min_heap(nums.begin(),nums.begin()+k);

        for(int i=k;i<n;i++){
            if(nums[i]>min_heap.top()){
                min_heap.pop();
                min_heap.push(nums[i]);
            }
        }
        return min_heap.top();


    }
};


priority_queue: This is a data structure that acts like a queue, but the elements are ordered based on priority. In this case, its a min-heap, meaning that the smallest element is at the front of the queue.

<int, vector<int>, greater<int>>: These are template arguments specifying the type of elements (int), 
the underlying container to be used (vector<int>), and the comparison function (greater<int>).
 In this case, greater<int> is a function object that defines a strict weak ordering comparison function for integers, which means it will order the elements in ascending order.

min_heap(nums.begin(), nums.begin() + k): This part constructs the priority queue min_heap using elements from the nums vector, starting from the beginning (nums.begin()) up to the kth element (nums.begin() + k). The constructor will populate the priority queue with these elements and maintain the order based on the greater<int> comparison function, effectively creating a min-heap with the smallest k elements from nums.
////////////////////////
intuition:

The main idea of this solution is to use a min-heap with a maximum size of k. By doing this, we ensure that the smallest of the k largest elements is always on the top of the heap.

Key Data Structures:
heap:
This is a min-heap containing the first k elements of nums. As we progress, we will modify this heap to ensure it contains the k largest elements.
Step-by-step Breakdown:
Initialization:

Create a heap with the first k elements of nums.
Transform this list into a min-heap.
Iterate through the List:

For each of the remaining elements in nums:
If the element is larger than the smallest element in the heap (i.e., the top of the heap):
Remove the top element from the heap.
Insert the current element into the heap.
Result:

After processing all elements in nums, the top of the heap will contain the kth largest element. Return this element.
Example:
Consider the list nums = [3,2,1,5,6,4] with k = 2.

Here's the evolution of the heap:

Initial State:

heap: [3,2]
After processing index 2 (element = 1):

heap remains unchanged as 1 is not larger than 2.
After processing index 3 (element = 5):

heap: [3,5]
After processing index 4 (element = 6):

heap: [5,6]
After processing index 5 (element = 4):

heap: [5,6]
The final state of the heap shows that the kth largest element is 5.

Complexity
Time Complexity: O(nlog⁡k)O(n \log k)O(nlogk)
Each of the n elements is processed once. However, heap operations take O(log⁡k)O(\log k)O(logk) time, leading to an overall complexity of O(nlog⁡k)O(n \log k)O(nlogk).

Space Complexity: O(k)O(k)O(k)
The solution uses a heap with a maximum of k elements.

Performance
This solution is both time and space-efficient. By focusing only on the k largest elements and using the properties of a heap, it ensures optimal runtime for a wide range of inputs. The controlled space usage ensures that even for large k, the memory overhead remains minimal.