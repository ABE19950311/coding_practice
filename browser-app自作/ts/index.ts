import { Create,Status } from "./create";
import { Data } from "./datalist";
import { Drug } from "./drug";
import  { Storage, TaskObject } from "./storage";

class TODO {
  private todolist = document.getElementById("todoList") as HTMLElement;
  private doinglist = document.getElementById("doingList") as HTMLElement;
  private donelist = document.getElementById("doneList") as HTMLElement;
  private list = new Data();
  private storage = new Storage();
  private drug = new Drug(this.todolist,this.doinglist,this.donelist);

  start() {
    const inputform = document.getElementById("createForm") as HTMLElement;
    
    const storage = this.storage.getstorage() as TaskObject[];
    console.log(storage);
    if(storage) {
      storage.forEach((item)=>{
        this.storagecreatedata(item);
      });
    }
 
    inputform.addEventListener("submit",(event)=>{
      event.preventDefault();
      this.createdata();
  });
  }

  storagecreatedata(item:TaskObject) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const deletebutton = document.createElement("button");

    
    const datalist = new Create(item.value,item.id,item.status);
      span.textContent = datalist.value;
      this.list.save(datalist);
      div.setAttribute("id",datalist.id);
      div.classList.add("task-item");
      deletebutton.textContent = "削除";
      div.append(span,deletebutton);
      if(datalist.status==="TODO") {
        this.todolist.append(div);
      }else if(datalist.status==="DOING") {
        this.doinglist.append(div);
      }else if(datalist.status==="DONE") {
        this.donelist.append(div);
      }

      deletebutton.addEventListener("click",()=>{
        this.delete(div,datalist);
      });
  }

  createdata() {
    const titleValue = document.getElementById("title") as HTMLInputElement;
    const div = document.createElement("div");
    const span = document.createElement("span");
    const deletebutton = document.createElement("button");
    const alldelete = document.getElementById("deleteAllDoneTask") as HTMLElement;

    if(!titleValue) return;
   
    const datalist = new Create(titleValue.value);
    span.textContent = datalist.value;
    this.list.save(datalist);
    div.setAttribute("id",datalist.id);

    deletebutton.textContent = "削除";
    div.append(span,deletebutton);
    div.classList.add("task-item");
    this.todolist.append(div);
    titleValue.value="";

    this.drug.Drugdrop(this.deletezunbi);

    deletebutton.addEventListener("click",()=>{
      this.delete(div,datalist);
    });
  
    alldelete.addEventListener("click",()=>{
      this.alldelete();
    });

  }

  deletezunbi = (id:string,newState:Status)=> {
   const data =this.list.datafind(id);
   if(!data) return;
   this.list.update(data,newState);
  }

   delete(div:HTMLElement,data:Create) {
    if(!window.confirm("マジで消しますか？")) return;
    this.list.delete(data.id);
    div.remove();
  } 

  alldelete = ()=> {
     if(!window.confirm("DONE全部消す？")) return;
     const done = this.list.filter();
    done.forEach((data)=>{
      console.log(data);
      this.alldel(data);
    });  
  }

  alldel(data:Create) {
    console.log(data.id);
    this.list.delete(data.id);
    const id = document.getElementById(data.id) as HTMLElement;
    this.donelist.removeChild(id);
  }
}


window.addEventListener("load",()=>{
  const todo = new TODO();
  todo.start();
});