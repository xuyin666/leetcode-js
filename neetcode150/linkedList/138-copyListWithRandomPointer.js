// 138. Copy List with Random Pointer
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // 这道题的思路是遍历两次
    // 第一次是用来创造那个hashmap，根据遍历的值来创造一个新的node
    // 然后把这个新的node放入到hashmap中，key则为旧的hashmap
    // 第二次遍历则是创造链接
    let curr = head;
    let hashMap = new Map();
    // for the edge case, if the oldNode is null, we need to return null
    hashMap.set(null, null);
    while(curr !== null) {
        let newNode = new Node(curr.val);
        hashMap.set(curr, newNode);
        curr = curr.next;
    }

    curr = head;
    while (curr !== null) {
        let newNode = hashMap.get(curr);
        newNode.next = hashMap.get(curr.next);
        newNode.random = hashMap.get(curr.random);
        curr = curr.next;
    }
    return hashMap.get(head);
};

let head = [[7,null],[13,0],[11,4],[10,2],[1,0]];
let head1 = [[1,1],[2,1]];
let head2 = [[3,null],[3,0],[3,null]];
console.log(copyRandomList(head));
console.log(copyRandomList(head1));
console.log(copyRandomList(head2));
