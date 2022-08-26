# 438. Find All Anagrams in a String
# Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

from calendar import c
from typing import List
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        # 因为这个只会有小写的英文字母，
        # 所以其实可以考虑这个数列 [0] * 26
        if len(s) < len(p):
            return []
        freqS = [0] * 26
        freqP = [0] * 26
        for i in range(len(p)):
            freqS[ord(s[i])-ord('a')] = freqS[ord(s[i])-ord('a')] + 1
            freqP[ord(p[i])-ord('a')] = freqP[ord(p[i])-ord('a')] + 1
        res = []
        count = 0
        for i in range(26):
            if freqP[i] == freqS[i]:
                count = count + 1
        if count == 26:
            res.append(0)
        for r in range(len(p), len(s)):
            freqS[ord(s[r]) - ord('a')] = freqS[ord(s[r]) - ord('a')] + 1
            if freqS[ord(s[r]) - ord('a')] == freqP[ord(s[r]) - ord('a')]:
                count = count + 1
            if freqS[ord(s[r]) - ord('a')] - 1 == freqP[ord(s[r]) - ord('a')]:
                count = count - 1
            left = r - len(p)
            freqS[ord(s[left]) - ord('a')] = freqS[ord(s[left]) - ord('a')] - 1
            if freqS[ord(s[left]) - ord('a')] == freqP[ord(s[left]) - ord('a')]:
                count = count + 1
            if freqS[ord(s[left]) - ord('a')] + 1 == freqP[ord(s[left]) - ord('a')]:
                count = count - 1
            if count == 26:
                res.append(left + 1)
        return res

s = "cbaebabacd"
p = "abc"
print(Solution().findAnagrams(s, p))
s = "abab"
p = "ab"
print(Solution().findAnagrams(s, p))
s = "ababababab"
p = "aab"
print(Solution().findAnagrams(s, p))

s = "dinitrophenylhydrazinetrinitrophenylmethylnitramine"
p = "trinitrophenylmethylnitramine"
print(Solution().findAnagrams(s, p))
