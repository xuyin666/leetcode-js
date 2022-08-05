// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    let firstElem = preorder[0];
    let root = new TreeNode(firstElem);
    let mid = inorder.indexOf(firstElem);
    let leftPreorder = preorder.slice(1, mid + 1)
    let leftInorder = inorder.slice(0, mid)
    let rightPreorder = preorder.slice(mid + 1, preorder.length);
    let rightInorder = inorder.slice(mid + 1, inorder.length);
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);
    return root;
};

// 可以看第一个例子 preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 观察可以发现 在 preorder里面 第一个值就是 root 然后呢在 in order里面的index 把数组分成两份
// 在 inorder 里面右边的是右子树， 在 inorder 里面左边的是左子树

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
let preorder1 = [-1], inorder1 = [-1];
console.log(buildTree(preorder, inorder));
console.log(buildTree(preorder1, inorder1));
