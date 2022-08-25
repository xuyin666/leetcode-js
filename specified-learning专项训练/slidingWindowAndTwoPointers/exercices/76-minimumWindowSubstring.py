# 76. Minimum Window Substring
# Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
# The testcases will be generated such that the answer is unique.
# A substring is a contiguous sequence of characters within the string.

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(s) < len(t):
            return ""
        freqS = {}
        freqT = {}
        for i in range(len(t)):
            freqT[t[i]] = freqT.get(t[i], 0) + 1
        count = 0
        l, r = 0, 0
        minLen = len(s) + 1
        minStr = s
        while r < len(s):
            freqS[s[r]] = freqS.get(s[r], 0) + 1
            if s[r] in freqT and freqS[s[r]] == freqT[s[r]]:
                count = count + 1
            while count == len(freqT):
                minLen = min(minLen, r - l + 1)
                if (minLen == r - l + 1):
                    minStr = s[l:r + 1]
                freqS[s[l]] = freqS[s[l]] - 1
                if s[l] in freqT and freqS[s[l]] + 1 == freqT[s[l]]:
                    count = count - 1
                l = l + 1
            r = r + 1
        if minLen == len(s) + 1:
            return ""
        return minStr



s = "ADOBECODEBANC"
t = "ABC"
print(Solution().minWindow(s, t))
s = "a"
t = "a"
print(Solution().minWindow(s, t))
s = "a"
t = "aa"
print(Solution().minWindow(s, t))
s = "aa"
t = "aa"
print(Solution().minWindow(s, t))
s = "a"
t = "b"
print(Solution().minWindow(s, t))
