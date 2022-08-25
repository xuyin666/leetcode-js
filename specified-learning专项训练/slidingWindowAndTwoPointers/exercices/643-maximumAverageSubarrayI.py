# 643. Maximum Average Subarray I
# You are given an integer array nums consisting of n elements, and an integer k.
# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

from typing import List
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sumNum = 0
        for i in range(k):
            sumNum = sumNum + nums[i]
        tmp = sumNum
        for i in range (1, len(nums) - k + 1):
            tmp = tmp + nums[i + k - 1] - nums[i - 1]
            sumNum = max(sumNum, tmp)
        return sumNum / k


nums = [1,12,-5,-6,50,3]
k = 4
# print(Solution().findMaxAverage(nums, k))
nums = [5]
k = 1
# print(Solution().findMaxAverage(nums, k))
nums = [0,1,1,3,3]
k = 4
print(Solution().findMaxAverage(nums, k))

