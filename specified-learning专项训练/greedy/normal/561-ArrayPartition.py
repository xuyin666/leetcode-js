# 561. Array Partition
# Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

from typing import List
# 这道题把nums排序 然后选择偶数项
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        res = 0
        for i in range(0, len(nums), 2):
            res = res + nums[i]
        return res
    
nums = [1,4,3,2]
print(Solution().arrayPairSum(nums))
nums = [6,2,6,5,1,2]
print(Solution().arrayPairSum(nums))
