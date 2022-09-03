
/* const hikaku = (a:number,b:number) => a-b;
const test:number[] = [400,2,67,67,236,22];
const test2 = 3;
console.log(Array.isArray(test));
console.log(Array.isArray(test2));
console.log(test.indexOf(67));
console.log(test.includes(3));
console.log(test.length);
console.log(test[2]);
console.log(test[test.length-1]);
console.log(test.toString());
console.log(test.join(""));
console.log([...test].sort(hikaku));
console.log(test);

const hairetu:number[] = [1,2,2,4];
console.log(hairetu.map((item)=>item*2));
console.log(hairetu.find((item)=>item===2));
console.log(hairetu.filter((item)=>item!==2)); */

/* type Obj = {
    [prop:string]:any
}

const obj:Obj = {
    name:"test",
    age:20
} 

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["name"]);
console.log(obj.age);

const mai = "name";
console.log(obj[mai]);

obj.z = 200;
obj["nameee"] = "string";
console.log(obj);
console.log(Object.keys(obj));
console.log(Object.values(obj)); */

/* const a = (callback,b:number)=>{
    callback(1,2);
    console.log(b);
}

a((a:number,b:number)=>{
    let ab = a+b;
    console.log(ab);
},18);
 */


const settimer = async ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("YES");
        },1000);
    });
}




const awaittest = async()=>{
    console.log("1秒");
    await settimer();
    console.log("2秒");
    await settimer();
    console.log("3秒");
}




awaittest();


