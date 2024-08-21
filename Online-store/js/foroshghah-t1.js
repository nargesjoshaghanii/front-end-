 let pruduct =[
    {name:"khar",price:65800},
    {name:"kaho",price:65800},
    {name:"shivid",price:65800},
    {name:"noshabe",price:65800},
    {name:"anbe",price:65800},
    {name:"gorbe",price:65800},
    {name:"gav",price:65800}
    
]
let priceK=null
let requse 
 let sabad=[{name:"khar",price:65800},
    {name:"kaho",price:65800},]
let newP =prompt("new mahsol:")
let isinproduct = pruduct.some(function(mojodi){
    if (mojodi.name ===newP){
        requse=mojodi
        return true
    }
})

if (isinproduct){
    alert("mojod")
    var sabadN={
        name: requse.name,
        price: requse.price,
    }
    sabad.push(sabadN)




}
else{
    alert("namojoed")
}
sabad.forEach(function(pri){
    console.log(pri)
    priceK+=pri.price
    
})
alert("price kol:"+priceK)

  
 
