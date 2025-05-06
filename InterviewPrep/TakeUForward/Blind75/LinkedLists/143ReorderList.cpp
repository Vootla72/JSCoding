You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the lists nodes. Only nodes themselves may be changed.

Input: head = [1,2,3,4]
Output: [1,4,2,3]

////////////////////////sol////////////////////




Approach: The solution to this problem can be divided into three steps:

Find the midpoint and split the linked list into two halves from there.
Now, Reverse the second half of the list.
Now, connect both lists (A and B) such that  A0 -> B0 -> A1 -> B1 -> A2 -> B2 ….



/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* middle(ListNode* head) {
        ListNode* slowptr = head;
        ListNode* fastptr = head;
        while (fastptr && fastptr->next) {
            slowptr = slowptr->next;
            fastptr = fastptr->next->next;
        }
        return slowptr;
    }

    ListNode* reverse(ListNode* head) {
        ListNode* curr = head;
        ListNode* prev = NULL;
        ListNode* n;
        while (curr) {
            n = curr->next;
            curr->next = prev;
            prev = curr;
            curr = n;
        }
        return prev;
    }
    void reorderList(ListNode* head) {
        if (!head || !head->next)
            return;
        ListNode* mid = middle(head);
        ListNode* k = reverse(mid->next);
        mid->next = NULL;

        ListNode* c1 = head;
        ListNode* c2 = k;
        ListNode* f1 = NULL;
        ListNode* f2 = NULL;

        while (c1 != NULL and c2 != NULL) {
            f1 = c1->next; // hold the enxt pointers value of c1 n c2
            f2 = c2->next;

            c1->next = c2;
            c2->next = f1;

            c1 = f1;
            c2 = f2;
        }
    }
};


// middle - Tc : 0(n/2) Sc : 0(1)
// reverse - Tc : 0(n) Sc : 0(1)

Time Complexity (TC): O(n)
Space Complexity (SC): O(1)