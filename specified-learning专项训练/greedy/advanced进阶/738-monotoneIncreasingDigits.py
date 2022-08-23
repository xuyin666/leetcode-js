# 738. Monotone Increasing Digits
# An integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.
# Given an integer n, return the largest number that is less than or equal to n with monotone increasing digits.

# 我们知道最大的单调递增
# 需要时如果后一位数字比前一位下
# 我们则需要把前一位数字减1 从当前数字开始 后面都是9
# 这是需要注意遍历顺序，从前往后遍历可能会出现 5 2 3 这样的情况
# 所以需要从后往前遍历
# 332 作为例子 需要变成 299
class Solution:
    def monotoneIncreasingDigits(self, n: int) -> int:
        if n < 10: return n
        digArr = [int(digit) for digit in str(n)]
        for i in range (len(digArr) - 2, -1, -1):
            if (digArr[i] > digArr[i + 1]):
                digArr[i] = digArr[i] - 1
                for j in range(i + 1, len(digArr)):
                    digArr[j] = 9
        res = ""
        for i in range(len(digArr)):
            res = res + str(digArr[i])
        return int(res)

n = 10
print(Solution().monotoneIncreasingDigits(n))
n = 1234
print(Solution().monotoneIncreasingDigits(n))
n = 332
print(Solution().monotoneIncreasingDigits(n))
n = 111
print(Solution().monotoneIncreasingDigits(n))
