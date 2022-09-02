# 113. Path Sum II
# Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.
# A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from typing import Optional, List
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        self.res = []
        def dfs(root, sum, path):
            newPath = path.copy()
            if root == None:
                return
            sum = sum - root.val
            newPath.append(root.val)
            if root.left == None and root.right == None and sum == 0:
                self.res.append(newPath)
                return
            dfs(root.left, sum, newPath)
            dfs(root.right, sum, newPath)
        
        dfs(root, targetSum, [])
        return self.res
