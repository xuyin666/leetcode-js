# 4. Median of Two Sorted Arrays
# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
# The overall run time complexity should be O(log (m+n)).

from typing import List
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        A = nums1
        B = nums2
        total = len(A) + len(B)
        half = total // 2
        if len(A) > len(B):
            A, B = B, A
        # A 的长度短于 B
        l = 0
        r = len(A) - 1
        while True:
            i = l + (r - l) // 2 # 取得A的中点
            # 比方说  len(A) = 5 len(B) = 3
            # i = 1 j 应该也等于 1
            j = (half - 1) - i - 1 # B 的对应点
            ALeft = A[i] if i >= 0 else float("-inf")
            ARight = A[i+ 1] if i + 1 < len(A) else float("inf")
            BLeft = B[j] if j >= 0 else float("-inf")
            BRight = B[j + 1] if j + 1 < len(B) else float("inf")
            if BLeft <= ARight and BRight >= ALeft:
                if total % 2 == 1:
                    return min(BRight, ARight)
                else:
                    return (max(ALeft, BLeft) + min(BRight, ARight)) / 2
            elif BRight < ALeft:
                r = i - 1
            else:
                l = i + 1

nums1 = [1,3]
nums2 = [2]
print(Solution().findMedianSortedArrays(nums1, nums2))
nums1 = [1,2]
nums2 = [3,4]
print(Solution().findMedianSortedArrays(nums1, nums2))
nums1 = []
nums2 = [1]
print(Solution().findMedianSortedArrays(nums1, nums2))

