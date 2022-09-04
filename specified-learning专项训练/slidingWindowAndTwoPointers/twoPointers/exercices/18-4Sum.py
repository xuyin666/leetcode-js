# 18. 4Sum
# Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
# 0 <= a, b, c, d < n
# a, b, c, and d are distinct.
# nums[a] + nums[b] + nums[c] + nums[d] == target
# You may return the answer in any order.

from typing import List
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        nums.sort()
        i = 0
        while (i < len(nums) - 3):
            j = i + 1
            while j < len(nums) - 2:
                left = j + 1
                right = len(nums) - 1
                while left < right:
                    total = nums[i] + nums[j] + nums[left] + nums[right]
                    if total == target:
                        res.append([nums[i], nums[j], nums[left], nums[right]])
                        left = left + 1
                        while left < len(nums) and nums[left - 1] == nums[left]:
                            left = left + 1
                    elif total > target:
                        right = right - 1
                    else:
                        left = left + 1
                j = j + 1
                while(j < len(nums) and nums[j - 1] == nums[j]):
                    j = j + 1
            i = i + 1
            while(i < len(nums) and nums[i - 1] == nums[i]):
                i = i + 1
        return res

nums = [1,0,-1,0,-2,2]
target = 0
print(Solution().fourSum(nums, target))
nums = [2,2,2,2,2]
target = 8
print(Solution().fourSum(nums, target))
