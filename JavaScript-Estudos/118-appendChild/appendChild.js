//inserção de elemento dentro de algum elemento por ultimo

let novoElemento = document.createElement("p");

    let texto = document.createTextNode("Algum texto troca Aula01<<<");


novoElemento.appendChild(texto);


let p = document.querySelector("#box");
let pai  = p.parentNode; //referenciado o paragrafo

pai.appendChild(novoElemento);




let novoElemento2 = document.createElement('p2');

let texto2 = document.createTextNode(">>>>Texto 02 Teste");


novoElemento2.appendChild(texto2);


let p2 = document.querySelector("#caixa");
let pai2 = p2.parentNode;

pai2.appendChild(novoElemento2);