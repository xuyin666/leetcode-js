# 376. Wiggle Subsequence
# A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with one element and a sequence with two non-equal elements are trivially wiggle sequences.
# For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) alternate between positive and negative.
# In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences. The first is not because its first two differences are positive, and the second is not because its last difference is zero.
# A subsequence is obtained by deleting some elements (possibly zero) from the original sequence, leaving the remaining elements in their original order.
# Given an integer array nums, return the length of the longest wiggle subsequence of nums.

from typing import List
#  这道题的思路是 用两个数组 一个代表up，一个代表down
# 这两个数组代表 最后两个值往上或者往下
class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        down = [1] * len(nums)
        up = [1] * len(nums)
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                # 如果上升的话 down 不会变 up则为上一个down + 1
                up[i] = down[i - 1] + 1
                down[i] = down[i - 1]
            elif nums[i] < nums[i - 1]:
                down[i] = up[i - 1] + 1
                up[i] = up[i - 1]
            else:
                down[i] = down[i - 1]
                up[i] = up[i - 1]
        return max(down[len(nums) - 1], up[len(nums) - 1])

nums = [1,7,4,9,2,5]
print(Solution().wiggleMaxLength(nums))
nums = [1,17,5,10,13,15,10,5,16,8]
print(Solution().wiggleMaxLength(nums))
nums = [1,2,3,4,5,6,7,8,9]
print(Solution().wiggleMaxLength(nums))
