# 977. Squares of a Sorted Array
# Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
from typing import List
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        l = 0
        r = len(nums) - 1
        res = []
        while l <= r:
            leftVal = nums[l]**2
            rightVal = nums[r]**2
            if leftVal < rightVal:
                res.insert(0, rightVal)
                r = r - 1 
            else:
                res.insert(0, leftVal)
                l = l + 1
        return res

nums = [-4,-1,0,3,10]
print(Solution().sortedSquares(nums))
nums = [-7,-3,2,3,11]
print(Solution().sortedSquares(nums))
