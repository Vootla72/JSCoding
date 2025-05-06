// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:


// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
 

// Constraints:

// The number of nodes in the list is in the range [1, 5 * 104].
// 1 <= Node.val <= 1000



////sol//////////////


//Approach:

// 1.get the mid value
// 2. reverse from mid.next(reverse the secondhalf);
// 3. make the next of mid as null ( to make split);
// 4.now have two lists.. one points to head and second one is to reverse list return value;
// 5. to link in zig zag way
// 6.create extra two pointers.. whoich holds the next consecutive values of two lists;
//7.now point the list1.next = list2 &&  list2.next=f1;
//8now move the pointers of list1 & list2 to next values


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function reverseList(head) {
    let prev = null;
    let curr = head;
    let n;
    while (curr) {
        n = curr.next;
        curr.next = prev;
        prev = curr;
        curr = n;
    }
    return prev;
}


//function to find the mid ptr
function mid(head) {
    let slowptr = head;
    let fastptr = head;

    while (fastptr.next && fastptr.next.next) {
        slowptr = slowptr.next;
        fastptr = fastptr.next.next;
    }

    return slowptr;
}


var reorderList = function (head) {

    if (!head || !head.next) return head;

    let list1 = head;
    let midptr = mid(head);
    let list2 = reverseList(midptr);
    //make sure to call after reversing the list
    midptr.next = null;// half the list

    let f1 = null;
    let f2 = null;


    while (list1 && list2) {
        // hold the pointers of next consecutive values
        f1 = list1.next;
        f2 = list2.next;

        //now link the zigzag
        list1.next = list2;
        list2.next = f1;

        // now move the pointers of list1 & list2 to next elements
        list1 = f1;
        list2 = f2;

    }

};