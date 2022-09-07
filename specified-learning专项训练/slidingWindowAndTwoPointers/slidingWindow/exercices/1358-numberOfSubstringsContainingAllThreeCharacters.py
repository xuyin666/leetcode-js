# 1358. Number of Substrings Containing All Three Characters
# Given a string s consisting only of characters a, b and c.
# Return the number of substrings containing at least one occurrence of all these characters a, b and c.

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        l = 0
        r = 0
        count = 0
        freq = {}
        while r < len(s):
            freq[s[r]] = freq.get(s[r], 0) + 1
            while len(freq) == 3:
                # 从r到end 都包含3个
                count = count + len(s) - r
                freq[s[l]] = freq[s[l]] - 1
                if freq[s[l]] == 0:
                    del freq[s[l]]
                l = l + 1
            r = r + 1
        return count

s = "abcabc"
print(Solution().numberOfSubstrings(s))
s = "aaacb"
print(Solution().numberOfSubstrings(s))
s = "abc"
print(Solution().numberOfSubstrings(s))
