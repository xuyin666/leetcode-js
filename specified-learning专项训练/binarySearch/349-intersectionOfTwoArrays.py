# 349. Intersection of Two Arrays
# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

from typing import List
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1Set = set()
        nums2Set = set()
        for i in range(len(nums1)):
            nums1Set.add(nums1[i])
        for i in range(len(nums2)):
            nums2Set.add(nums2[i])
        res = []
        for ele in nums1Set:
            if ele in nums2Set:
                res.append(ele)
        return res

nums1 = [1,2,2,1]
nums2 = [2,2]
print(Solution().intersection(nums1, nums2))
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
print(Solution().intersection(nums1, nums2))

