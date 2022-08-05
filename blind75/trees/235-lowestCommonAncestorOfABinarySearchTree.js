// 235. Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 这道题看  这个root.val的值在哪
// 如果root的值 大于p 和 q 的值 证明root太大了 证明得找左边
// 如果root的值 小于p 和 q 的值 证明root太小了 证明得找右边
// 如果刚好一边一个则直接返回root


var lowestCommonAncestor = function(root, p, q) {
    while(root !== null) {
        if (root.val < p.val && root.val < q.val) 
            root = root.right;
        else if (root.val > p.val && root.val > q.val) 
            root = root.left;
        else 
            return root;
    }
};

let root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8;
let root1 = [6,2,8,0,4,7,9,null,null,3,5], p1 = 2, q1 = 4;
console.log(lowestCommonAncestor(root, p, q));
console.log(lowestCommonAncestor(root1, p1, q1));
