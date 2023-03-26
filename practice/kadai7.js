class MyNode {
    constructor(key, left = null, right = null) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor() {
        this.tree = null;
        this.depth = 0;
    }

    addNode(key) {
        let current = this.tree;
        let previous;

        if (!this.tree) this.tree = new MyNode(key);

        if (!current) return

        if (key <= current.key) {
            while (current) {
                if(key==current.key) return;
                previous = current;
                current = key<current.key ? current.left : current.right;
            }
            if(key<=previous.key) {
                previous.left = new MyNode(key);
            }else {
                previous.right = new MyNode(key);
            }
        } else if (key > current.key) {
            while (current) {
                if(key==current.key) return;
                previous = current;
                current = key<=current.key ? current.left : current.right;
            }
            if(key<=previous.key) {
                previous.left = new MyNode(key);
            }else {
                previous.right = new MyNode(key);
            }
        }
    }

    find(key) {
        let findcurrent = this.tree;
        let getfind;

        if(!this.tree) return;

        if (key <= findcurrent.key) {
            while (findcurrent) {
                if(key==findcurrent.key) {
                    getfind=findcurrent;
                    break;
                }else if(key<findcurrent.key) {
                    findcurrent=findcurrent.left;
                }else if(key>findcurrent,key) {
                    findcurrent=findcurrent.right;
                }
            }
            if(getfind) {
                console.log(getfind)
            }else {
                console.log("Not Found");
            }
        } else if (key > findcurrent.key) {
            while (findcurrent) {
                if(key==findcurrent.key) {
                    getfind=findcurrent;
                    break;
                }else if(key<findcurrent.key) {
                    findcurrent=findcurrent.left;
                }else if(key>findcurrent,key) {
                    findcurrent=findcurrent.right;
                }
            }
            if(getfind) {
                console.log(getfind)
            }else {
                console.log("Not Found");
            }
        }
    }

    remove(key) {
        let current = this.tree;
        let previous;
        let getRemovefind;
        let leftSwitch=false
        let rightSwitch=false

        if(!this.tree) return;

        if (key <= current.key) { //引数がroot以下の場合
            while (current) { //treeが存在する間ループ
                if(key==current.key) { //引数とtreeのkeyが一致した場合値を代入してループを抜ける
                    getRemovefind=current;
                    break;
                }else if(key<current.key) { //引数がkey未満の場合
                    leftSwitch = true; //左側探索フラグON
                    rightSwitch = false; //右側探索フラグOFF
                    previous=current; //探索地点一個前を代入
                    current=current.left; //探索箇所を進める
                }else if(key>current,key) {
                    leftSwitch = false;
                    rightSwitch = true;
                    previous=current;
                    current=current.right;
                }
            }
            if(getRemovefind) { //削除対象が見つかった場合
                if(!getRemovefind.left&&!getRemovefind.right) { //削除対象の左右ノードがない場合
                    if(leftSwitch) { //一個前ノードの左側を探索していた場合
                        previous.left = null //一個前ノードの左側をnullにすることで削除する
                    }else if(rightSwitch) {
                        previous.right= null;
                    }
                }else if(getRemovefind.left&&getRemovefind.right) { //削除対象に左右ノード両方あった場合
                    const getmin = searchMin(getRemovefind); //左側をひたすら探索して最小値を持ってくる
                    let min = getmin[0] //最小値ノード
                    let minprevious = getmin[1] //最小値一個前ノード
                    minprevious.left=null; //最小値一個魔ノードから、最小値ノードをnullにして削除する
                    getRemovefind.key=min.key; //削除対象を最小値に置き換える
                }else if (getRemovefind.left||getRemovefind.right) { //削除対象ノード左右どちらか存在した場合
                    if(getRemovefind.left) { //左があった場合
                        if(leftSwitch) { //一個前の左側を探索していた場合
                            previous.left = getRemovefind.left //一個前左を削除対象左ノードに置き換えることで削除にする
                        }else if(rightSwitch) {
                            previous.right = getRemovefind.left
                        }
                    }else if(getRemovefind.right) {
                        if(leftSwitch) {
                            previous.left = getRemovefind.right
                        }else if(rightSwitch) {
                            previous.right = getRemovefind.right
                        }
                    }
                }
            }else {
                console.log("Not Found");
            }
        } else if (key > current.key) {
            while (current) {
                if(key==current.key) {
                    getRemovefind=current;
                    break;
                }else if(key<current.key) {
                    leftSwitch = true;
                    rightSwitch = false;
                    previous=current;
                    current=current.left;
                }else if(key>current,key) {
                    leftSwitch = false;
                    rightSwitch = true;
                    previous=current;
                    current=current.right;
                }
            }
            if(getRemovefind) {
                if(!getRemovefind.left&&!getRemovefind.right) {
                    if(leftSwitch) {
                        previous.left = null
                    }else if(rightSwitch) {
                        previous.right= null;
                    }
                }else if(getRemovefind.left&&getRemovefind.right) {
                    const getmin = searchMin(getRemovefind);
                    let min = getmin[0]
                    let minprevious = getmin[1]
                    minprevious.left=null;
                    getRemovefind.key=min.key;
                }else if (getRemovefind.left||getRemovefind.right) {
                    if(getRemovefind.left) {
                        if(leftSwitch) {
                            previous.left = getRemovefind.left
                        }else if(rightSwitch) {
                            previous.right = getRemovefind.left
                        }
                    }else if(getRemovefind.right) {
                        if(leftSwitch) {
                            previous.left = getRemovefind.right
                        }else if(rightSwitch) {
                            previous.right = getRemovefind.right
                        }
                    }
                }
            }else {
                console.log("Not Found");
            }
        }

        function searchMin(tree) { //最小値探索関数
            let previous;
            while(tree.left!=null) { //ノードの左値がnullじゃない間ループ
                previous=tree;
                tree = tree.left;
            }
            return [tree,previous];
        }
    }

    view(tree) {
        let queue=[];
        let dequeue=[];
        let leftcount=0;
        let rightcount=0;
        queue.push(tree);
        while(queue!="") {
            dequeue=queue.shift();
            console.log(`深さ:${this.depth} 要素:${dequeue.key}`)

            //console.log(this.depth)

            if(dequeue.left) {
                queue.push(dequeue.left)
                leftcount++;
                //console.log(`leftcount${leftcount}`)
            }
            if(dequeue.right) {
                queue.push(dequeue.right);
                rightcount++;
                //console.log(`rightcount${rightcount}`)
            }


                this.depth=leftcount
               this.depth=rightcount
        } //キューに次の行き先を入れて、キューから取り出した行き先を見て探索していく
        // this.view(tree.left,depth++);この二つは深さ優先
        // this.view(tree.right,depth++);この二つは深さ優先
    }

}



const tree = new Tree();
tree.addNode(15);
tree.addNode(20);
tree.addNode(18);
tree.addNode(22);
tree.find(22)
//tree.view(tree.tree);
//tree.view(0);
console.log(tree.tree)