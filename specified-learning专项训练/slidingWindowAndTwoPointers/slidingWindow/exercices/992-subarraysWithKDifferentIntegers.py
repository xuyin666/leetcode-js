# 992. Subarrays with K Different Integers
# Given an integer array nums and an integer k, return the number of good subarrays of nums.
# A good array is an array where the number of different integers in that array is exactly k.
# For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
# A subarray is a contiguous part of an array.

from typing import List
class Solution:
    def subarraysWithKDistinct(self, nums: List[int], k: int) -> int:
        # 这道题可以转换一下思路，恰好为2的不同值
        # 可以转换为最多为2的不同值 减去 最多为1的不同值
        def atMostK(nums, k):
            freq = {}
            l = 0
            r = 0
            count = 0
            while r < len(nums):
                freq[nums[r]] = freq.get(nums[r], 0) + 1
                while len(freq) > k:
                    freq[nums[l]] = freq[nums[l]] - 1
                    if freq[nums[l]] == 0:
                        del freq[nums[l]]
                    l = l + 1
                count = count + r - l + 1
                r = r + 1
            return count
        
        return atMostK(nums, k) - atMostK(nums, k - 1)

nums = [1,2,1,2,3]
k = 2
print(Solution().subarraysWithKDistinct(nums, k))
nums = [1,2,1,3,4]
k = 3
print(Solution().subarraysWithKDistinct(nums, k))
