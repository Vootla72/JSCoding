You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.



/////////////sol///////////


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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* res=new ListNode(0);
        ListNode* res1=res;
        if (!list1 && !list2) return NULL;
        if(!list1) return list2;
        if(!list2) return list1;
        while(list1 && list2){
            if(list1->val <= list2->val){
            res->next=list1;
            list1=list1->next;
        }
            else{
            res->next=list2;
            list2=list2->next;
        }
        res=res->next;
        }
        if(list1) res->next=list1;
        if(list2) res->next=list2;
        return res1->next;
    }
};

TC: O(m+n)
SC: O(1)