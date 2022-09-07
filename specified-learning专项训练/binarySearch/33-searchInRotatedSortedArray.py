# 33. Search in Rotated Sorted Array
# There is an integer array nums sorted in ascending order (with distinct values).
# Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
# Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
# You must write an algorithm with O(log n) runtime complexity.

from typing import List
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums)
        while l < r:
            mid = l + (r - l) // 2
            if nums[mid] == target:
                return mid
            if nums[mid] > nums[l]:
                if nums[mid] > target and target >= nums[l]:
                    r = mid
                else:
                    l = mid + 1
            else:
                if nums[mid] < target and target <= nums[r - 1]:
                    l = mid + 1
                else:
                    r = mid
        return -1

nums = [4,5,6,7,0,1,2]
target = 0
# print(Solution().search(nums, target))
nums = [4,5,6,7,0,1,2]
target = 3
# print(Solution().search(nums, target))
nums = [1]
target = 0
# print(Solution().search(nums, target))
nums = [3, 1]
target = 3
print(Solution().search(nums, target))
