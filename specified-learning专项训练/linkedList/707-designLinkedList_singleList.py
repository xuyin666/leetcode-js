# 707. Design Linked List
# Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
# A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
# If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

# Implement the MyLinkedList class:

# MyLinkedList() Initializes the MyLinkedList object.
# int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
# void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
# void addAtTail(int val) Append a node of value val as the last element of the linked list.
# void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
# void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.



class LinkNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class MyLinkedList:
    def __init__(self):
        self.head = LinkNode(0)
        self.size = 0

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size:
            return -1
        aNode = self.head.next
        while index > 0:
            aNode = aNode.next
            index = index - 1
        return aNode.val

    def addAtHead(self, val: int) -> None:
        head = self.head
        aNode = LinkNode(val)
        aNode.next = head.next
        head.next = aNode
        self.size = self.size + 1

    def addAtTail(self, val: int) -> None:
        prev = self.head
        curr = self.head.next
        while curr != None:
            prev = curr
            curr = curr.next
        aNode = LinkNode(val)
        prev.next = aNode
        self.size = self.size + 1


    def getPrevNode(self, index):
        prev = self.head
        curr = self.head.next
        while index > 0:
            prev = curr
            curr = curr.next
            index = index - 1
        return prev

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0:
            self.addAtHead(val)
        elif index == self.size:
            self.addAtTail(val)
        elif index >= 0 and index < self.size:
            prevNode = self.getPrevNode(index)
            newNode = LinkNode(val)
            newNode.next = prevNode.next
            prevNode.next = newNode
            self.size = self.size + 1

    def deleteAtIndex(self, index: int) -> None:
        if index >= 0 and index < self.size:
            prevNode = self.getPrevNode(index)
            prevNode.next = prevNode.next.next
            self.size = self.size - 1


    def print(self):
        allNode = ""
        head = self.head.next
        while head != None:
            allNode = allNode + str(head.val) + " "
            head = head.next
        print(allNode)

    # 未优化的做法 
    # def __init__(self):
    #     self.head = LinkNode(0)
    #     self.size = 0        

    # def get(self, index: int) -> int:
    #     if index >= self.size or index < 0: 
    #         return -1
    #     curr = self.head
    #     val = 0
    #     while index >= 0:
    #         curr = curr.next
    #         val = curr.val
    #         index = index - 1
    #     return val

    # def addAtHead(self, val: int) -> None:
    #     aNode = LinkNode(val)
    #     head = self.head
    #     aNode.next = head.next
    #     head.next = aNode
    #     self.size = self.size + 1 

    # def addAtTail(self, val: int) -> None:
    #     prev = self.head
    #     size = self.size
    #     aNode = LinkNode(val)
    #     while size > 0:
    #         prev = prev.next
    #         size = size - 1
    #     self.size = self.size + 1 
    #     prev.next = aNode

    # def addAtIndex(self, index: int, val: int) -> None:
    #     if index < 0: 
    #         self.addAtHead(val)
    #     elif index == self.size:
    #         self.addAtTail(val)
    #     elif index > self.size:
    #         return 
    #     else:
    #         prev = self.head
    #         count = 0
    #         aNode = LinkNode(val)
    #         while count < index:
    #             prev = prev.next
    #             count = count + 1
    #         aNode.next = prev.next
    #         prev.next = aNode
    #         self.size = self.size + 1

    # def deleteAtIndex(self, index: int) -> None:
    #     if index >= 0 and index < self.size:
    #         prev = self.head
    #         count = 0
    #         while count < index:
    #             prev = prev.next
    #             count = count + 1
    #         prev.next = prev.next.next
    #         self.size = self.size - 1


# Your MyLinkedList object will be instantiated and called as such:
obj = MyLinkedList()
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1, 2)
param_1 = obj.get(1)
print(param_1)
obj.deleteAtIndex(1)
# obj.print()
param_1 = obj.get(1)
print(param_1)

        