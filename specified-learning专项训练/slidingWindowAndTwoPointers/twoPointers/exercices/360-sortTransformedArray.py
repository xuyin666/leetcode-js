# 360. Sort Transformed Array
# Given a sorted integer array nums and three integers a, b and c, apply a quadratic function of the form f(x) = ax2 + bx + c to each element nums[i] in the array, and return the array in a sorted order.

from typing import List
class Solution:
    def sortTransformedArray(self, nums: List[int], a: int, b: int, c: int) -> List[int]:
        def getFuncVal(x):
            return a * x** 2 + b * x + c 
        res = []
        if a == 0:
            if b < 0:
                for i in range(len(nums)):
                    res.insert(0, getFuncVal(nums[i]))
                return res
            else:
                for i in range(len(nums)):
                    res.append(getFuncVal(nums[i]))
                return res
        l = 0
        r = len(nums) - 1
        while l <= r:
            lVal = getFuncVal(nums[l])
            rVal = getFuncVal(nums[r])
            if (a > 0):
                if lVal < rVal:
                    res.insert(0, rVal)
                    r = r - 1
                else:
                    res.insert(0, lVal)
                    l = l + 1
            elif(a < 0):
                if lVal > rVal:
                    res.append(rVal)
                    r = r - 1
                else:
                    res.append(lVal)
                    l = l + 1
        return res

nums = [-4,-2,2,4]
a = 1
b = 3
c = 5
print(Solution().sortTransformedArray(nums, a, b, c))
nums = [-4,-2,2,4]
a = -1
b = 3
c = 5
print(Solution().sortTransformedArray(nums, a, b, c))

