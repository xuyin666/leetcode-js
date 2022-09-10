# 719. Find K-th Smallest Pair Distance
# The distance of a pair of integers a and b is defined as the absolute difference between a and b.
# Given an integer array nums and an integer k, return the kth smallest distance among all the pairs nums[i] and nums[j] where 0 <= i < j < nums.length.

from typing import List
class Solution:
    def smallestDistancePair(self, nums: List[int], k: int) -> int:
        def getAtMostPair(nums, val):
            l = 0
            r = 1
            count = 0
            while r < len(nums):
                while l < r and nums[r] - nums[l] > val:
                    l = l + 1
                count = count + r - l
                r = r + 1                
            return count

        # 这道题可以转换一下思路
        # 题目的意思是 找出第k小的距离对
        # 我们可以转换为 找出 一个值 使得小于等于这个值的对数为k
        nums.sort()
        l = 0
        # 数对的距离最大也只可能为最大值减去最小值
        r = nums[-1] - nums[0]
        while l < r:
            mid = l + (r - l) // 2
            count = getAtMostPair(nums, mid)
            if count >= k:
                r = mid
            else:
                l = mid + 1
        return l

nums = [1,3,1]
k = 1
print(Solution().smallestDistancePair(nums, k))
nums = [1,1,1]
k = 2
print(Solution().smallestDistancePair(nums, k))
nums = [1,6,1]
k = 3
print(Solution().smallestDistancePair(nums, k))
