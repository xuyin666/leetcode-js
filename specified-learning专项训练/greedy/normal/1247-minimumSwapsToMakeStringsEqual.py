# 1247. Minimum Swaps to Make Strings Equal

# You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].
# Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

# 来统计xy yx 每个string中出现的次数
# xxyy 1次 就OK xy 或者 yx需要两次
class Solution:
    def minimumSwap(self, s1: str, s2: str) -> int:
        xyS1, yxS1 = 0, 0
        for i in range(len(s1)):
            if s1[i] != s2[i]:
                if s1[i] == 'x':
                    xyS1 = xyS1 + 1
                else:
                    yxS1 = yxS1 + 1
        if ((xyS1 + yxS1)% 2 == 1):
            return -1
        return (xyS1 // 2) + (yxS1 // 2) + (xyS1 % 2) * 2

s1 = "xx"
s2 = "yy"
print(Solution().minimumSwap(s1, s2))
s1 = "xy"
s2 = "yx"
print(Solution().minimumSwap(s1, s2))
s1 = "xx"
s2 = "xy"
print(Solution().minimumSwap(s1, s2))
s1 = "xxyyxyxyxx"
s2 = "xyyxyxxxyx"
print(Solution().minimumSwap(s1, s2))

