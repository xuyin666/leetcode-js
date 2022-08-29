# 845. Longest Mountain in Array
# You may recall that an array arr is a mountain array if and only if:
# arr.length >= 3
# There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
# arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
# arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
# Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

from typing import List
class Solution:
    def longestMountain(self, arr: List[int]) -> int:
        # 弄两个数组，一个代表down的最大值，一个代表up的最大值
        # 只有当up[i] and down[i] > 1时 i才能作为山顶
        if len(arr) < 3: return 0
        up = [1] * len(arr)
        down = [1] * len(arr)
        for i in range (1, len(arr)):
            if arr[i] > arr[i - 1]:
                up[i] = up[i - 1] + 1
        for i in range(len(arr) - 2, -1, -1):
            if arr[i] > arr[i + 1]:
                down[i] = down[i + 1] + 1
        res = 0
        for i in range(len(arr)):
            if up[i] != 1 and down[i] != 1:
                res = max(res, up[i] + down[i] - 1)
        return res
        # if len(arr) < 3: return 0
        # maxLen = -1
        # for i in range(len(arr) - 1):
        #     l = i - 1
        #     r = i + 1
        #     while arr[l] < arr[l + 1] and arr[r - 1] > arr[r]:
        #         while l >= 0 and arr[l] < arr[l + 1]:
        #             l = l - 1
        #         while r < len(arr) and arr[r - 1] > arr[r]:
        #             maxLen = max(maxLen, r - l)
        #             r = r + 1
        # if maxLen == -1:
        #     return 0
        # return maxLen

arr = [2,1,4,7,3,2,5]
print(Solution().longestMountain(arr))
arr = [0,1,2,3,4,5,4,3,2,1,0]
print(Solution().longestMountain(arr))
arr = [2,2,2]
print(Solution().longestMountain(arr))
