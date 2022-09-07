# 713. Subarray Product Less Than K
# Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

from turtle import right
from typing import List
class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        count = 0
        l = 0 
        r = 0
        mutli = 1
        while r < len(nums):
            mutli = mutli * nums[r]
            while mutli >= k and l <= r:
                mutli = mutli / nums[l]
                l = l + 1
            count = count + r - l + 1
            r = r + 1
        return count

nums = [10,5,1]
k = 100
print(Solution().numSubarrayProductLessThanK(nums, k))
nums = [1,2,3]
k = 0
print(Solution().numSubarrayProductLessThanK(nums, k))
