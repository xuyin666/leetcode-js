# 49. Group Anagrams
# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list)
        for str in strs:
            key = "".join(sorted(str))
            res[key].append(str)
        return list(res.values())

# 我们可以遍历这个strs，然后以它的sorted值为key，他自己为value

strs = ["eat","tea","tan","ate","nat","bat"]
print(Solution().groupAnagrams(strs))
strs = [""]
print(Solution().groupAnagrams(strs))
strs = ["a"]
print(Solution().groupAnagrams(strs))
