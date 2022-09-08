# 153. Find Minimum in Rotated Sorted Array
# Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
# [4,5,6,7,0,1,2] if it was rotated 4 times.
# [0,1,2,4,5,6,7] if it was rotated 7 times.
# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
# Given the sorted rotated array nums of unique elements, return the minimum element of this array.
# You must write an algorithm that runs in O(log n) time.

from typing import List
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l = 0
        r = len(nums) - 1
        # mid 从 0 到 r - 1
        # 最小的l 使得 nums[l] < nums[r]
        while l < r:
            mid = l + (r - l)//2
            if nums[mid] < nums[r]:
                r = mid 
            else:
                l = mid + 1
        # 如果一直都没有找到 从 0 到r-1都没有的话 l变成r
        return nums[l]

nums = [3,4,5,1,2]
print(Solution().findMin(nums))
nums = [4,5,6,7,0,1,2]
print(Solution().findMin(nums))
nums = [11,13,15,17]
print(Solution().findMin(nums))
