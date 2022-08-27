# 1099. Two Sum Less Than K
# Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

from typing import List
class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        l = 0
        r = len(nums) - 1
        maxSum = -1
        nums.sort()
        while l < r:
            tmpSum = nums[l] + nums[r]
            if tmpSum >= k:
                r = r - 1
            elif tmpSum < k:
                maxSum = max(tmpSum, maxSum)
                l = l + 1
        return maxSum

nums = [34,23,1,24,75,33,54,8]
k = 60
# print(Solution().twoSumLessThanK(nums, k))
nums = [10,20,30]
k = 15
# print(Solution().twoSumLessThanK(nums, k))
nums = [254,914,110,900,147,441,209,122,571,942,136,350,160,127,178,839,201,386,462,45,735,467,153,415,875,282,204,534,639,994,284,320,865,468,1,838,275,370,295,574,309,268,415,385,786,62,359,78,854,944]
k = 200
print(Solution().twoSumLessThanK(nums, k))
