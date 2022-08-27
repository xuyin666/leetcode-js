# 1229. Meeting Scheduler
# Given the availability time slots arrays slots1 and slots2 of two people and a meeting duration duration, return the earliest time slot that works for both of them and is of duration duration.
# If there is no common time slot that satisfies the requirements, return an empty array.
# The format of a time slot is an array of two elements [start, end] representing an inclusive time range from start to end.
# It is guaranteed that no two availability slots of the same person intersect with each other. That is, for any two time slots [start1, end1] and [start2, end2] of the same person, either start1 > end2 or start2 > end1.

from re import S
from turtle import right
from typing import List
class Solution:
    def minAvailableDuration(self, slots1: List[List[int]], slots2: List[List[int]], duration: int) -> List[int]:
        # 要想得到两个区间的端点，只需要分别取两段的最小值和最大值
        def getIntersection (slots1, slots2):
            return [max(slots1[0], slots2[0]), min(slots1[1], slots2[1])]
        first = 0
        second = 0
        slots1.sort()
        slots2.sort()
        while first < len(slots1) and second < len(slots2):
            inter = getIntersection(slots1[first], slots2[second])
            left = inter[0]
            right = inter[1]
            if right - left >= duration:
                return [left, left + duration]
            else:
                # 右端点更远的人不需要移动
                if slots1[first][1] < slots2[second][1]:
                    first = first + 1
                else:
                    second = second + 1
        return []

slots1 = [[10,50],[60,120],[140,210]]
slots2 = [[0,15],[60,70]]
duration = 8
print(Solution().minAvailableDuration(slots1, slots2, duration))
slots1 = [[10,50],[60,120],[140,210]]
slots2 = [[0,15],[60,70]]
duration = 12
print(Solution().minAvailableDuration(slots1, slots2, duration))
slots1 = [[10,50],[60,120],[140,210]]
slots2 = [[0,15],[60,70]]
duration = 12
print(Solution().minAvailableDuration(slots1, slots2, duration))
slots1 = [[10,60]]
slots2 = [[12,17],[21,50]]
duration = 8
print(Solution().minAvailableDuration(slots1, slots2, duration))