# 344. Reverse String
# Write a function that reverses a string. The input string is given as an array of characters s.
# You must do this by modifying the input array in-place with O(1) extra memory.

from typing import List
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        l = 0
        r = len(s) - 1
        while l < r:
            s[l], s[r] = s[r], s[l]
            l = l + 1
            r = r - 1

s = ["h","e","l","l","o"]
print(Solution().reverseString(s))
s = ["H","a","n","n","a","h"]
print(Solution().reverseString(s))
