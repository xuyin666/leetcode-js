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
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next

class MyLinkedList:

    def __init__(self):
        self.dummyStart = LinkNode(-1, None, None)
        self.dummyEnd = LinkNode(-1, None, None)
        self.dummyStart.next = self.dummyEnd
        self.dummyEnd.prev = self.dummyStart
        self.size = 0

    # if index >=0 and index < self.size
    def getNode(self, index):
        startNode = self.dummyStart.next
        while index > 0:
            startNode = startNode.next
            index = index - 1
        return startNode

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size:
            return -1
        aNode = self.getNode(index)
        return aNode.val

    def addAtHead(self, val: int) -> None:
        aNode = LinkNode(val)
        head = self.dummyStart
        nextNode = head.next
        aNode.prev = head
        aNode.next = nextNode
        head.next = aNode
        nextNode.prev = aNode
        self.size = self.size + 1

    def addAtTail(self, val: int) -> None:
        aNode = LinkNode(val)
        end = self.dummyEnd
        prevNode = end.prev
        aNode.prev = prevNode
        aNode.next = end
        end.prev = aNode
        prevNode.next = aNode
        self.size = self.size + 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index == self.size:
            self.addAtTail(val)
        elif index < 0:
            self.addAtHead(val)
        elif index >= 0 and index < self.size:
            aNode = self.getNode(index)
            prevNode = aNode.prev
            nextNode = aNode
            newNode = LinkNode(val)
            newNode.prev = prevNode
            newNode.next = nextNode
            prevNode.next = newNode
            nextNode.prev = newNode
            self.size = self.size + 1

    def deleteAtIndex(self, index: int) -> None:
        if index >= 0 and index < self.size:
            aNode = self.getNode(index)
            prevNode = aNode.prev
            nextNode = aNode.next
            prevNode.next = nextNode
            nextNode.prev = prevNode
            self.size = self.size - 1
        
    def print(self):
        aNode = self.dummyStart.next
        allNode = ""
        while aNode != self.dummyEnd:
            allNode = allNode + str(aNode.val) + " "
            aNode = aNode.next
        print(allNode)

# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# obj.addAtHead(1)
# obj.addAtTail(3)
# obj.addAtIndex(1, 2)
# param_1 = obj.get(1)
# print(param_1)
# obj.deleteAtIndex(1)
# param_1 = obj.get(1)
# print(param_1)

obj = MyLinkedList()
obj.addAtHead(7)
obj.addAtHead(2)
obj.addAtHead(1)
obj.addAtIndex(3, 0)
obj.deleteAtIndex(2)
obj.addAtHead(6)
obj.addAtTail(4)
param_1 = obj.get(4)
obj.addAtHead(4)
obj.addAtIndex(5, 0)
obj.addAtHead(6)
obj.print()


