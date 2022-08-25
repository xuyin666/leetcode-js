# 658. Find K Closest Elements
# Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
# An integer a is closer to x than an integer b if:
# |a - x| < |b - x|, or
# |a - x| == |b - x| and a < b

from typing import List

class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        # 找到最近的k个元素，相当于要删除掉最远的n-k个元素
        # l = 0，r = len(arr) - 1
        # if x - arr[l] <= x - arr[r] l++ 值相同 删除后面的
        # 根据题意得出后面的更远
        l = 0
        r = len(arr) - 1
        nbCount = len(arr) - k
        while(nbCount > 0):
            if (abs(x - arr[l]) <= abs(x - arr[r])):
                r = r - 1
            else:
                l = l + 1
            nbCount = nbCount - 1
        res = []
        for i in range(l, l + k):
            res.append(arr[i])
        return res

arr = [1,2,3,4,5]
k = 4
x = 3
print(Solution().findClosestElements(arr, k, x))
arr = [1,2,3,4,5]
k = 4
x = -1
print(Solution().findClosestElements(arr, k, x))

