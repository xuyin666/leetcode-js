# 14. Longest Common Prefix
# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

from typing import List
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        res = ""
        for i in range(len(strs[0])):
            for str in strs:
                if i >= len(str) or strs[0][i] != str[i]:
                    return res
            res = res + strs[0][i]
        return res

strs = ["flower","flow","flight"]
print(Solution().longestCommonPrefix(strs))
strs = ["dog","racecar","car"]
print(Solution().longestCommonPrefix(strs))
