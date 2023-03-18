class Obj {
    constructor(value1,value2) {
        this.key = value1,
        this.str = value2
    }

    getKey() {
        return this.key;
    }

    getStr() {
        return this.str;
    }
}
let obj = new Obj(101,"This is hell.");
console.log(obj.getKey());
console.log(obj.getStr());