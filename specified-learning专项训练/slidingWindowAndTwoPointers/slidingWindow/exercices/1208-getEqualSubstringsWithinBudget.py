# 1208. Get Equal Substrings Within Budget
# You are given two strings s and t of the same length and an integer maxCost.
# You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| (i.e., the absolute difference between the ASCII values of the characters).
# Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. If there is no substring from s that can be changed to its corresponding substring from t, return 0.

class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        l, r = 0, 0
        totalCost = 0
        maxLen = 0
        while r < len(s):
            totalCost = totalCost + abs(ord(s[r]) - ord(t[r]))
            while totalCost > maxCost:
                totalCost = totalCost - abs(ord(s[l]) - ord(t[l]))
                l = l + 1
            maxLen = max(maxLen, r - l + 1)
            r = r + 1
        return maxLen

s = "abcd"
t = "bcdf"
maxCost = 3
print(Solution().equalSubstring(s, t, maxCost))
s = "abcd"
t = "cdef"
maxCost = 3
print(Solution().equalSubstring(s, t, maxCost))
s = "abcd"
t = "acde"
maxCost = 0
print(Solution().equalSubstring(s, t, maxCost))
