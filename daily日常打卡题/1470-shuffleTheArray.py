# 1470. Shuffle the Array
# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
# Return the array in the form [x1,y1,x2,y2,...,xn,yn].

from typing import List
class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        arr = [0] * (2*n)
        for i in range(n):
            arr[2 * i] = nums[i]
            arr[2 * i + 1] = nums[n + i]
        return arr

nums = [2,5,1,3,4,7]
n = 3
print(Solution().shuffle(nums, n))
nums = [1,2,3,4,4,3,2,1]
n = 4
print(Solution().shuffle(nums, n))
nums = [1,1,2,2]
n = 2
print(Solution().shuffle(nums, n))

