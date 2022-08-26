# 160. Intersection of Two Linked Lists
# Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import Optional
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        # 让heada 和 headb 走同样长的路程
        # 先指针走完list a， 然后再走listb
        # 如果list a 和list b有交点
        # 他们会相遇在交点，没有交点的话最后就会都是null
        if headA == None or headB == None:
            return None
        currA = headA
        currB = headB
        while (currA != currB):
            if currA == None:
                currA = headB
            else:
                currA = currA.next
                
            if currB == None:
                currB = headA
            else:
                currB = currB.next
        return currA

        # if headA == None or headB == None:
        #     return None
        # freq = set()
        # while headA != None:
        #     freq.add(headA)
        #     headA = headA.next
        # while headB != None:
        #     if headB in freq:
        #         return headB
        #     headB = headB.next
        # return None