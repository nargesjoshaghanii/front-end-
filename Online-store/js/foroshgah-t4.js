let product =[
    {name:"moz",price:110000},
    {name:"holo",price:99000},
    {name:"gerdo",price:99000},
    {name:"sib",price:99000},
    {name:"anbe",price:99000},
    {name:'limo',price:120000},
    {name:'anar',price:110000},
]
let sabad = [
    {name:'moz',price:100000},
    {name:'holo',price:99000},
    {name:'gerdo',price:120000},
    {name:"sib",price:120000},
    {name:'anbe',price:99000},
    {name:'limo',price:99000},
]
let geymat =0
let geymatKol = sabad.map(function(price){
    return geymat+=price.price
})
let geymatnahayi =0
if (sabad.price>100000){
    priceBala =0
    geymatnahayi=geymat +priceBala
    alert(geymatnahayi)
}
else{
    var hazineBala = sabad.filter(function(bala){
        return bala.price<100000
    })
    var priceBala=0
    var priceOfpost = hazineBala.map(function(p){
        return priceBala+=1000
        
    })
    geymatnahayi=geymat +priceBala
    alert(geymatnahayi,priceBala)

}



    

