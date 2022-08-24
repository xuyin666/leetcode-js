# 487. Max Consecutive Ones II
# Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

from typing import List
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        l, r = 0, 0
        zeroCount = 0
        maxLen = 0
        while r < len(nums):
            if nums[r] == 0:
                zeroCount = zeroCount + 1
            while zeroCount > 1:
                if nums[l] == 0:
                    zeroCount = zeroCount - 1
                l = l + 1
            maxLen = max(maxLen, r - l + 1)
            r = r + 1
        return maxLen

nums = [1,0,1,1,0]
print(Solution().findMaxConsecutiveOnes(nums))
nums = [1,0,1,1,0,1]
print(Solution().findMaxConsecutiveOnes(nums))
