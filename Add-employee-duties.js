let karmandan =[
    {id:1,name:"abasali",task1:"abdarchi"},
    {id:2,name:"abas",task1:"anbardar"},
    {id:3,name:"ali",task1:"hesabdar"},
    {id:4,name:"sara",task1:"seo"},
    {id:5,name:"sogand",task1:"frontend"},

]
let karmand= prompt("enter your name of karmand:","ali");
let task = prompt("enter your task:","developer");
karmandan.forEach(function(kar){
    if(kar.name==karmand){
        kar.taks2=task
    }
})
console.log(karmandan);
