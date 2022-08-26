# 567. Permutation in String
# Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
# In other words, return true if one of s1's permutations is the substring of s2.

from operator import truediv


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2): return False
        freqS1 = {}
        for ch in s1:
            freqS1[ch] = freqS1.get(ch, 0) + 1
        freqS2 = {}
        for i in range(len(s1)):
            freqS2[s2[i]] = freqS2.get(s2[i], 0) + 1
        totalCount = 0
        for key in freqS1:
            if key in freqS2 and freqS1[key] == freqS2[key]:
                totalCount = totalCount + 1
        if totalCount == len(freqS1):
            return True
        for i in range(len(s1), len(s2)):
            if s2[i] in freqS1 and s2[i] in freqS2 and freqS2[s2[i]] == freqS1[s2[i]]:
                totalCount = totalCount - 1
            freqS2[s2[i]] = freqS2.get(s2[i], 0) + 1
            if s2[i] in freqS1 and freqS2[s2[i]] == freqS1[s2[i]]:
                totalCount = totalCount + 1
            if s2[i - len(s1)] in freqS1 and freqS2[s2[i - len(s1)]] == freqS1[s2[i - len(s1)]] :
                totalCount = totalCount - 1
            freqS2[s2[i - len(s1)]] = freqS2[s2[i - len(s1)]] - 1
            if s2[i - len(s1)] in freqS1 and freqS2[s2[i - len(s1)]] == freqS1[s2[i - len(s1)]] :
                totalCount = totalCount + 1
            if totalCount == len(freqS1):
                return True
        return False

s1 = "ab"
s2 = "eidbaooo"
print(Solution().checkInclusion(s1, s2))
s1 = "ab"
s2 = "eidboaoo"
print(Solution().checkInclusion(s1, s2))
s1 = "adc"
s2 = "dcda"
print(Solution().checkInclusion(s1, s2))

