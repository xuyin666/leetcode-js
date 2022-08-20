# 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
# Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.
# Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
# A prefix of a string s is any leading contiguous substring of s.


class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        splitArr = sentence.split(" ")
        for i in range(0, len(splitArr)):
            if (splitArr[i].startswith(searchWord)):
                return i + 1
        return -1

sentence = "i love eating burger" 
searchWord = "burg"

sentence1 = "this problem is an easy problem"
searchWord1 = "pro"

sentence2 = "i am tired"
searchWord2 = "you"

tmp = Solution()
print(tmp.isPrefixOfWord(sentence, searchWord))
print(tmp.isPrefixOfWord(sentence1, searchWord1))
print(tmp.isPrefixOfWord(sentence2, searchWord2))
