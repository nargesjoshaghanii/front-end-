let karbaran = [
    {
    name:"narges",
    family:"joshagahni",
    age:21,
    email:"namegesjohafahoie@gmail.com"
    },
    {
    name:"yasi",
    family:"joshagahni",
    age:25,
    email:"yasijohafahoie@gmail.com"
    },
    {
    name:"npari",
    family:"kakakkai",
    age:39,
    email:"pahhoie@gmail.com"
    }

]
let newKarbar = {};
    getName = prompt("your name:");
    if (getName.length>3 || getName.length<10){
        newKarbar.name =getName;
    }
    else{
        alert("The length of the name specification is not respected.")
    }
    
    getFamily = prompt("your family");
    if (getFamily.length>3 || getFamily.length<15){
        newKarbar.family=getFamily;
    }
    else{
        alert("The length of the family specification is not respected.")
    }    
    newKarbar.age = Number(prompt("your age:"));
    newKarbar.email = prompt("your email:");
    karbaran.push(newKarbar);
    
console.log(karbaran);