# 724. Find Pivot Index
# Given an array of integers nums, calculate the pivot index of this array.
# The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
# If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
# Return the leftmost pivot index. If no such index exists, return -1.

from typing import List
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        total = sum(nums)
        leftSum = 0
        for i in range(len(nums)):
            rightSum = total - leftSum - nums[i]
            if leftSum == rightSum:
                return i
            leftSum = leftSum + nums[i]
        return -1


nums = [1,7,3,6,5,6]
print(Solution().pivotIndex(nums))
nums = [1,2,3]
print(Solution().pivotIndex(nums))
nums = [2,1,-1]
print(Solution().pivotIndex(nums))
