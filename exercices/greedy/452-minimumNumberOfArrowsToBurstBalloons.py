# 452. Minimum Number of Arrows to Burst Balloons
# There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
# Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
# Given the array points, return the minimum number of arrows that must be shot to burst all balloons.

from typing import List

# 这道题思路是先把这个拍个序(按右边界排序)，然后用贪心算法
# 每次能射穿最多的气球，是当那点在某一个点的最右边
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key = lambda x:x[1])
        curr = points[0][1]
        res = 1
        print(points)
        for i in range(1, len(points)):
            # 如果第一次的最右边小于接下来的最左边
            # 则必须换一根箭了
            if curr < points[i][0]:
                res = res + 1
                curr = points[i][1]
        return res

points = [[10,16],[2,8],[1,6],[7,12]]
print(Solution().findMinArrowShots(points))
points = [[1,2],[3,4],[5,6],[7,8]]
print(Solution().findMinArrowShots(points))
points = [[1,2],[2,3],[3,4],[4,5]]
print(Solution().findMinArrowShots(points))
points = [[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]
print(Solution().findMinArrowShots(points))