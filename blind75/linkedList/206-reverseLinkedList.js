// 206. Reverse Linked List
// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 递归的话
    // 考虑几种情况，第一 head === null 第二 head.next === null
    // 第一种情况直接返回null
    if (head === null) return head; 

    let newHead = head;

    if (head.next !== null) {
        // newHead 代表着之后的返回值
        // reverse head之后的listNode
        newHead = reverseList(head.next);
        // head.next 是 当前的下个node T
        // T.next = head 代表着倒叙
        head.next.next = head;
        // head.next 如果不变会成环
        head.next = null;
    }

    // 第二种情况 直接返回head
    return newHead;
}


// var reverseList = function(head) {
//     // iterative
//     let prev = null;
//     let curr = head;
//     while (curr != null) {
//         let tmp = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = tmp;
//     }
//     return prev;
// };


let head = [1,2,3,4,5]
let head1 = [1,2];
let head2 = [];
console.log(reverseList(head));
console.log(reverseList(head1));
console.log(reverseList(head2));
