# 35. Search Insert Position
# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
# You must write an algorithm with O(log n) runtime complexity.

from typing import List
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (right + left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
        # 主要是看当只有一个值的时候比如说[2]和0，[2]和3
        return left

    # 我的解答
    # def searchInsert(self, nums: List[int], target: int) -> int:
        # 二分法这个模版，找到最小的index使得 nums[index] >= target
        # 寻找区间为 [left, right)
        # left, right = 0, len(nums)
        # while left < right:
        #     mid = left + (right - left) // 2
        #     if nums[mid] >= target:
        #         right = mid
        #     else:
        #         left = mid + 1
        # return left

nums = [1,3,5,6]
target = 5
print(Solution().searchInsert(nums, target))
nums = [1,3,5,6]
target = 2
print(Solution().searchInsert(nums, target))
nums = [1,3,5,6]
target = 7
print(Solution().searchInsert(nums, target))
