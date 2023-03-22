
// this is user task information:
let task = document.getElementById("task");
let addTask = document.getElementById("addTask");
let showBoard = document.getElementById("showBoard");

addTask.addEventListener("click", () => {
    if (!task.value == "" || !task.value == " " ) { 
        let div = document.createElement("div");
        div.setAttribute("class" , "col-12 d-flex align-items-center justify-content-center flex-wrap");
        
        let buttonDone = document.createElement("button");
        buttonDone.setAttribute("id" , "workDone");
        buttonDone.setAttribute("id" , "workDone");

        let textUser = document.createElement("p");
        textUser.setAttribute("id" , "userTask");
        textUser.setAttribute("class" , "userTask my-1 mx-2");

        let buttonClear = document.createElement("button");
        buttonClear.setAttribute("id" , "clearTask");
        buttonClear.setAttribute("class" , "btn btn-outline-warning m-3 text-center");
        
    }
    else{
        alert("your task are blank first Enter task");
    }
});