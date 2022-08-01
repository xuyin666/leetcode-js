// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    // to ensure that fast doesn't arrive the end
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    // it means that the fast pointer doesn't catch the slow pointer
    return false;
};

// 这道题 主要是运用快慢指针
// 一个指针快，一个指针慢
// 快指针一定会追上慢指针，O(n) n代表环的长度
// 没有追上则代表没有环，追上了则代表有环

let head = [3,2,0,-4], pos = 1;
let head1 = [1,2], pos1 = 0;
console.log(hasCycle(head));
console.log(hasCycle(head1));