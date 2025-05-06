// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


var reverseList = function(head) {
    if(head===null) return null;
    let prev=null;
    let curr=head;
    let n;
    while(curr){
        n = curr.next;
        curr.next=prev;
        prev=curr;
        curr=n;
    }
    return prev;
    
};