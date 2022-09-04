# 16. 3Sum Closest
# Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
# Return the sum of the three integers.
# You may assume that each input would have exactly one solution.

from typing import List
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closetVal = float('inf')
        for i in range(len(nums) - 2):
            left = i + 1
            right = len(nums) - 1
            while left < right:
                total = nums[i] + nums[left] + nums[right]
                if total == target:
                    return total
                elif total < target:
                    left = left + 1
                else:
                    right = right - 1
                if abs(closetVal - target) > abs(total - target):
                    closetVal = total                
        return closetVal

nums = [-1,2,1,-4]
target = 1
print(Solution().threeSumClosest(nums, target))
nums = [0,0,0]
target = 1
print(Solution().threeSumClosest(nums, target))
nums = [1,1,1,0]
target = -100
print(Solution().threeSumClosest(nums, target))

