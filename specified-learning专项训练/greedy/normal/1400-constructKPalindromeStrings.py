# 1400. Construct K Palindrome Strings
# Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

from re import T

# 这道题主要是取决于有多少个奇数出现次数的字母
# 这些奇数出现次数的字母是最少的回文数
class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        if len(s) < k : return False
        freq = {}
        for i in range(len(s)):
            freq[s[i]] = freq.get(s[i], 0) + 1
        impairNb = 0
        for key in freq:
            if freq[key] % 2 == 1:
                impairNb = impairNb + 1
        if k >= impairNb and impairNb <= len(s):
            return True
        return False


s = "annabelle"
k = 2
print(Solution().canConstruct(s, k))
s = "leetcode"
k = 3
print(Solution().canConstruct(s, k))
s = "true"
k = 4
print(Solution().canConstruct(s, k))
