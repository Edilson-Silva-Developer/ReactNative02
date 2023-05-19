//input por função 

function checarNumero(num){
    let number = Number(num);//mesmo se for string vai converte para numero 
    if(Number.isNaN(number)){//metodo do objeto number, para verificar se não é um numero.
        alert("Por Favor, passe só números para o programa");
    }else{
        return number;
    }
}

let number = prompt("Digite um número");

checarNumero(number);