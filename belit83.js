let belit =[
    {id:1,nameMabda:"tehran",namemaghhsad:"mashhad",masafat:800,saat:Date("10:50:00"),geymat:1000000},
    {id:1,nameMabda:"tabriz",namemaghhsad:"tehran",masafat:800,saat:Date("11:50:00"),geymat:1000000},
    {id:1,nameMabda:"tehran",namemaghhsad:"shiraz",masafat:800,saat:Date("12:50:00"),geymat:1000000},
    {id:1,nameMabda:"tehran",namemaghhsad:"yasoj",masafat:800,saat:Date("07:50:00"),geymat:1000000},

]
/*
let mabda = prompt("name of mabda:","tehran");
let maghsad = prompt("name of maghsad:","tehran"); 
alert("mabda: ",mabda,"\n maghsad: ",maghsad)*/
let userBelit = prompt("enter of mabda :");
let maghsad = prompt("name of maghsad:");
if(belit===userBelit){
    belit.push(maghsad)
    console.log("city in"+userBelit+"ostan in"+maghsad);
}
else{
    console.log("parvaz is not found");
}
belit.forEach(function(city){

    console.log(belit);

})
