# 3. Longest Substring Without Repeating Characters
# Given a string s, find the length of the longest substring without repeating characters.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l, r = 0, 0
        freq = {}
        maxLen = 0
        while r < len(s):
            freq[s[r]] = freq.get(s[r], 0) + 1
            while(max(freq.values()) > 1):
                freq[s[l]] = freq[s[l]] - 1
                l = l + 1
            maxLen = max(maxLen, r - l + 1)
            r = r + 1
        return maxLen

s = "abcabcbb"
print(Solution().lengthOfLongestSubstring(s))
s = "bbbbb"
print(Solution().lengthOfLongestSubstring(s))
s = "pwwkew"
print(Solution().lengthOfLongestSubstring(s))
