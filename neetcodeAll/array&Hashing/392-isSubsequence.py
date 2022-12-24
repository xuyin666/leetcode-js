# 392. Is Subsequence
# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) > len(t): 
            return False
        indexS = 0
        indexT = 0
        while indexT < len(t) and indexS < len(s):
            if s[indexS] == t[indexT]:
                indexS = indexS + 1
            indexT = indexT + 1
        return indexS == len(s) 

s = "abc"
t = "ahbgdc"
print(Solution().isSubsequence(s, t))
s = "axc"
t = "ahbgdc"
print(Solution().isSubsequence(s, t))
