async function getPizza(){
    const response = await fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza');
    const data = await response.json();
    console.log(data);

    const pizzas = data.data.recipes;
    
    const result = pizzas.map(function(pizza){
        return `<div class = "myPizza">
        <h2>${pizza.title}</h2>
        <img src = '${pizza.image_url}' alt="${pizza.title} /> 
        </div>`;
    }).join(' ');
    document.querySelector(".pizza .row").innerHTML = result;
}
getPizza();