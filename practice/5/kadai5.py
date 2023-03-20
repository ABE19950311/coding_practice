class Node:
    def __init__(self,node,next):
        self.node=node
        self.next=next

class Linkedlist:
    def __init__(self):
        self.list=None
        self.length=0

    def insert(self,data,number):
        if number>0 and number>self.length:return

        if number==0:
            self.list=Node(data,self.list)
            self.length+=1
        if number>0:
            previous=None
            count=0
            current=self.list
            node=Node(data,None)
            while count<number:
                count+=1
                previous=current
                current=current.next
            else:
                node.next=current
                previous.next=node
                self.length+=1
        if number<0:
            count=0
            current=self.list
            node=Node(data,None)
            while count<self.length-1:
                count+=1
                current=current.next
            else:
                current.next=node
                self.length+=1

    def remove(self,number):
        if number>0 and number>self.length:return

        if number==0:
            self.list=self.list.next
            self.length-=1
        if number>0:
            previous=None
            current=self.list
            count=0
            while count<number:
                count+=1
                previous=current
                current=current.next
            else:
                previous.next=current.next
                self.length-=1
        if number<0:
            current=self.list
            count=0
            while count<self.length-1:
                count+=1
                current=current.next
            else:
                current.node=None
                self.length-=1

    def view(self):
        while self.list:
            print(self.list.node)
            self.list=self.list.next

list=Linkedlist()
list.insert(100,0)
list.insert(200,1)
list.insert(300,1)
list.insert(400,2)
list.insert(500,-111)
list.remove(1)
list.remove(0)
list.remove(-3)
list.view()
