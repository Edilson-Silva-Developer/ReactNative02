function dados1() {

    var dados1 = document.getElementById('dados1');
    var texto = prompt('Digite seu nome:');

    dados1.innerHTML = '<b>Ola ' + texto;
}
function apertouOmouseDados1() {
    console.log("Apertou o botão!");
}
function passouOmouseDados1() {
    console.log("passou o mouse no botão");
}



function dados2(dados1) {

    var dados2 = document.getElementById('dados2');
    var texto = prompt('Digite seu sobrenome:');

    dados2.innerHTML = '<b>Ola ' + dados1 + " " + texto;
}
function apertouOmouseDados2() {
    console.log("Apertou o botão!");
}
function passouOmouseDados2() {
    console.log("Passouo o mouse no botão!");
}



function idade() {

    var idade = document.getElementById('idade');
    var texto = prompt('Digite sua idade:');

    idade.innerHTML = '<b>Sua idade é: ' + texto;
}
function apertouOmouseIdade() {
    console.log("Apertou o botão !");
}
function passouOmouseIdade() {
    console.log("Passou o mouse no botão!");
}



function CPF() {

    var CPF = document.getElementById('CPF');
    var texto = prompt('Digite seu CPF:');

    CPF.innerHTML = '<b>Seu CPF é: ' + texto;
}
function apertouOmouseCpf() {
    console.log("apertou o botão do mouse");
}
function passouOmouseCpf() {
    console.log("passou o mouse no botão");
}



function end() {

    var end = document.getElementById('end');
    var texto = prompt('Digite seu endereço: ');

    end.innerHTML = '<b>Seu endereço é: ' + texto;
}
function apertouOmouseEnd() {
    console.log("Apertou o botão do mouse");
}
function passouOmouoseEnd() {
    console.log("Passou o mouse no botão");
}



function partouOmousepedido() {
    console.log("passou o mouse no pedido!");
}
function passouOmousepedido() {
    console.log("passou o mouse no pedido!");
}