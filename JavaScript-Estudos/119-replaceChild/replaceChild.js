let novoElemento = document.createElement("p");
let texto = document.createTextNode("RepaceChild");


novoElemento.appendChild(texto);



let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);




let novoElemento2 = document.createElement("p2");
let texto2 = document.createTextNode("Repace02Child02");


novoElemento2.appendChild(texto2);

let heading2 = document.querySelector('#Segundo-texto');
let paiHeading2 = heading2.parentNode;

paiHeading2.replaceChild(novoElemento2, heading2);