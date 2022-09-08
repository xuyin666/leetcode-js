# 162. Find Peak Element
# A peak element is an element that is strictly greater than its neighbors.
# Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
# You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
# You must write an algorithm that runs in O(log n) time.

from typing import List
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l = 0
        r = len(nums) - 1
        # mid 的值在 [l, r)之间摆动 
        # 如果r = len(nums)会出问题，因为mid最大为 len(nums) - 1
        # mid+1 会超出限制
        while l < r:
            mid = l + (r - l) // 2
            if nums[mid] > nums[mid + 1]:
                r = mid
            else:
                l = mid + 1
        # 满足nums[l] > nums[l + 1]的最小l值
        # 无论怎么更新l 都是大于左边的值
        # 所以 nums[l] > nums[l - 1]同时nums[l] > nums[l + 1]
        return l

nums = [1,2,3,1]
print(Solution().findPeakElement(nums))
nums = [1,2,1,3,5,6,4]
print(Solution().findPeakElement(nums))
