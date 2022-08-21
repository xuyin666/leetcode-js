# 56. Merge Intervals
# Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

from turtle import right
from typing import List
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        res = []
        intervals.sort(key = lambda x:x[0])
        left = intervals[0][0]
        right = intervals[0][1]
        for i in range(1, len(intervals)):
            if right >= intervals[i][0]:
                right = max(right, intervals[i][1])
            else:
                res.append([left, right])
                left = intervals[i][0]
                right = intervals[i][1]
        res.append([left, right])
        return res

intervals = [[1,3],[2,6],[8,10],[15,18]]
print(Solution().merge(intervals))
intervals = [[1,4],[4,5]]
print(Solution().merge(intervals))
