# 978. Longest Turbulent Subarray
# Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
# A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
# More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
# For i <= k < j:
# arr[k] > arr[k + 1] when k is odd, and
# arr[k] < arr[k + 1] when k is even.
# Or, for i <= k < j:
# arr[k] > arr[k + 1] when k is even, and
# arr[k] < arr[k + 1] when k is odd.

from typing import List
class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        # # up 代表着最后两个元素up的连续arr的最大值
        # up = [1] * len(arr)
        # # 1 代表着本身就是一个川流数组
        # down = [1] * len(arr)
        # for i in range(1, len(arr)):
        #     if (arr[i] > arr[i - 1]):
        #         up[i] = down[i - 1] + 1
        #         # down变为1代表之前的down就不连续了
        #         # down[i] = 1
        #     elif (arr[i] < arr[i - 1]):
        #         down[i] = up[i - 1] + 1
        #         # up[i] = 1
        # return max(max(up), max(down))
        # 这是滑动窗口的思路 
        res = 1
        left = 0
        right = 1
        while right < len(arr):    
            while (right - left >= 2) and (arr[right] - arr[right - 1]) * (arr[right - 1] - arr[right - 2]) >= 0:
                left = left + 1
            if (right - left < 2 and arr[right] == arr[right - 1]):
                left = left + 1
            res = max(res, right - left + 1)
            right = right + 1
        return res 

arr = [9,4,2,10,7,8,8,1,9]
print(Solution().maxTurbulenceSize(arr))
arr = [4,8,12,16]
print(Solution().maxTurbulenceSize(arr))
arr = [100]
print(Solution().maxTurbulenceSize(arr))
arr = [9, 9]
print(Solution().maxTurbulenceSize(arr))
arr = [100, 100, 100]
print(Solution().maxTurbulenceSize(arr))


