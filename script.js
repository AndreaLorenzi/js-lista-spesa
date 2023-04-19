// creiamo una arrey con le cose da comprare

const listaSpesa = [
    "pane",
    "latte",
    "cioccolato",
    "bisccotti",
    "carne",
    "uova", 
    "formaggio", 
    "frutta"
];

console.log(listaSpesa)

const eleList= document.querySelector('#list')
let i = 0
while (i < listaSpesa.length){
    console.log(listaSpesa[i]);
    eleList.innerHTML += `<li>${listaSpesa[i]}</li>`;
    i++;
}