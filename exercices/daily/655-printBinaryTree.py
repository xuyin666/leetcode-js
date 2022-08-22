# 655. Print Binary Tree
# Given the root of a binary tree, construct a 0-indexed m x n string matrix res that represents a formatted layout of the tree. The formatted layout matrix should be constructed using the following rules:
# The height of the tree is height and the number of rows m should be equal to height + 1.
# The number of columns n should be equal to 2height+1 - 1.
# Place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2]).
# For each node that has been placed in the matrix at position res[r][c], place its left child at res[r+1][c-2height-r-1] and its right child at res[r+1][c+2height-r-1].
# Continue this process until all the nodes in the tree have been placed.
# Any empty cells should contain the empty string "".
# Return the constructed matrix res.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def printTree(self, root: Optional[TreeNode]) -> List[List[str]]:
        def getHeight(root):
            if root == None:
                return -1
            return 1 + max(getHeight(root.left), getHeight(root.right))
        # 这道题主要是先确定这个list的rowLen 和 colLen
        height = getHeight(root) + 1
        width = 2**height - 1
        res = [["" for col in range(width)] for row in range(height)] 
        # 我们知道root，会填在中间
        # 然后再填两边的子节点，所以height要+1 left 或者 right要变化
        def fillArray(root, h, left, right):
            if h >= height or root == None or left > right:
                return
            mid = (left + right) // 2
            res[h][mid] = str(root.val)
            fillArray(root.left, h + 1, left, mid - 1)
            fillArray(root.right, h + 1, mid + 1, right)

        fillArray(root, 0, 0, width - 1)
        return res
