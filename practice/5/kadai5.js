class Node {
    constructor(node,next) {
        this.node = node;
        this.next = next;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data,index) { //挿入するデータと、挿入位置を引数に取る

        if(index>0&&index>this.size) {
            return;
        }

        switch(true) {
            case index===0:
                this.head = new Node(data,this.head);
                this.size++;
                break;

            case index>0:
                const node = new Node(data);
                let current,previous;
                let count = 0;
                current = this.head; //currentで今のthis.headを格納する(currentにいれず、this.headでするとwhileで辿ってる時点で更新されてしまう)
                while(count < index) { //挿入位置までループする
                    previous = current; //挿入位置の一個前のデータをとる　[200]この値 挿入データ 400
                    count++;
                    current = current.next; //挿入位置のnextをとる
                }
                node.next = current; //挿入するデータのnextにwhileでとってきたnextをいれる
                previous.next = node; //挿入位置一個前headのnextに挿入データを入れる
                // 200                    挿入                 500
                //previous    previous.next  node.next       current
                this.size++;
                break;

            case index<0:
                const endnode = new Node(data);
                let nodecurrent = this.head;
                let size = this.size;
                while(size>1) {
                    size--;
                    nodecurrent = nodecurrent.next;
                }
                nodecurrent.next = endnode;
                this.size++;
                break;
        }

    }

    remove(index) { //削除位置引数にとる
        let current = this.head;
        let previous;
        let count = 0;
        let size = this.size;

        if(index>0&&index>this.size) {
            return;
        }

        switch(true) {
            case index===0:
                this.head = current.next;
                this.size--;
                break;
            case index>0:
                while(count<index) {
                    count++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                this.size--;
                break;
            case index<0:
                while(size>1) {
                    size--;
                    current = current.next
                }
                console.log(current)
                current.node = null;
                this.size--;
                break;
        }
    }

    view() {
        while(this.head) {
            console.log(this.head.node);
            this.head=this.head.next;
        }
    }
}

const list = new Linkedlist();
list.insert(100,0);
list.insert(200,0);
list.insert(300,1);
list.insert(400,-1);
list.remove(0);
list.remove(-1);
list.insert(300,-2);

list.view()




