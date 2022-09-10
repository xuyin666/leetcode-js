# 410. Split Array Largest Sum
# Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.
# Write an algorithm to minimize the largest sum among these m subarrays.


from typing import List
class Solution:
    def splitArray(self, nums: List[int], m: int) -> int:
        # 这个可以看作是怎么分割这个数组
        # 分开数组的和这个最小值可以 从 max(nums) 到 sum(nums)
        # 因为一定有一个数组会包含 max(nums), 最大也只能大到sum(nums)
        def getNumberGroupe(mid, nums):
            count = 1
            sum = 0
            for ele in nums:
                if sum + ele > mid:
                    count = count + 1
                    sum = ele
                else:
                    sum = sum + ele 
            return count
        l = max(nums)
        r = sum(nums)
        while l < r:
            mid = l + (r - l) // 2
            # 假如mid大 分割的组就更少
            # 最小的mid值 使得分的组 少于等于 m
            # 这说明mid太大了，所以分组的少
            if getNumberGroupe(mid, nums) <= m:
                r = mid
            else:
                l = mid + 1
        return l

nums = [7,2,5,10,8]
m = 2
print(Solution().splitArray(nums, m))
nums = [1,2,3,4,5]
m = 2
print(Solution().splitArray(nums, m))
nums = [1,4,4]
m = 3
print(Solution().splitArray(nums, m))
