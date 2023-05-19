//função numerica com tipos de dados 
console.log(typeof 5 + typeof 12);
console.log(8 - 2);
console.log(10 / 2);
console.log(8 * 2);
console.log(25 % 2);


console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.log(2 * 4 - 10);
console.log(5 + (4 * 4));

console.log("Edilson Antonio");// com aspas duplas
console.log('Edilson silva');//com aspas simples.
console.log(`Edilson`);//backticks nas string funciona normal

console.log(1989);
console.log(1.150);
console.log((3 * (12 + 4)) / 8);



//String com concatenação, espaços, pulando linhas.
console.log("Ola\ \ mundo\nHelo World");
console.log('Edilson e "Juliana"');
console.log("Juliana e 'Edilson'");
console.log(`A soma de 4 + 4 é ${4 + 4}`); //a soma  de numero co, a string só funciona usando backtick.
console.log(`A soma de 10 + 11 é ${10 + 11}`); //a soma  de numero co, a string só funciona usando backtick.
console.log("Edilson " + "e" + " Juliana");//concatenação de nomes.
console.log("Ola" + " Mundo" + "\nHola \ \ world " + 'Java ' + " Script\n" + `A soma de 5 + 5 é ${5 + 5} ` + "\nReact 'Native'");
console.log(`A soma dos nomes Edilson + Antonio é igua a ${`Edilson ` + `Antonio`}`);



console.log(10 > 2);//maior que
console.log(200 > 100);//maior que 
console.log(5 > 2);//maior que
console.log(10 < 11);//menor que 
console.log(5 >= 6);//maior que ou igual
console.log(10 <= 11);//menor que ou igual
console.log(10 == 11);//igual
console.log(10 != 1);//diferente
console.log(5 === 5);//indentico 
console.log(5 !== 5);//não indentico 


console.log(7 > 5 && 77 == 77); // para ser true ambos os lados tem que ser true
console.log(8 == 8 || 8 == 11);//para ser true um dos lados tem que ser true.
console.log(8 == 7 || 8 == 11);//para ser true um dos lados tem que ser true.
console.log("Edilson" == "Edilson" && "Julaina" == "Julaina");//ambos as String são iguais com isso o resultado true.
console.log(!"Edilson" == "Edilson" && "Julaina" == "Julaina");//inverte os resultado mesmo sendo true se torna false


//Operadores ternarios
console.log(10 > 20 ? 'É sim ' : 'É não');
console.log(5 < 8 ? 'É sim' : 'É não');
console.log(10 >= 22 ? 'É sim' : 'É nao');
console.log(200 <= 300 ? 'É sim' : 'É não');
console.log(44 == 4 ? 'É sim' : 'Não');
console.log(50 != 55 ? 'sim' : 'Não');
console.log("Edilson" === "Edilson" ? 'SIM' : 'Não');
console.log(10 > 9 && 20 == 20 ? 'verdadeiro' : 'falso');
console.log(10 > 11 || 20 == 2 ? 'verdadeiro' : 'falso');

//conversão de tipos de dados automaticos

console.log("10" + 1);
console.log("50" - 4);


//NaN
console.log(500 * "Não é numero");



/////////////////////////////////////////////////////////////////////

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

let numeroMax = Math.max(55, 22, 66, 88, 78, 65, 22);
console.log(`Qual o numero maximo é: ${numeroMax}`);

let numeroMini = Math.min(1, 2, 5, 66, 4, 0.2,);
console.log(`O numero minimo é: ${numeroMini}`);

let numeArend = Math.round(2.239854);
console.log(`Aredondamento do numera: ${numeArend}`);

let numeArendUp = Math.ceil(6.256745);
console.log(`Arendodar para cima: ${numeArendUp}`);

console.log("Teste");