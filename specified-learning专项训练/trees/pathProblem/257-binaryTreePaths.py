# 257. Binary Tree Paths
# Given the root of a binary tree, return all root-to-leaf paths in any order.
# A leaf is a node with no children.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from typing import Optional, List
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        self.res = []
        def dfs(root, newStr):
            if root == None: 
                return
            if root.left == None and root.right == None:
                self.res.append(newStr + "" + str(root.val))
            dfs(root.left, newStr + str(root.val) + "->")
            dfs(root.right, newStr + str(root.val) + "->")

        dfs(root, "")
        return self.res