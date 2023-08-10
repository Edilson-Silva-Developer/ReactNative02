let input = document.querySelector("#input1");

input.addEventListener("focus", function () {
    console.log("Nome");
});

input.addEventListener("blur", function () {
    console.log("Sobrenome");
});


let in2 = document.querySelector("#in2");

in2.addEventListener("focus", function () {
    console.log("Telefone1");
});

in2.addEventListener("blur", function () {
    console.log("Telefone2");
});


let in3 = document.querySelector("#in3");

in3.addEventListener("focus", function () {
    console.log("Bairro");
});

in3.addEventListener("blur", function () {
    console.log("Cidade");
});

