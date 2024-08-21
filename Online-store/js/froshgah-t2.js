let product = ["sib", "proa", "alo", "anbe", "angor"]
let sabad = ["portegal","anar","gerdo"]

let sabadhazf = prompt("mahsol hazfi ra vared konid")
let sabadadd = prompt("mahsol khod ra add konid")
let addshode
let hazfshode
let hazfinproduct = sabad.findIndex(function(hazf){
    return hazf===sabadhazf
})

let addinproduct = product.findIndex(function(add){
    return add===sabadadd
})
if (hazfinproduct>=0){
    console.log(sabad)
    hazfshode = sabad.splice(hazfinproduct,1)
    alert("ok")
    console.log(sabad)
}
else{
    alert("mahsoli ke neveshti da sabad vojod nadarad.")
}
if (addinproduct>=0){
    addshode =sabad.push(sabadadd)
    alert("azafe shod")
    console.log(sabad)
}
else{
    alert("mahsol ro nadarim")
}
