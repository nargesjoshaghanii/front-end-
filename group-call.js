let acount = [
    {name:"yasaman",
    age:25},
    {name:"yasaman",
        age:25},
    {name:"yasaman",
    age:25},
    {name:"yasaman",
        age:25},
]
let ageistrue = acount.every(function(age){
    return age.age>18})
    if (ageistrue==true){
        alert("tamas bargarar mishavad")
    }
    else{
        alert("tamas bargarar NEmishavad")
    }


console.log(ageistrue)

