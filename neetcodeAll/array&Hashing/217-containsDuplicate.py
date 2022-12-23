# 217. Contains Duplicate
# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


from typing import List

class Solution:
    # 先排序
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        for i in range(len(nums) - 1):
            if nums[i] == nums[i + 1]:
                return True
        return False

    # 使用hashset
    # def containsDuplicate(self, nums: List[int]) -> bool:
    #     hashSet = set()
    #     for num in nums:
    #         if num in hashSet:
    #             return True
    #         hashSet.add(num)
    #     return False

# 这道题可以有两种解决办法
# 一种是先排序，然后比较相邻的两个值，看是否相同

# 另一种是用hashset，先检查值是否在hashset中，
# 在hashset中就返回true，否则将这个值加入到hashset里面