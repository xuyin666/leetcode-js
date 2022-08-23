# 435. Non-overlapping Intervals
# Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

# 这道题思路是，用贪心算法， 先将这个interval排序 根据左边来排序
# 然后呢在选择和右端没有冲突的区间
# 选择最长没有冲突的区间
from typing import List
class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        if len(intervals) == 0:
            return 0
        intervals.sort(key=lambda x:x[0])
        preEnd = intervals[0][1]
        res = 0
        # 不需要担心最近的一个interval和之前的interval 相交，因为排序了的
        for i in range(1, len(intervals)):
            # 代表着已经有交集了，必须去掉一个
            if intervals[i][0] < preEnd:
                res = res + 1
                preEnd = min(preEnd, intervals[i][1])
            else:
                # 代表着没有交集，所以不用担心
                preEnd = intervals[i][1]
        return res

intervals = [[1,2],[2,3],[3,4],[1,3]]
print(Solution().eraseOverlapIntervals(intervals))
intervals = [[1,2],[1,2],[1,2]]
print(Solution().eraseOverlapIntervals(intervals))
intervals = [[1,2],[2,3]]
print(Solution().eraseOverlapIntervals(intervals))
