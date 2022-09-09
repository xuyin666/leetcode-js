# 面试题 10.03. Search Rotate Array LCCI
# Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order. If there are more than one target elements in the array, return the smallest index.

from typing import List
class Solution:
    def search(self, arr: List[int], target: int) -> int:
        r = len(arr) - 1
        # 重新恢复二段性
        while arr[r] == arr[0] and r >= 0:
            r = r - 1
        l = 0
        tmpR = r
        # 找到拐点
        while l < r:
            mid = l + (r - l) // 2
            if arr[mid] <= arr[r]:
                r = mid
            else:
                l = mid + 1
        # 从0 到 l-1 都是大于 单调递增
        # 从l 到 r 倒是单调递增
        if target >= arr[l] and target <= arr[tmpR]:
            start = l
            end = tmpR
        else:
            start = 0
            end = l - 1
        while start < end:
            mid = start + (end - start) // 2
            if arr[mid] >= target:
                end = mid
            else:
                start = mid + 1
        if arr[start] != target:
            return -1
        else:
            return start


arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
target = 5
# print(Solution().search(arr, target))
arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
target = 11
# print(Solution().search(arr, target))
arr = [5,5,5,1,2,3,4,5]
target = 5
print(Solution().search(arr, target))

