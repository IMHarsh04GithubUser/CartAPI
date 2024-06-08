let response = fetch("https://fakestoreapi.com/products")
.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2[1].title)
    let card=""
    value2.map((val)=>{
        
        card +=`<div class="card">
        <h1>${val.id}</h1>
        <h2>${val.title}</h2>
        <img src=${val.image} alt="Product-Image">
        <p>${val.description}</p>
    </div>`
    
    
    document.getElementById("card1").innerHTML=card;
    })    
}).then((err)=>{
    console.log("There is an error"+err)
})