# 160. Intersection of Two Linked Lists
# Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import Optional

class Solution:
    # without extra memory
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        aNode = headA
        bNode = headB
        while aNode != bNode:
            if aNode != None:
                aNode = aNode.next
            else:
                aNode = headB
            if bNode != None:
                bNode = bNode.next
            else:
                bNode = headA
        return aNode

    # with extra memory
    # def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
    #     hashSet = set()
    #     aNode = headA
    #     bNode = headB
    #     while aNode != None:
    #         hashSet.add(aNode)
    #         aNode = aNode.next
    #     while bNode != None:
    #         if bNode in hashSet:
    #             return bNode
    #         bNode = bNode.next
    #     return None

# 这道题有两种做法
# 一个是需要额外的空间，另一种是不需要额外的内存空间
# 需要额外的空间的做法是
# 先遍历headA的node 然后将每个node加入到一个hashset中
# 然后接着遍历headB中的每个node，查看这个node是否存在于刚刚的那个hashset中
# 如果存在则说明，这个node是相交点，
# 遍历到最后（当前的node为none的时候）都没有符合要求的node，则说明不相交

# 另外一种做法则是，比如说如果两个链表相交的话
# 那么他们走过同样的距离（两个链表的总长度），他们一定相交于一点，要么是末尾None时，
# 要么是末尾之前
# 即nodeA == nodeB的时候
# 第一次nodeA==nodeB的时候则为他们的第一次相交点
# 如果说最后nodeA == nodeB的时候，nodeA为None则说明他们不会相交
