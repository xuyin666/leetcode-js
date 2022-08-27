# 662. Maximum Width of Binary Tree
# Given the root of a binary tree, return the maximum width of the given tree.
# The maximum width of a tree is the maximum width among all levels.
# The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
# It is guaranteed that the answer will in the range of a 32-bit signed integer.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

from typing import Optional
import collections
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        # 如果用dfs来遍历的话，需要先leftNode 给标记
        freq = {}
        def dfs(root, height, index):
            if root == None: return 0
            if height not in freq:
                freq[height] = index
            leftMostIndex = freq[height]
            tmp = index - leftMostIndex + 1
            leftRes = dfs(root.left, height + 1, 2 * index)
            rightRes = dfs(root.right, height + 1, 2 * index + 1)
            return max(tmp, leftRes, rightRes)
        return dfs(root, 0, 1)


        # # 这题得给每个node 一个index,子node的值为 2 * 父node + 1
        # if root == None: return 0
        # dequeue = collections.deque()
        # dequeue.append([root, 1])
        # res = 1
        # while len(dequeue) > 0:
        #     lenDe = len(dequeue)
        #     tmpDe = collections.deque()
        #     for i in range(lenDe):
        #         topEle = dequeue[i]
        #         if topEle[0].left != None:
        #             tmpDe.append([topEle[0].left, 2 * topEle[1]])
        #         if topEle[0].right != None:
        #             tmpDe.append([topEle[0].right, 2 * topEle[1] + 1])
        #     res = max(res, dequeue[-1][1] - dequeue[0][1] + 1)
        #     dequeue = tmpDe
        # return res