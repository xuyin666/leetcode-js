// 23. Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let allMergeList;
    while(lists.length > 1) {
        allMergeList = [];
        for (let i = 0; i < lists.length; i = i + 2) {
            let pair = lists[i];
            let impair;
            if (i + 1 < lists.length)
                impair = lists[i + 1];
            else
                impair = null;
            allMergeList.push(mergeTwoLists(pair, impair));
        }
        lists = allMergeList;
    }
    if (lists.length === 0)
        return null;
    else 
        return lists[0];
};

// merge two lists in order
let mergeTwoLists = function (listA, listB) {
    let dummy = new ListNode();
    let tail = dummy;
    while (listA !== null && listB !== null) {
        if (listA.val < listB.val) {
            tail.next = listA;
            listA = listA.next;
        } else {
            tail.next = listB;
            listB = listB.next;
        }
        tail = tail.next;
    }
    if (listA === null) {
        tail.next = listB;
    } else if(listB === null) {
        tail.next = listA;
    }
    return dummy.next;
}

// 这个题思路是需要先两两合并
// 每次选两个list来合并
let lists = [[1,4,5],[1,3,4],[2,6]];
let lists1 = [];
let lists2 = [[]];
console.log(mergeKLists(lists));
console.log(mergeKLists(lists1));
console.log(mergeKLists(lists2));

