# 205. Isomorphic Strings
# Given two strings s and t, determine if they are isomorphic.
# Two strings s and t are isomorphic if the characters in s can be replaced to get t.
# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        maps2t = {}
        mapt2s = {}
        for i in range(len(s)):
            if s[i] not in maps2t:
                maps2t[s[i]] = t[i]
            else:
                # 判断这个映射是否是唯一的
                if maps2t[s[i]] != t[i]:
                    return False
            if t[i] not in mapt2s:
                mapt2s[t[i]] = s[i]
            else:
                if mapt2s[t[i]] != s[i]:
                    return False
        return True

# 这道题的思路
# 用两个hashmap 分别记录映射从s到t和从t到s
# 然后再检查是否映射已经存在过了


s = "egg"
t = "add"
print(Solution().isIsomorphic(s, t))
s = "foo"
t = "bar"
print(Solution().isIsomorphic(s, t))
s = "paper"
t = "title"
print(Solution().isIsomorphic(s, t))
