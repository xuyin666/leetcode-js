# 2385. Amount of Time for Binary Tree to Be Infected
# You are given the root of a binary tree with unique values, and an integer start. At minute 0, an infection starts from the node with value start.
# Each minute, a node becomes infected if:
# The node is currently uninfected.
# The node is adjacent to an infected node.
# Return the number of minutes needed for the entire tree to be infected.

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

import collections
from typing import Optional
from collections import defaultdict
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
        adjacent = defaultdict(list)
        def dfs(root):
            if root == None:
                return
            if root.left != None:
                adjacent[root.val].append(root.left.val)
                adjacent[root.left.val].append(root.val)
            if root.right != None:
                adjacent[root.val].append(root.right.val)
                adjacent[root.right.val].append(root.val)
            dfs(root.left)
            dfs(root.right)
        dfs(root)
        maxTime = -1
        dequeue = collections.deque()
        dequeue.append(start)
        visit = set()
        visit.add(start)
        while len(dequeue) > 0:
            for i in range(len(dequeue)):
                topElem = dequeue.popleft()
                for adj in adjacent[topElem]:
                    if adj not in visit:
                        visit.add(adj)
                        dequeue.append(adj)
            maxTime = maxTime + 1
        return maxTime

