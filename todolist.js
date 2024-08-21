let todolist = [
    {id:1,name:"learning en",status:"in progress"},
    {id:2,name:"writing",status:"done"},
    {id:3,name:"watch tv",status:"doing"},
    {id:4,name:"learning en",status:"not done"}
]
let meno = prompt("1.add todo\n2.deleted todo\n3.change status")
let add
let deleted
let changeStatus
let addStatus
let newDelete
let newSta
let newAdd ={}
if (meno=="1") {
    add =prompt("enter your add:");
    addStatus =prompt("enter your addStatus")
    newAdd ={
        id:5,
        name:add,
        status:addStatus,
    }
    todolist.push(newAdd)
    console.log("1",todolist)
  
} else if (meno=="2") {
    deleted =prompt("enter your deleted:");
    newDelete=todolist.includes(deleted)
    if(newDelete){
        todolist.pop(newDelete)
    }
    console.log("2",todolist)
    
}
else if (meno=="3"){
    changeStatus =prompt("enter your changestatus:");
    todolist.forEach(function(change){
        if(change.name===changeStatus){
            change.status="done"
        }
    })
        console.log("3",todolist)

}
else{
    alert("wrong");

}