# 287. Find the Duplicate Number
# Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
# There is only one repeated number in nums, return this repeated number.
# You must solve the problem without modifying the array nums and uses only constant extra space.

from typing import List
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # 这道题可以用抽屉原理，如果n个抽屉，n+1个物品
        # 则至少一个抽屉是装有一个以上的物品
        l = 1
        r = len(nums) - 1
        while l < r:
            mid = l + (r - l) // 2
            count = 0
            for i in range(len(nums)):
                if nums[i] <= mid:
                    count = count + 1
            # 有 count 个数的值处于 1 到 mid之间
            if count > mid:
                r = mid
            else:
                l = mid + 1
        return l


nums = [1,3,4,2,2]
print(Solution().findDuplicate(nums))
nums = [3,1,3,4,2]
print(Solution().findDuplicate(nums))
