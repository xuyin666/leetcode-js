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
    let dummy = new ListNode();
    let tail = dummy;
    let head1 = list1;
    let head2 = list2;

    while(head1 !== null && head2 !== null) {
        if (head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
        } else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }

    if (head1 === null) 
        tail.next = head2;
    else if (head2 === null)
        tail.next = head1;
    return dummy.next;
};

// 这道题思路是 首先得有一个dummyNode 就是一个空的node
// 避免考虑那些特殊情况
// 然后再来遍历两个list，谁大选谁
// 最后当一个list到最后了只需要再拼接剩下的


let list1 = [1,2,4], list2 = [1,3,4];
let list1a = [], list2a = [];
let list1b = [], list2b = [0];

console.log(mergeTwoLists(list1, list2));
console.log(mergeTwoLists(list1a, list2a));
console.log(mergeTwoLists(list1b, list2b));

