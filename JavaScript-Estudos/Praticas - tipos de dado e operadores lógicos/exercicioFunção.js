
//exemplo de função para imprimir exemplo simples

function imprimirExercicio() {
    console.log("Ola Edilson exercicio iniciado");
} imprimirExercicio();

function imprimirNome() {
    console.log("Edilson " + "Juliana");
} imprimirNome();




//exemplo template literals 

function imprimirIdade(ida) {
    console.log("Ola voce tem: " + ida);
} imprimirIdade(33);
imprimirIdade(32);
imprimirIdade(44);




//Operações matematicas
function somaNumeros(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
} console.log("A soma dos numeros são: " + somaNumeros(100, 100, 1, 1));
console.log("Os nuemro são: " + somaNumeros(1, 2, 3, 4));


function subNumero(a, b) {
    return a - b;
} console.log("A sua idade em 2023 é : " + subNumero(2023, 1989));


function divNumero(c, d) {
    return c / d;
} console.log("A divisão dos numeros: " + divNumero(100, 10));


function multNumero(p, l) {
    return p * l;
} console.log("A multiplicação dos nuemro: " + multNumero(5, 2));







//numero aleatorio, tipo sortei
function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}
console.log("O numero so sortei é: " + numeroAleatorio(100));
console.log("O numero so sortei é: " + numeroAleatorio(100));
console.log("O numero so sortei é: " + numeroAleatorio(100));
console.log("O numero so sortei é: " + numeroAleatorio(100));
console.log("O numero so sortei é: " + numeroAleatorio(100));
console.log("O numero so sortei é: " + numeroAleatorio(100));





//maior de idade
function podeDirigir(idade) {

    if (idade >= 18) {

        console.log("Pode se matricular na auto escola");
    } else {

        console.log("Não pode se matricular na auto escola");
    }
}
podeDirigir(16);
podeDirigir(18);
podeDirigir(22);
podeDirigir(10);




//verificar tipos de dados 

function verificarTiposDeDados(dados) {

    if (typeof dados === 'string') {
        console.log("Esta dado é uma string");
    } else if (typeof dados === 'number') {
        console.log("Este dados é um number");
    } else if (typeof dados === 'boolean') {
        console.log("Este dados é um boolean");
    }
}

verificarTiposDeDados(true);
verificarTiposDeDados(33);
verificarTiposDeDados("Testando");




//função numero negativo para positivo

function numPositivo(numNegativo){
    return Math.abs(numNegativo);
}
console.log(numPositivo(-100));
console.log(numPositivo(-50));
console.log(numPositivo(-22.55));



//tamanho do texto, limnite dde caracteres

function tamanhoTexto(texto){
    if(texto.length > 10){
        console.log("Texto muito longo");
    }else if(texto.length < 4){
        console.log("Texto muito curto");
    }else{
        console.log("Texto dentro do limite")
    }
    console.log("caracteres:"  + texto.length);
}

tamanhoTexto("Texto");
tamanhoTexto("Edilson Antonio da silva");
tamanhoTexto("Edilson");
tamanhoTexto("Edi");



//base e potencia, 2 exemplos que podem ser usados, sobre potencia
function potencia(q,w){
    return Math.pow(q,w);
}
console.log(potencia(2,2));
console.log(potencia(3,2));
console.log(potencia(4,4));


function potencia(q,w){
    return q ** w;
}
console.log(potencia(2,2));
console.log(potencia(3,2));
console.log(potencia(4,4));




//contador decrementando

function imprimirPar(num){
    for(let i = num; i>=0; i --){
        if(i % 2 == 0 ){
            console.log(i);
            
        }
    }
}
imprimirPar(50);



function imprimirPar2(num2){//contando crementando
    for (let x = num2; x <=80; x ++){
        if (x % 1 == 0){
            console.log(x);
        }
    }

}
imprimirPar2(1);



