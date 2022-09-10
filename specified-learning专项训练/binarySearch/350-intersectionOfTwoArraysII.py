# 350. Intersection of Two Arrays II
# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

from typing import List
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2.sort()
        index1 = 0
        index2 = 0
        res = []
        while index1 < len(nums1) and index2 < len(nums2):
            if nums1[index1] == nums2[index2]:
                res.append(nums1[index1])
                index1 = index1 + 1
                index2 = index2 + 1
            elif nums1[index1] < nums2[index2]:
                index1 = index1 + 1
            else:
                index2 = index2 + 1
        return res


nums1 = [1,2,2,1]
nums2 = [2,2]
print(Solution().intersect(nums1, nums2))
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
print(Solution().intersect(nums1, nums2))
