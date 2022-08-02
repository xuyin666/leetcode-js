// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let fast = head;
    let slow = dummy;
    // fast need n node before slow
    while (n > 0) {
        fast = fast.next;
        n = n - 1;
    }

    // when fast arrive in the end 
    while(fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    let tmp = slow.next.next;
    slow.next = tmp;

    return dummy.next;
};

// 这道题的思路是用两个指针，一个在前，一个在后
// 前面的那个指针提前n个node后指针
// 前面的到达终点的时候，
// 后面的那个到达了len - n
// 需要用一个dummy来到达 len-n node 的前面一个

let head = [1,2,3,4,5], n = 2;
let head1 = [1], n1 = 1;
let head2 = [1,2], n2 = 1;
console.log(removeNthFromEnd(head, n));
console.log(removeNthFromEnd(head1, n1));
console.log(removeNthFromEnd(head2, n2));
