# 687. Longest Univalue Path
# Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.
# The length of the path between two nodes is represented by the number of edges between them.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from typing import Optional
class Solution:
    def longestUnivaluePath(self, root: Optional[TreeNode]) -> int:
        self.maxVal = 0
        def dfs(root):
            # 通过root的最大length
            if root == None:
                return 0
            leftVal = dfs(root.left)
            rightVal = dfs(root.right)
            if root.left != None and root.val == root.left.val:
                leftVal = 1 + leftVal
            else:
                # 因为如果他是父节点跟子节点值不一样，则不需要通过root的leftVal值为0
                leftVal = 0
            if root.right != None and root.val == root.right.val:
                rightVal = 1 + rightVal
            else:
                rightVal = 0
            self.maxVal = max(self.maxVal, leftVal + rightVal)
            return max(leftVal, rightVal)
        dfs(root)
        return self.maxVal
    
        
