# 795. Number of Subarrays with Bounded Maximum
# Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].
# The test cases are generated so that the answer will fit in a 32-bit integer.

from typing import List
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        # 可以把问题转换一下，用前缀和的思想，
        # 把这题改变为 最大值恰好为right的子数组个数
        # 然后再去求得最大值为left - 1的字数组个数
        def getMaxArray(val):
            l = 0
            r = 0
            count = 0
            while r < len(nums):
                # too big the right value
                if nums[r] > val:
                    l = r + 1
                else:
                    # it means that end with the nums[r]
                    count = count + r - l + 1
                r = r + 1
            return count
        return getMaxArray(right) - getMaxArray(left - 1)

nums = [2,1,4,3]
left = 2
right = 3
print(Solution().numSubarrayBoundedMax(nums, left, right))
nums = [2,9,2,5,6]
left = 2
right = 8
print(Solution().numSubarrayBoundedMax(nums, left, right))
