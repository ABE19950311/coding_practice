class Node {
    constructor(node,next) {
        this.node=node;
        this.next=next;
    }
}

class Linkedlist {
    constructor() {
        this.list=null;
        this.length=0;
    }

    insert(data,number) {
        if(number>0&&number>this.length) return;

        switch(true) {
            case number===0:
                this.list=new Node(data,this.list);
                this.length++;
                break;

            case number>0:
                let previous;
                let current=this.list;
                let listcount=0;
                const node=new Node(data);
                while(listcount<number) {
                    listcount++;
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
                this.length++;
                break;

            case number<0:
                let count=0;
                let cur=this.list;
                const nod = new Node(data);
                while(count<this.length-1) {
                    count++;
                    cur=cur.next;
                }
                cur.next=nod;
                this.length++;
                break;
        }
    }

    remove(number) {
        if(number>0&&number>this.length) return;

        switch(true) {
            case number===0:
                this.list=this.list.next;
                this.length--;
                break;

            case number>0:
                let previous;
                let current = this.list;
                let count = 0;
                while(count<number) {
                    count++;
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
                this.length--;
                break;

            case number<0:
                let cur = this.list;
                let coun = 0;
                while(coun<this.length-1) {
                    coun++;
                    cur=cur.next;
                }
                cur.node=null;
                this.length--;
                break;
        }

    }

    view() {
        while(this.list) {
            console.log(this.list.node);
            this.list=this.list.next;
        }
    }

}

list = new Linkedlist();
list.insert(100,0);
list.insert(200,1);
list.insert(300,1)
list.insert(400,0)
list.insert(500,-1)
list.insert(600,-22)
list.remove(0)
list.remove(-11)
list.remove(2)
list.view();

