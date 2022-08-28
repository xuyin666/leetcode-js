# 925. Long Pressed Name
# Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
# You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

from re import S


class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        first = 0
        second = 0
        while second < len(typed):
            if first < len(name) and name[first] == typed[second]:
                first = first + 1
                second = second + 1
            elif second > 0 and typed[second] == typed[second - 1]:
                second = second + 1
            else:
                return False
        return first == len(name)

name = "alex"
typed = "aaleex"
print(Solution().isLongPressedName(name, typed))
name = "saeed"
typed = "ssaaedd"
print(Solution().isLongPressedName(name, typed))
name = "vtkgn"
typed = "vttkgnn"
print(Solution().isLongPressedName(name, typed))


