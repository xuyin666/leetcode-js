# 1464. Maximum Product of Two Elements in an Array
# Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).

from typing import List
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        maxResult = 0
        while l < r :
            res = (nums[l] - 1) * (nums[r] - 1)
            maxResult = max(maxResult, res)
            if nums[l] <= nums[r]:
                l = l + 1
            else:
                r = r - 1
        return maxResult

nums = [3,4,5,2]
print(Solution().maxProduct(nums))
nums = [1,5,4,5]
print(Solution().maxProduct(nums))
nums = [3,7]
print(Solution().maxProduct(nums))
