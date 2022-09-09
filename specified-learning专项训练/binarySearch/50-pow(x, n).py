# 50. Pow(x, n)
# Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

class Solution:
    def myPow(self, x: float, n: int) -> float:
        # 会把n转换为正数，负数的值等于1除以正数的值
        # 3^10 = 3^5 * 3^5
        # 3^5 = 3^2 * 3^2 * 3
        # 3^2 = 3 * 3
        def helper(x, n):
            # base case 0 的 0 次方等于 1
            if n == 0: return 1
            if x == 0: return 0
            tmp = helper(x, n // 2)
            if n % 2 == 0:
                return tmp * tmp
            else:
                return x * tmp * tmp

        if n < 0:
            return 1 / helper(x, abs(n))
        else:
            return helper(x, n)

x = 2.00000
n = 10
print(Solution().myPow(x, n))
x = 2.10000
n = 3
print(Solution().myPow(x, n))
x = 2.00000
n = -2 
print(Solution().myPow(x, n))
