// 143. Reorder List
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


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
var reorderList = function(head) {
    // 先用快慢指针找到中点，主要 fast 必须从head.next出发
    // 这样才能通过slow分开list
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 第一部分的头
    let firstHead = head;
    // 第二部分的头
    let secondHead = slow.next;
    // 第二部分的尾部，避免成环
    slow.next = null;
    
    // 颠倒这个第二部分
    let prev = null;
    while (secondHead !== null) {
        let tmp = secondHead.next;
        secondHead.next = prev;
        prev = secondHead;
        secondHead = tmp;
    }
    let tail = prev; // 第二部分的头部

    // 连接第一部分和第二部分
    while (firstHead !== null && tail !== null) {
        let tmp = firstHead.next;
        firstHead.next = tail;
        let tmp1 = tail.next;
        tail.next = tmp;
        firstHead = tmp;
        tail = tmp1;
    }    
};

// 如果要摧毁一个链接，需要先把这个链接储存起来
// 1 2 3 4 => 1 4 3 2
// 1 2 3 4 5 => 1 5 2 4 3
// 这道题思路比较有趣，相当于集合了 快慢指针和颠倒列表这个思路
// 先用快慢指针这个思路 把 这个列表分为两半
// 后半段接着颠倒顺序
// 1 2 3 4 5 => 1 2 3   +   4 5 

let head = [1,2,3,4]
let head1 = [1,2,3,4,5]
console.log(reorderList(head));
console.log(reorderList(head1));