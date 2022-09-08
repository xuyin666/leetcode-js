# 270. Closest Binary Search Tree Value
# Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from typing import Optional
class Solution:
    def closestValue(self, root: Optional[TreeNode], target: float) -> int:
        diff = float("inf")
        res = -1
        while root != None:
            if diff > abs(root.val - target):
                diff = abs(root.val - target)
                res = root.val
            if target == root.val:
                return root.val
            elif target > root.val:
                root = root.right
            else:
                root = root.left
        return res