// 100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p !== null &&  q !== null) {
        if (p.val === q.val) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        return false;
    } else {
        if(p === null && q === null) return true;
        return false;
    }
};

let p = [1,2,3], q = [1,2,3];
let p1 = [1,2], q1 = [1,null,2];
console.log(isSameTree(p, q));
console.log(isSameTree(p1, q1));
