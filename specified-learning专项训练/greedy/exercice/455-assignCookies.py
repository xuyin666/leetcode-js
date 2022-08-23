# 455. Assign Cookies
# Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
# Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

# 这道题就是贪心算法，先满足胃口小的孩子，最后满足的孩子就是最多的

from typing import List
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        i, j = 0, 0
        res = 0
        while i < len(g) and j < len(s):
            if g[i] <= s[j]:
                i = i + 1
                j = j + 1
                res = res + 1
            else:
                j = j + 1
        return res

g = [1,2,3]
s = [1,1]
print(Solution().findContentChildren(g, s))
g = [1,2]
s = [1,2,3]
print(Solution().findContentChildren(g, s))

