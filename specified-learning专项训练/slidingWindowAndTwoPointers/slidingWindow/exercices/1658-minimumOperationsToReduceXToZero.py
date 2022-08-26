# 1658. Minimum Operations to Reduce X to Zero
# You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.
# Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

from typing import List
class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        # 这题可以转换为 最大长度的连续序列，和为sum - x
        sumNums = sum(nums)
        diff = sumNums - x
        if diff < 0:
            return -1
        if diff == 0:
            return len(nums)
        l, r = 0, 0
        tmp = 0
        maxLen = -1
        while r < len(nums):
            tmp = tmp + nums[r]
            while l <= r and tmp > diff:
                tmp = tmp - nums[l]
                l = l + 1
            if tmp == diff:
                maxLen = max(maxLen, r - l + 1)
            r = r + 1
        if maxLen == -1:
            return maxLen
        return len(nums) - maxLen

nums = [1,1,4,2,3]
x = 5
print(Solution().minOperations(nums, x))
nums = [5,6,7,8,9]
x = 4
print(Solution().minOperations(nums, x))
nums = [3,2,20,1,1,3]
x = 10
print(Solution().minOperations(nums, x))
