// 21. Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.


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
var mergeTwoLists = function(list1, list2) {
    
};

let list1 = [1,2,4], list2 = [1,3,4];
let list1a = [], list2a = [];
let list1b = [], list2b = [0];

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists(list1a, list2a));
console.log(mergeTwoLists(list1b, list2b));

