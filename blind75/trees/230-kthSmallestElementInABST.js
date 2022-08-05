// 230. Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */



// 思路是用 dfs，inorder search, (left root right)

// 下面的方法是用iterative
var kthSmallest = function(root, k) {
    let stack = [];
    let curr = root;
    let index = 0;
    while (stack.length !== 0 || curr !== null) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        index++;
        if (index === k) 
            return curr.val;
        curr = curr.right;
    }
};

// 下面的方法是用递归
// var kthSmallest = function(root, k) {
//     let resArr = inOrderDFS(root, []);
//     return resArr[k - 1];
// };

// let inOrderDFS = function (root, arr) {
//     if (root === null) return;
//     inOrderDFS(root.left, arr);
//     arr.push(root.val);
//     inOrderDFS(root.right, arr);
//     return arr;
// }

let root = [3,1,4,null,2], k = 1;
let root1 = [5,3,6,2,4,null,null,1], k1 = 3;
console.log(kthSmallest(root, k));
console.log(kthSmallest(root1, k1));
