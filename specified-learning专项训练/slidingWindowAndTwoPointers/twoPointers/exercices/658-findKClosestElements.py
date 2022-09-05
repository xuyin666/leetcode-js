# 658. Find K Closest Elements
# Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
# An integer a is closer to x than an integer b if:
# |a - x| < |b - x|, or
# |a - x| == |b - x| and a < b

from typing import List
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        # 找到最接近x的k个元素，转换一下则变为 删除最不接近x的n-k个元素
        left = 0
        right = len(arr) - 1
        count = len(arr) - k
        while count > 0:
            if abs(arr[left] - x) > abs(arr[right] - x):
                left = left + 1
            else:
                right = right - 1
            count = count - 1
        return arr[left: right + 1]

arr = [1,2,3,4,5]
k = 4
x = 3
print(Solution().findClosestElements(arr, k, x))
arr = [1,2,3,4,5]
k = 4
x = -1
print(Solution().findClosestElements(arr, k, x))
