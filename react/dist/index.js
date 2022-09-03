/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/index.ts":
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
/***/ (function() {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const settimer = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("YES");
        }, 1000);
    });
});
const awaittest = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("1秒");
    yield settimer();
    console.log("2秒");
    yield settimer();
    console.log("3秒");
});
awaittest();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./ts/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQWtCaUQ7Ozs7Ozs7Ozs7QUFFakQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FxQm1DO0FBRW5DOzs7Ozs7Ozs7R0FTRztBQUdILE1BQU0sUUFBUSxHQUFHLEdBQVEsRUFBRTtJQUN2QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLEVBQUU7UUFDMUIsVUFBVSxDQUFDLEdBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFLRCxNQUFNLFNBQVMsR0FBRyxHQUFPLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixNQUFNLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsTUFBTSxRQUFRLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLENBQUM7QUFLRCxTQUFTLEVBQUUsQ0FBQzs7Ozs7Ozs7VUU5RVo7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZWFjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVhY3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBjb25zdCBoaWtha3UgPSAoYTpudW1iZXIsYjpudW1iZXIpID0+IGEtYjtcclxuY29uc3QgdGVzdDpudW1iZXJbXSA9IFs0MDAsMiw2Nyw2NywyMzYsMjJdO1xyXG5jb25zdCB0ZXN0MiA9IDM7XHJcbmNvbnNvbGUubG9nKEFycmF5LmlzQXJyYXkodGVzdCkpO1xyXG5jb25zb2xlLmxvZyhBcnJheS5pc0FycmF5KHRlc3QyKSk7XHJcbmNvbnNvbGUubG9nKHRlc3QuaW5kZXhPZig2NykpO1xyXG5jb25zb2xlLmxvZyh0ZXN0LmluY2x1ZGVzKDMpKTtcclxuY29uc29sZS5sb2codGVzdC5sZW5ndGgpO1xyXG5jb25zb2xlLmxvZyh0ZXN0WzJdKTtcclxuY29uc29sZS5sb2codGVzdFt0ZXN0Lmxlbmd0aC0xXSk7XHJcbmNvbnNvbGUubG9nKHRlc3QudG9TdHJpbmcoKSk7XHJcbmNvbnNvbGUubG9nKHRlc3Quam9pbihcIlwiKSk7XHJcbmNvbnNvbGUubG9nKFsuLi50ZXN0XS5zb3J0KGhpa2FrdSkpO1xyXG5jb25zb2xlLmxvZyh0ZXN0KTtcclxuXHJcbmNvbnN0IGhhaXJldHU6bnVtYmVyW10gPSBbMSwyLDIsNF07XHJcbmNvbnNvbGUubG9nKGhhaXJldHUubWFwKChpdGVtKT0+aXRlbSoyKSk7XHJcbmNvbnNvbGUubG9nKGhhaXJldHUuZmluZCgoaXRlbSk9Pml0ZW09PT0yKSk7XHJcbmNvbnNvbGUubG9nKGhhaXJldHUuZmlsdGVyKChpdGVtKT0+aXRlbSE9PTIpKTsgKi9cclxuXHJcbi8qIHR5cGUgT2JqID0ge1xyXG4gICAgW3Byb3A6c3RyaW5nXTphbnlcclxufVxyXG5cclxuY29uc3Qgb2JqOk9iaiA9IHtcclxuICAgIG5hbWU6XCJ0ZXN0XCIsXHJcbiAgICBhZ2U6MjBcclxufSBcclxuXHJcbmNvbnNvbGUubG9nKG9iai5uYW1lKTtcclxuY29uc29sZS5sb2cob2JqW1wiYWdlXCJdKTtcclxuY29uc29sZS5sb2cob2JqW1wibmFtZVwiXSk7XHJcbmNvbnNvbGUubG9nKG9iai5hZ2UpO1xyXG5cclxuY29uc3QgbWFpID0gXCJuYW1lXCI7XHJcbmNvbnNvbGUubG9nKG9ialttYWldKTtcclxuXHJcbm9iai56ID0gMjAwO1xyXG5vYmpbXCJuYW1lZWVcIl0gPSBcInN0cmluZ1wiO1xyXG5jb25zb2xlLmxvZyhvYmopO1xyXG5jb25zb2xlLmxvZyhPYmplY3Qua2V5cyhvYmopKTtcclxuY29uc29sZS5sb2coT2JqZWN0LnZhbHVlcyhvYmopKTsgKi9cclxuXHJcbi8qIGNvbnN0IGEgPSAoY2FsbGJhY2ssYjpudW1iZXIpPT57XHJcbiAgICBjYWxsYmFjaygxLDIpO1xyXG4gICAgY29uc29sZS5sb2coYik7XHJcbn1cclxuXHJcbmEoKGE6bnVtYmVyLGI6bnVtYmVyKT0+e1xyXG4gICAgbGV0IGFiID0gYStiO1xyXG4gICAgY29uc29sZS5sb2coYWIpO1xyXG59LDE4KTtcclxuICovXHJcblxyXG5cclxuY29uc3Qgc2V0dGltZXIgPSBhc3luYyAoKT0+e1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZShcIllFU1wiKTtcclxuICAgICAgICB9LDEwMDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGF3YWl0dGVzdCA9IGFzeW5jKCk9PntcclxuICAgIGNvbnNvbGUubG9nKFwiMeenklwiKTtcclxuICAgIGF3YWl0IHNldHRpbWVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIjLnp5JcIik7XHJcbiAgICBhd2FpdCBzZXR0aW1lcigpO1xyXG4gICAgY29uc29sZS5sb2coXCIz56eSXCIpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5hd2FpdHRlc3QoKTtcclxuXHJcblxyXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vdHMvaW5kZXgudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==