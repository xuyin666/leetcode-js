// 572. Subtree of Another Tree

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.


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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// 需要考虑edge case 比如说 当subRoot为none时，subRoot 是root的subTree
// 当subRoot不为none时，然后root为none，返回false
// 然后再比较剩下是否为同一个树
// 如果是 则返回true
// 如果不是， 则继续看 root.left or root.right
var isSubtree = function(root, subRoot) {
    if (subRoot === null) return true;
    if (root === null) return false;
    if (isSameTree(root, subRoot)) return true;
    // to ensure the subRoot is the root.right subtree
    // or subRoot is the root.left subtree
    return isSubtree(root.right, subRoot) || 
            isSubtree(root.left, subRoot);
};

let isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    else if (p !== null && q !== null) {
        if (p.val === q.val)
            return isSameTree(p.left, q.left) 
                && isSameTree(p.right, q.right);
        return false;    
    } else 
        return false 
}

let root = [3,4,5,1,2], subRoot = [4,1,2];
let root1 = [3,4,5,1,2,null,null,null,null,0], subRoot1 = [4,1,2]
console.log(isSubtree(root, subRoot));
console.log(isSubtree(root1, subRoot1));
