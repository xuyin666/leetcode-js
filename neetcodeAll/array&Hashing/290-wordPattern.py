# 290. Word Pattern
# Given a pattern and a string s, find if s follows the same pattern.
# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        arr = s.split()
        if len(arr) != len(pattern):
            return False
        hashp2s = {}
        hashs2p = {}
        for i in range(len(pattern)):
            if (pattern[i] in hashp2s and hashp2s[pattern[i]] != arr[i]) or \
                (arr[i] in hashs2p and hashs2p[arr[i]] != pattern[i]):
                return False
            hashp2s[pattern[i]] = arr[i]
            hashs2p[arr[i]] = pattern[i]
        return True


pattern = "abba"
s = "dog cat cat dog"
print(Solution().wordPattern(pattern, s))
pattern = "abba"
s = "dog cat cat fish"
print(Solution().wordPattern(pattern, s))
pattern = "aaaa"
s = "dog cat cat dog"
print(Solution().wordPattern(pattern, s))
