# 209. Minimum Size Subarray Sum
# Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

from typing import List
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        if sum(nums) < target:
            return 0
        if sum(nums) == target:
            return len(nums)
        l, r = 0, 0
        tmpSum = 0
        res = len(nums) + 1
        while r < len(nums):
            tmpSum = tmpSum + nums[r]
            while tmpSum > target:
                res = min(res, r - l + 1)
                tmpSum = tmpSum - nums[l]
                l = l + 1
            if tmpSum == target:
                res = min(res, r - l + 1)
            r = r + 1
        if res == len(nums) + 1:
            return 0
        return res

target = 7
nums = [2,3,1,2,4,3]
print(Solution().minSubArrayLen(target, nums))
target = 4
nums = [1,4,4]
print(Solution().minSubArrayLen(target, nums))
target = 11
nums = [1,1,1,1,1,1,1,1]
print(Solution().minSubArrayLen(target, nums))
target = 11
nums = [1,2,3,4,5]
print(Solution().minSubArrayLen(target, nums))

