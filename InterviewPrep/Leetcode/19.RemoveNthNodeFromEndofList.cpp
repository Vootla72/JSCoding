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
int getCount(ListNode* head){
    int count=0;
    while(head){
        count++;
        head=head->next;
    }
    return count;

}
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        if(!head) return NULL;
        ListNode *t1=head;
        ListNode *p=head;

        int noOfNodes=getCount(head);
        if(n>noOfNodes) return NULL;
            ListNode*t = head;
        if(n==noOfNodes){
            head=head->next;
            delete t;
        }
        else {
            int k=noOfNodes-n;
            //to remove the node from the beginning..c<n-1;
            for(int c=1;c<k;c++){
            //traverse the list jst before the node to be eliminated
                t=t->next;
            }
            p=t->next;
            t->next=t->next->next;
            delete p;
        }
        return head;
        
    }
};