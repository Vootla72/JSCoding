// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 
////////////////sol////////////////////



//  * Definition for singly-linked list.
//  * struct ListNode {
//  *     int val;
//  *     ListNode *next;
//  *     ListNode() : val(0), next(nullptr) {}
//  *     ListNode(int x) : val(x), next(nullptr) {}
//  *     ListNode(int x, ListNode *next) : val(x), next(next) {}
//  * };
//  */


class Solution {
public:
    int getCount(ListNode* head) {
        int count = 0;
        while (head) {
            count++;
            head = head->next;
        }
        return count;
    }
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if (!head)
            return NULL;
        ListNode* t1 = head;
        ListNode* p = head;

        int noOfNodes = getCount(head);
        if (n > noOfNodes)
            return NULL;
        ListNode* t = head;
        if (n == noOfNodes) {
            head = head->next;
            delete t;
        } else {
            int k = noOfNodes - n;

            for (int c = 1; c < k; c++) {
                t = t->next;
            }
            p = t->next;
            t->next = t->next->next;
            delete p;
        }
        return head;
    }
};

// Time Complexity (TC): O(n)
// Space Complexity (SC): O(1)