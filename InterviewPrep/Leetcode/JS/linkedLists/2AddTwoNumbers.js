// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.



//Approach
// Create a dummy node and a res pointer to build the result list.

// Initialize carry to 0.

// Use a while loop to traverse l1 and l2 && carry (if any one of these present)
//initialise for each iteration total to carry

// Add the values of l1 and l2 (if they exist) to total.

// Calculate the sum digit and the new carry.

// Create a new node with the sum digit and attach it to the result list.

// Move l1, l2, and res pointers forward.

// If there is a remaining carry after the loop, create a new node for it.

// Return the head of the result list (dummy.next).


//// sol//////

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let sums = new ListNode();
    let res = sums;
    let total = 0;
    let carry = 0;
    while (l1 || l2 || carry)
    {
        total = carry;
        if (l1)
        {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2)
        {
            total += l2.val;
            l2 = l2.next;
        }
        carry = Math.floor(total / 10);
        total = total % 10;
        sums.next = new ListNode(total);
        sums = sums.next;
    }
    return res.next;
};

// TC: O(n);
// SC : O(n)