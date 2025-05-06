Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]



////////////////sol/////////////

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
    ListNode* recursive(ListNode* curr, ListNode* prev) {
        if (!curr)
            return prev;
        ListNode* n = curr->next;
        curr->next = prev;
        return recursive(n, curr);
    }
    ListNode* reverseList(ListNode* head) {
        if (!head)
            return NULL;
        return recursive(head, NULL);
    }
};

Time Complexity (TC): O(n)
Space Complexity (SC): O(n)
O(n) due to the call stack in recursion.
If the solution were implemented iteratively, the space complexity could be reduced to O(1)

////////////////sol/////////////

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
    ListNode* reverseList(ListNode* head) {
        if (!head)
            return NULL;
        ListNode* prev = NULL;
        ListNode* curr = head;
        ListNode* n;
        while (curr) {
            n = curr->next;
            curr->next = prev;
            prev = curr;
            curr = n;
        }

        return prev;
    }
};

Time Complexity (TC): O(n)
Space Complexity (SC): O(1)