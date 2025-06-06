Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tails next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.



///////////////////////////////////////

Its a Hair and Tortoise algorithm

////////////////sol////////////////////

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode* head) {
        if (!head || !head->next)
            return false;
        ListNode* slowptr = head;
        ListNode* fastptr = head;
        while (fastptr && fastptr->next) {
            slowptr = slowptr->next;
            fastptr = fastptr->next->next;
            if (slowptr == fastptr) {
                return true;
            }
        }

        return false;
    }
};

TC : O(n)
SC : O(1)