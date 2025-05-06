// Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
 

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 

// Follow up: Could you do this in one pass?



/// sol1 using 2 pass.. means traversing the list twice

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    if(!head) return null;
    let totalNoOfNodes =0;
    let curr= head;
    let prev;
    while(curr){
        totalNoOfNodes++;
        curr=curr.next;
    }

    if(n>totalNoOfNodes) return null;
    if(n==totalNoOfNodes) return head.next;
    curr=head;
    let i=0;
    while(i<(totalNoOfNodes-n-1)){
        curr=curr.next;
        i++;
    }
    prev=curr;
    curr=curr.next;
    prev.next=curr.next?? null;
    // delete(curr);


return head;
    
};



/// sol2 -- traversing the list only once


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    if(!head) return null;
    let dummy = new ListNode(-1);
    dummy.next = head;
    let slowptr= dummy;
    let fastptr = dummy;
    for(let i=0;i<=n;i++){
        if(!fastptr) return head; // If n is greater than the list length, return head
        fastptr=fastptr.next;
    }

    while(fastptr){
        slowptr = slowptr.next;
        fastptr = fastptr.next;
    }

    slowptr.next = slowptr.next.next;

    return dummy.next;
   
    
};