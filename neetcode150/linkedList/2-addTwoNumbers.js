// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

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
    let dummy = new ListNode();
    let curr = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry === 1) {
        let val1, val2;
        if (l1 !== null) val1 = l1.val;
        else val1 = 0;
        if (l2 !== null) val2 = l2.val;
        else val2 = 0;

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let remain = sum % 10;
        let newNode = ListNode(remain);
        curr.next = newNode;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
        curr = curr.next;
    }
    return dummy.next;
}
// var addTwoNumbers = function(l1, l2) {
//     let copyL1 = l1;
//     let copyL2 = l2;
//     let dummy = new ListNode();
//     let curr = dummy;
//     let carry = 0;
//     while (copyL1 !== null && copyL2 !== null) {
//         let remaining = 0;
//         let sum = copyL1.val + copyL2.val + carry
//         remaining = sum % 10;
//         let newNode = new ListNode(remaining);
//         if (sum >= 10) {
//             carry = 1;
//         } else {
//             carry = 0;
//         }
//         curr.next = newNode;
//         curr = curr.next;
//         copyL1 = copyL1.next;
//         copyL2 = copyL2.next;
//     }
//     while (copyL1 !== null) {
//         let sum = copyL1.val + carry;
//         let newNode = new ListNode(sum % 10);
//         if (sum >= 10) {
//             carry = 1;
//         } else {
//             carry = 0;
//         }
//         curr.next = newNode;
//         curr = curr.next;
//         copyL1 = copyL1.next;
//     }
//     while (copyL2 !== null) {
//         let sum = copyL2.val + carry;
//         let newNode = new ListNode(sum % 10);
//         if (sum >= 10) {
//             carry = 1;
//         } else {
//             carry = 0;
//         }
//         curr.next = newNode;
//         curr = curr.next;
//         copyL2 = copyL2.next;
//     }
//     if (carry === 1) {
//         curr.next = new ListNode(carry);
//         curr = curr.next;
//     }
//     return dummy.next;
// };

let l1 = [2,4,3], l2 = [5,6,4];
let l3 = [0], l4 = [0];
let l5 = [9,9,9,9,9,9,9], l6 = [9,9,9,9];
console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers(l3, l4));
console.log(addTwoNumbers(l5, l6));
