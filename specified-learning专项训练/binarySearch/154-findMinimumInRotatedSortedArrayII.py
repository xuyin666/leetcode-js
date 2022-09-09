# 154. Find Minimum in Rotated Sorted Array II
# Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
# [4,5,6,7,0,1,4] if it was rotated 4 times.
# [0,1,4,4,5,6,7] if it was rotated 7 times.
# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
# Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
# You must decrease the overall operation steps as much as possible.

from typing import List
class Solution:
    def findMin(self, nums: List[int]) -> int:
        # 这道题的思路是 两段分别单调递增，让后面一段小于nums[0]
        # 所以可以得出结论前一段 大于等于 nums[0], 后一段小于nums[0]
        r = len(nums) - 1
        while nums[r] == nums[0] and r >= 0:
            r = r - 1
        l = 0
        while l < r:
            mid = l + (r - l) // 2
            if nums[mid] <= nums[r]:
                r = mid 
            else:
                l = mid + 1
        return nums[l]

nums = [1,3,5]
# print(Solution().findMin(nums))
nums = [2,2,2,0,1]
# print(Solution().findMin(nums))
nums = [1,3,3]
print(Solution().findMin(nums))
