# 45. Jump Game II
# Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
# Each element in the array represents your maximum jump length at that position.
# Your goal is to reach the last index in the minimum number of jumps.
# You can assume that you can always reach the last index.

from typing import List
class Solution:
    def jump(self, nums: List[int]) -> int:
        l = 0
        r = 0
        farthest = 0
        res = 0
        while(r < len(nums) - 1):
            for i in range(l, r + 1):
                farthest = max(farthest, i + nums[i])
            l = l + 1
            r = farthest
            res = res + 1
        return res


nums = [2,3,1,1,4]
print(Solution().jump(nums))
nums = [2,3,0,1,4]
print(Solution().jump(nums))
nums = [0]
print(Solution().jump(nums))
