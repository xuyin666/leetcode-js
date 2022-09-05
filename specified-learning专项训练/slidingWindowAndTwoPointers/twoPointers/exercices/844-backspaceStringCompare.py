# 844. Backspace String Compare
# Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
# Note that after backspacing an empty text, the text will continue empty.

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        ps = len(s) - 1
        pt = len(t) - 1
        skipS = 0
        skipT = 0
        while ps >= 0 or pt >= 0:
            while ps >= 0:
                if s[ps] == "#":
                    skipS = skipS + 1
                    ps = ps - 1
                elif skipS != 0:
                    skipS = skipS - 1
                    ps = ps - 1
                else:
                    break
            while pt >= 0:
                if t[pt] == "#":
                    skipT = skipT + 1
                    pt = pt - 1
                elif skipT != 0:
                    skipT = skipT - 1
                    pt = pt - 1
                else:
                    break
            if ps >= 0 and pt >= 0:
                if s[ps] != t[pt]:
                    return False
            elif ps >= 0 or pt >=0:
                # 如果有一个找到了要比较的内容，另一个没有返回false
                # 如果都没有找到，则OK
                    return False
            ps = ps - 1
            pt = pt - 1
        return True
        # def removeBackspace(newStr):
        #     stack = []
        #     for i in range(len(newStr) - 1, -1, -1):
        #         if newStr[i] == '#':
        #             stack.append(newStr[i])
        #         else:
        #             if len(stack) > 0 and stack[-1] == '#':
        #                 stack.pop()
        #             else:
        #                 stack.append(newStr[i])
        #     res = ""
        #     for i in range(len(stack)):
        #         if stack[i] != "#":
        #             res = res + stack[i]
        #     return res
        # return removeBackspace(s) == removeBackspace(t)

s = "ab#c"
t = "ad#c"
print(Solution().backspaceCompare(s, t))
s = "ab##"
t = "c#d#"
print(Solution().backspaceCompare(s, t))
s = "a#c"
t = "b"
print(Solution().backspaceCompare(s, t))
s = "y#fo##f"
t = "y#f#o##f"
print(Solution().backspaceCompare(s, t))
