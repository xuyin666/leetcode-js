# 1493. Longest Subarray of 1's After Deleting One Element
# Given a binary array nums, you should delete one element from it.
# Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

from typing import List
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l, r = 0, 0
        nbZero = 0
        res = 0
        while r < len(nums):
            if nums[r] == 0:
                nbZero = nbZero + 1
            while nbZero >= 2:
                if nums[l] == 0:
                    nbZero = nbZero - 1
                l = l + 1
            res = max(res, r - l)
            r = r + 1
        return res

nums = [1,1,0,1]
print(Solution().longestSubarray(nums))
nums = [0,1,1,1,0,1,1,0,1]
print(Solution().longestSubarray(nums))
nums = [1,1,1]
print(Solution().longestSubarray(nums))
