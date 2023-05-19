//variaveis pode ser alteradas se for iniciada com LET

let nome = 'Edilson';
console.log(nome);

//podemos dar nome a variaveis para calcular

let numeros1 = 10;
let numero2 = 2;
console.log(numeros1 * numero2);

//como informado no iniico as variaveis pode ser alteradas, exemplo nome e numeros

nome = "julina";
console.log(nome);

numeros1 = 100;
numero2 = 50;
console.log(numeros1 - numero2);

//tambem podemos adicionar varios atributos em uma variavel desde que seja separado por virgula

let n1 = 10, n2 = 30, n3 = 55;
console.log(n1 + n2 - n3);


//Temos o exemplo do metodo antigo var e o const que não pode ser alteraso igual ao let

var nome2 = "Casa";
console.log(nome2);

const IP = "192.168.1.100"
console.log(IP);

nome2 = "Carro";
console.log(nome2);

//IP = "100.168.0.0";
//console.log(IP);

//Atualmente a melhor formar de nomear uma variavel é usando o camelCase Exemplo:

let nomeCarro = "Ferrari";
console.log(nomeCarro);

//palavra reservada pode ser usada junto com outra palavra

let breakNome = "Familia";
console.log(breakNome);

// funcção prompt recebe um imput do usuario que guarda informação, essa função é pouco ultiliada.

let suaIdade = prompt("Qual a sua idade ? ");
    console.log(`A sua idade é ${suaIdade}`);

let qualSeuNome = prompt("Qual o seu nome ?");
    console.log(`Ola ${qualSeuNome}, seja bem vindo.`);

//alerta no navegador 

alert("Vamos Estudar cada dia mais!");

//função math para numeração minimo, maximo, aredodamento

let numeroMax= Math.max(55,22,66,88,78,65,22);
    console.log(`Qual o numero maximo é: ${numeroMax}`);

let numeroMini = Math.min(1,2,5,66,4,0.2,);
    console.log(`O numero minimo é: ${numeroMini}`);

let numeArend= Math.round(2.239854);
    console.log(`Aredondamento do numera: ${numeArend}`);

let numeArendUp= Math.ceil(6.256745);
    console.log(`Arendodar para cima: ${numeArendUp}`);