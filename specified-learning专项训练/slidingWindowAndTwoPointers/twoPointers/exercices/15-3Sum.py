# 15. 3Sum
# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# Notice that the solution set must not contain duplicate triplets.

from typing import List
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        i = 0
        while i < len(nums):
            l = i + 1
            r = len(nums) - 1
            while l < r:
                tmpSum = nums[i] + nums[l] + nums[r]
                if tmpSum == 0:
                    res.append([nums[i], nums[l], nums[r]])
                    l = l + 1
                    while l < len(nums) and nums[l] == nums[l - 1]:
                        l = l + 1
                elif tmpSum > 0:
                    r = r - 1
                else:
                    l = l + 1
            i = i + 1
            while i < len(nums) and nums[i] == nums[i - 1]:
                i = i + 1
        return res

nums = [-1,0,1,2,-1,-4]
print(Solution().threeSum(nums))
nums = [0,1,1]
print(Solution().threeSum(nums))
nums = [0,0,0]
print(Solution().threeSum(nums))
