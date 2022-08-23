# 53. Maximum Subarray
# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# A subarray is a contiguous part of an array.

# 从第二位元素遍历 如果前面最大和为正数，则相加，不然就不加
# 最大值则为自己
from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxSum = [nums[0] for i in range(len(nums))]
        for i in range(1, len(nums)):
            if maxSum[i - 1] > 0:
                maxSum[i] = maxSum[i - 1] + nums[i]
            else:
                maxSum[i] = nums[i]
        return max(maxSum)

nums = [-2,1,-3,4,-1,2,1,-5,4]
print(Solution().maxSubArray(nums))
nums = [1]
print(Solution().maxSubArray(nums))
nums = [5,4,-1,7,8]
print(Solution().maxSubArray(nums))