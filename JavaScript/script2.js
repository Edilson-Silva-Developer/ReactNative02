//funcção entra

function entrar() {

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome ?');

    if (texto == '' || texto == null) {
        alert('Digite seu nome novamente !');
        area.innerHTML = 'Bem Vindo...';
    } else {

        area.innerHTML = 'Bem Vindo - ' + texto;
    }

}
function entrar2(nome) {

    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome ?');

    area.innerHTML = nome + " " + texto;
}

function idade() {

    var area = document.getElementById('idade');
    var idade = prompt('digite sua idade...')

    area.innerHTML = 'Sua idade é: ' + idade

}

function CFP() {

    var area = document.getElementById('CPF');
    var CFP = prompt('Digite seu CPF');

    area.innerHTML = 'Seu CPF é: ' + CFP

}