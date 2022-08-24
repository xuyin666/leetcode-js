# 1004. Max Consecutive Ones III
# Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

from typing import List
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l, r = 0, 0
        nbZero = 0
        maxLen = 0
        while r < len(nums):
            if nums[r] == 0:
                nbZero = nbZero + 1
            while nbZero > k:
                if nums[l] == 0:
                    nbZero = nbZero - 1
                l = l + 1
            maxLen = max(maxLen, r - l + 1)
            r = r + 1
        return maxLen


nums = [1,1,1,0,0,0,1,1,1,1,0]
k = 2
print(Solution().longestOnes(nums, k))
nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
k = 3
print(Solution().longestOnes(nums, k))
