# 55. Jump Game
# You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
# Return true if you can reach the last index, or false otherwise.

from typing import List
class Solution:
    def canJump(self, nums: List[int]) -> bool:
    #  这道题比较好理解的方式是实时更新最远距离
    # rightMost 意味着当前能跳的最远距离
        rightMost = 0 + nums[0]
        for i in range(1, len(nums)):
            # 如果index大于当前能跳的最远距离证明超出边界了
            if (i <= rightMost):
                rightMost = max(rightMost, i + nums[i])
            else:
                return False
        return True

nums = [2,3,1,1,4]
print(Solution().canJump(nums))
nums = [3,2,1,0,4]
print(Solution().canJump(nums))