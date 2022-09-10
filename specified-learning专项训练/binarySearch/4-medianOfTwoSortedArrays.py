# 4. Median of Two Sorted Arrays
# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
# The overall run time complexity should be O(log (m+n)).

from typing import List
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        return 0

nums1 = [1,3]
nums2 = [2]
print(Solution().findMedianSortedArrays(nums1, nums2))
nums1 = [1,2]
nums2 = [3,4]
print(Solution().findMedianSortedArrays(nums1, nums2))
