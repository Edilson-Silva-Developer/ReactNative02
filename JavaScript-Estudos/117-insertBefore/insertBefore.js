//Adicionado paragrafos e alteração de texto.

let novoElemento = document.createElement("p");

    let texto = document.createTextNode("Testo texto");

        novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");

let elementoPai = document.querySelector("#container-principal");


elementoPai.insertBefore(novoElemento, elementoAlvo);



let novoElemento2 = document.createElement("p")

    let texto2 = document.createTextoNOse("Teste texto 02");

    novoElemento2.appendChild(texto2);


    let elementoAlvo2 = document.querySelector("#Segundo texto");

let elementoPai2 = document.querySelector("#contaner-segundario");


elementoPai2.insertBefore(novoElemento2, elementoAlvo2);
