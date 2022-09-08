# 658. Find K Closest Elements
# Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
# An integer a is closer to x than an integer b if:
# |a - x| < |b - x|, or
# |a - x| == |b - x| and a < b

from typing import List
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        def binarySearch(arr, target):
            l = 0
            r = len(arr)
            while l < r:
                mid = l + (r - l) // 2
                if arr[mid] >= target:
                    r = mid
                else:
                    l = mid + 1
            return l
        # 最小的index 使得 arr[index] >= target
        # [right, end] >= target [0,right - 1] < target
        right = binarySearch(arr, x)
        left = right - 1
        for _ in range(k):
            # 因为不可能同时left 和 right到达末尾
            if left < 0:
                right = right + 1
            elif right >= len(arr):
                left = left - 1
            elif x - arr[left] <= arr[right] - x:
                left = left - 1
            else:
                right = right + 1
        return arr[left + 1:right]

arr = [1,2,3,4,5]
k = 4
x = 3
# print(Solution().findClosestElements(arr, k, x))
arr = [1,2,3,4,5]
k = 4
x = -1
# print(Solution().findClosestElements(arr, k, x))
arr = [-2,-1,1,2,3,4,5]
k = 7
x = 3
print(Solution().findClosestElements(arr, k, x))
