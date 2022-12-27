# 1. Two Sum
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hashMap = {}
        for i in range(len(nums)):
            val = target - nums[i]
            if val in hashMap:
                return [hashMap[val], i]
            hashMap[nums[i]] = i


nums = [2,7,11,15]
target = 9
print(Solution().twoSum(nums, target))
nums = [3,2,4]
target = 6
print(Solution().twoSum(nums, target))
nums = [3,3]
target = 6
print(Solution().twoSum(nums, target))
