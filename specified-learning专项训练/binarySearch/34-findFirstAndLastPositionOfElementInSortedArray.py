# 34. Find First and Last Position of Element in Sorted Array
# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
# If target is not found in the array, return [-1, -1].
# You must write an algorithm with O(log n) runtime complexity.


from typing import List
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0: return [-1, -1]
        def findMinLeft(nums, target):
            l = 0
            r = len(nums)
            while l < r:
                mid = l + (r - l) // 2
                if nums[mid] >= target:
                    r = mid
                else:
                    l = mid + 1
            return l
        start = findMinLeft(nums, target)
        if start == len(nums):
            return [-1, -1]
        elif nums[start] != target:
            return [-1, -1]
        end = findMinLeft(nums, target + 1) - 1
        return [start, end]


nums = [5,7,7,8,8,10]
target = 8
print(Solution().searchRange(nums, target))
nums = [5,7,7,8,8,10]
target = 6
print(Solution().searchRange(nums, target))
nums = []
target = 0
print(Solution().searchRange(nums, target))
