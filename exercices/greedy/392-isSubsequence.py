# 392. Is Subsequence
# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0
        j = 0
        while(i < len(s) and j < len(t)):
            if (s[i] == t[j]):
                i = i + 1
                j = j + 1
            else:
                j = j + 1
        if i == len(s):
            return True
        else:
            return False
s = "abc" 
t = "ahbgdc"
print(Solution().isSubsequence(s, t))
s = "axc"
t = "ahbgdc"
print(Solution().isSubsequence(s, t))
