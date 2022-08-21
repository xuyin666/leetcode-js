# 6159. Maximum Segment Sum After Removals
# You are given two 0-indexed integer arrays nums and removeQueries, both of length n. For the ith query, the element in nums at the index removeQueries[i] is removed, splitting nums into different segments.
# A segment is a contiguous sequence of positive integers in nums. A segment sum is the sum of every element in a segment.
# Return an integer array answer, of length n, where answer[i] is the maximum segment sum after applying the ith removal.
# Note: The same index will not be removed more than once.

# 思路是逆序遍历 然后 union and find
from typing import List
class Solution:
    def find(self, node):
        curr = node
        while (curr != self.parent[curr]):
            self.parent[curr] = self.parent[self.parent[curr]]
            curr = self.parent[curr]
        return curr
    
    def union(self, num1, num2):
        node1, node2 = self.find(num1), self.find(num2)
        if (node1 == node2):
            return self.sumMax[node1]
        if (self.sumMax[node1] > self.sumMax[node2]):
            self.parent[node2] = self.parent[node1]
            self.sumMax[node1] = self.sumMax[node1] + self.sumMax[node2]
        else:
            self.parent[node1] = self.parent[node2]
            self.sumMax[node2] = self.sumMax[node1] + self.sumMax[node2]

            

    def maximumSegmentSum(self, nums: List[int], removeQueries: List[int]) -> List[int]:
        self.sumMax = [0] * len(nums)
        self.parent = [0] * len(nums)
        self.isVisit = [False] * len(nums) 
        # 插入之前的最大子序列和
        self.res = [0] * len(nums)
        for i in range(len(nums)):
            self.parent[i] = i
            self.sumMax[i] = nums[i]
        maxVal = 0
        for i in range(len(removeQueries) - 1, -1, -1):
            r = removeQueries[i]
            self.isVisit[r] = True
            if (r + 1 < len(nums) and self.isVisit[r + 1]):
                self.union(r, r + 1)
            if (r - 1 >= 0 and self.isVisit[r - 1]):
                self.union(r, r - 1)
            self.res[i] = maxVal
            maxVal = max(maxVal, self.sumMax[self.find(r)])
        return self.res

nums = [1,2,5,6,1] 
removeQueries = [0,3,2,4,1]
print(Solution().maximumSegmentSum(nums, removeQueries))
nums = [3,2,11,1]
removeQueries = [3,2,1,0]
print(Solution().maximumSegmentSum(nums, removeQueries))
