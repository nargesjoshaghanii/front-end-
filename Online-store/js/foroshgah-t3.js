let product = [
    {name:"apple",price:254},
    {name:"liemo",price:589},
    {name:"gerdo",price:456},
    {name:"angor",price:569},
    {name:"anbe",price:7891},
    {name:"alo",price:4568}
]
let sabad = [
    {name:"apple",price:254},
    {name:"liemo",price:589},

]

let meno = prompt("1.add\n2.remove")
if (meno=="1"){
    var add = prompt("name of add:")

}
else if  (meno== "2"){
    var remove = prompt("name of remove:")
}
else{
    alert("wrong")
}

let removeInSabad = sabad.some(function (remo){
    return remove==remo.name
})

    if (removeInSabad==true){
        sabad.pop(remove)
        alert("mahsol hazf shod.")
    }
    else {
        alert("mahsol hazfi vojod nadarad.")
    }
var addin
let addInsabad = product.some(function(ad){
    if(ad.name==add){
        addin=ad
        return true

    }
    
})

    if (addInsabad==true){
        var nweAdd={
            name:addin.name,
            price:addin.price,
        }
        sabad.push(nweAdd)
        alert("ok mahsol ro ezafe kardim",sabad)
    }
    else{
        alert("mahsol add vojod nadarad.")
    }
