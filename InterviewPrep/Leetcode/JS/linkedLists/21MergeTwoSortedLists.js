// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null;
    if (list1 && !list2) return list1;
    if (!list1 && list2) return list2;
    let dummy = new ListNode(-1);
    let res = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            res.next = list1;
            list1 = list1.next;
        }
        else {
            res.next = list2;
            list2 = list2.next;

        }
        res = res.next;

    }
    if (list1) res.next = list1;
    if (list2) res.next = list2;

    return dummy.next;

};

TC : O(m+n) // worst case to traverse whole while loop.. zig zag manner
SC: O(1) // using dummy node 