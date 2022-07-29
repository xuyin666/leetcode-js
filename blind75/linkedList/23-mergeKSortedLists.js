// 23. Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    
};

let lists = [[1,4,5],[1,3,4],[2,6]];
let lists1 = [];
let lists2 = [[]];
console.log(mergeKLists(lists));
console.log(mergeKLists(lists1));
console.log(mergeKLists(lists2));

