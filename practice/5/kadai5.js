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

    insertfirst(data) {
        this.head = new Node(data,this.head);
        this.size++;
    }

    insertlast(data) {
        let current = this.head;
        let node = new Node(data);

        if(!current) {
            current = node;
        }else {
            while(current.next) {
                current = current.next;
            }
            current.next=node;
        }

        this.size++;
    }

    insertmiddle(data,index) { //挿入するデータと、挿入位置を引数に取る
        if(index>0&&index>this.size) {
            return;
        }

        if(index===0) {
            this.head = new Node(data,this.head);
            return;
        }

        const node = new Node(data);
        let current,previous;

        current = this.head;
        let count = 0;

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
    }

    removelist(index) { //削除位置引数にとる
        if(index>0&&index>this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        if(index==0) {
            this.head = current.next;
        }else {
            while(count<index) {
                count++;
                previous = current; //削除位置一つ前
                current = current.next; //削除位置の更新
            }
            previous.next = current.next; //100[previous] 500 400[current.next]になって500は消える
        }
        this.size--;
    }

    view() {
        let current = this.head;

        while(current) {
            console.log(current.node);
            current=current.next;
        }
    }
}

const list = new Linkedlist();
list.insertfirst(100);
list.insertfirst(200);
list.insertlast(400);
list.insertmiddle(500,2);
list.removelist(2);
list.view()















































// class Node {
//     constructor(value,next) {
//         this.node = value;
//         this.next = next;
//     }
// }

// class Linkedlist {
//     constructor() {
//         this.head=null;
//         this.size=0;
//     }

//     inserthead(data) {
//         this.head = new Node(data,this.head);
//         this.size++;
//     }

//     insertlast(data) {
//         let node = new Node(data);
//         let current;

//         if(!this.head) {
//             this.head = node;
//         }else {
//             current = this.head;

//             while(current.next) {
//                 current = current.next;
//             }

//             current.next = node;
//         }
//         this.size++;
//     }

//     view() {
//         let current = this.head;

//         while(current) {
//             console.log(current.node);
//             current = current.next;
//         }
//     }
// }

// const list = new Linkedlist();
// list.inserthead(100);
// list.inserthead(200);
// list.inserthead(300);
// list.insertlast(400);
// list.view();