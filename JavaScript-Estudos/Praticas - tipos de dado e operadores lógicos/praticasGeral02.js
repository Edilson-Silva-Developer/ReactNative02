

for (let q = 0; q <= 50; q++) {

    if (q % 2 == 0) {
        console.log(`O numero ${q} é par`);
    } else {
        console.log(`O numero ${q} é impar`);
    }
}
//numero primo

let numPrimo = prompt("Digite o numero primo");
let divisoes = 0;

for (let o = 1; o <= numPrimo; o++) {

    if (numPrimo % o == 0) {

        divisoes++;
    }
}
if (divisoes == 2) {
    console.log(`o numero ${numPrimo} é primo`);
    alert(`o numero ${numPrimo} é primo`);
} else {
    console.log(`O numero ${numPrimo} não é primo`);
    alert(`O numero ${numPrimo} não é primo`);
}






//Operações matematicas.
console.log(8 - 2);
console.log(25 % 2);
console.log(25 + 2);
console.log(5 * 2);
console.log(50 / 2);
console.log(2 * 4 - 8);
console.log(2 + (4 * 4));
console.log(1 + (4 * 4));
console.log((2 * (1 + 1)) / 2);

//Tipos de escrever nomes, exemplo normal com concatenação tambem, com espaçamentos.
console.log("Edilson");
console.log("Edilson" + " Antonio");
console.log("Edilson" + ' Antonio' + ` da Silva`)
console.log("Edilson\ \ Antonio\ \ da\ \ Silva\nJuliana\ \ Paulino\ \ da\ \ Silva");//escrevendo nomes com espaçõs alinhados.
console.log(`A Soma dos numero são ${100 + 50}`);//escrevendo um string + number, junto as somas dos numeros.

//Operadores de igualdade
console.log(20 > 2);//maior que
console.log(1 < 2);//menor que 
console.log(1 <= 2);//menor que ouigual
console.log(1 >= 2);//maior que ou igual
console.log(10 == 10);//igual
console.log(10 === 1);//identico
console.log(5 != 5);//diferente quando os numeros não são identicos
console.log(5 !== 4);//não é identico quando os numero não e igual ao outro.
console.log(10 > 8 && 5 > 4);//para o resultado dar true ambos os lados tem que ser true.
console.log(4 > 6 || 88 == 88);//para o resultado dar true um dos lados tem que ser true.

//conversão de tipos de dados automaticos, + NaN
console.log("10" + 2);
console.log(`10` - 1);
console.log('10' * 2);
console.log(10 * "Não sei");


//Podemos fazr calculos com variavel, funções de calculos, so usando a variavel que foi determinada
let n1 = 10;
let n2 = 2;
console.log(n1 * n2);
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 / n2);

//Alterações de variaveis podem ser feito no meio do código se ela 
//for determinada com LET se for CONST não tem como esta alterando.
//Notavel que a primeira varivael recebe uma informação e a seunga resce outro, mesmo assim é alteraldo
//Const não deixa altera a informação passada na primeira variavel.
let nome = "Edilson";
let idade = 33;
const cpf1 = "081.264.334.85"
console.log(`O seu nome é: ${nome} a sua idade é: ${idade}, seu CPF é: ${cpf1}`);

nome = "Juliana";
idade = "32";
const cpf2 = "082.054.214.80";
console.log(`O seu nome é: ${nome} a sua idade é: ${idade} seu CPF é: ${cpf2}`);



//numeração maior, menor, arendodamento para cima e arrendondar numero
let numeroMax = Math.max(44, 55, 454, 2);
console.log(`O numero maior é: ${numeroMax}`);//apresenta o numero maior.
let numeMenor = Math.min(2, 3.3, 0.001, 455);
console.log(`O numero menor é: ${numeMenor}`);//apresenta o numero menor
let numeroAren = Math.round(3.6565);
console.log(`Arendondamento de numero: ${numeroAren}`);
let numeroCima = Math.ceil(8.665135);
console.log(`Arendondamento para cima ${numeroCima}`);





//>>>>>>>Os exemplos abaixo seguem com a função prompt<<<<<<


//função prompt da um imput para o ussuario guarda a informação, o usuario adiciona a informação a qual o prompt solicita
//podemos no final adicionar um alert constando os dados do usuario.
let sueNome = prompt("Digite o seu nome: ");
console.log(`Ola ${sueNome}, seja bem vindo`);
let suaIdade = prompt("Qual a sua idade:");
console.log(`A sua idade é: ${suaIdade}`);
let seuCpf = prompt("Digite o seu CPF:");
console.log(`O seu CPF é: ${seuCpf}.`);

alert(`Seu dados foram coletados. \n nome: ${sueNome} \n idade: ${suaIdade} \n CPF: ${seuCpf} \n se seus dados estiverem correto, confirme no OK.`);



//função IF liberação de entrada maior de idade.
let maiorIdade = prompt("Digite a sua idade:");

if (maiorIdade <= 17) {
    console.log("Proibido a entrada entrada");
    alert("Proibido a entrada entrada");
}
if (maiorIdade >= 18) {
    console.log("Entrada Liberada");
    alert("Entrada Liberada");
}


let idadeCnh = prompt("Digite a sua idade");
let numeroCnh = prompt("Voce tem CNH");

if (idadeCnh <= 17) {
    console.log("Não é habilitado, porque você é menor de idade");
    alert("Não é habilitado, porque você é menor de idade");

} else if (idadeCnh >= 18 && numeroCnh == "Sim") {
    console.log("Sim, pode dirigir");
    alert("Sim, pode dirigir");

} else if (idadeCnh >= 18 && numeroCnh == "Não") {
    console.log("É maior de idade, mais não é habilitado");
    alert("É maior de idade, mais não é habilitado");
}






//exemplo de esle lombada eletronica
let velocidade = prompt("Qual a velocidade que você passou na lombada:");
if (velocidade <= 80) {
    console.log(`Sua velocidade foi ${velocidade}, você não foi multado`);
    alert(`Sua velocidade foi ${velocidade}, você não foi multado.`);
} else {
    console.log(`Sua velocidade foi ${velocidade}, você foi multado.`);
    alert(`Sua velocidade foi ${velocidade}, você foi multado.`);
}


//podemos libera o acesso confirmando o nome do usuario e sua idade, 
//nesse exemplo usamos if e else com o prompt e alert

let nomeEntrada = prompt("Digite seu nome: ");
let seuCpfEntrada = prompt("Digite seu CPF: ");

if (nomeEntrada == "Edilson", "edilson" && seuCpfEntrada == "08126433485", "081.264.334-85") {
    console.log("Acesso liberado");
    alert("Acesso Liberado");
} else {
    console.log("Acesso Negado")
    alert("Acesso Negado.");
}


//comparação de idade de cristo, com a idade exato 
let numeroS = prompt("Digite a sua idade");

if (numeroS <= 32) {
    console.log("Ainda Falta alguns anos");
    alert("Ainda Falta alguns anos");
} else if (numeroS == 33) {
    console.log("Idade de Cristo");
    alert("Idade de Cristo");
} else {
    console.log("Já Passou!");
    alert("Já passou!")

}


//2 formar de loop WHILE, FOR resumido, com incrementação
let x = 10;

while (x > 0) {
    console.log("O X é: " + x);
    x -= 1;
}


for (let y = 10; y > 0; y--) {//incrementação 
    console.log(`O Y é:  ${y}`);

}




//exemplo de break ele pausa aonde o numero foi informado, com incrementação
for (let c = 0; c < 10; c++) {//incrementação 
    if (c == 9) {
        console.log("Pular");
        break;

    }
    console.log("O C é: " + c);
}



//exemplo de continue ele faz a contagem o numero referenciado informa a menssagem e depois continua, com decrementação

for (let i = 10; i > 0; i--) {//incrementação 

    if (i == 2) {
        console.log("Caiu no continue");
        continue;
    }
    console.log(i);
}


//potencia elevada ao quadrado

const num = 18;

console.log(Math.pow(2, 2));
console.log(Math.pow(3, 2));
console.log(Math.pow(num, 2));



//lista confirmação de nome, caso não tenha na lista a entrada não libera
let nomeAnalise = prompt("Digite seu nome: ");

switch (nomeAnalise) {
    case "Edilson":
        console.log("O nome é Edilson");
        alert("O nome é Edilson");
        break;
    case "Juliana":
        console.log("O nome é Juliana");
        alert("O nome é Juliana");
        break;
    case "Antonio":
        console.log("O nome é Antonio");
        alert("O nome é Antonio");
    default:
        console.log("O nome não esta na lista")
        alert("O nome não esta na lista");
}


//loop for de 100 ate 50 decrementando 
for (let f = 100; f >= 50; f--) {
    console.log(f);
}


//numeros par e impar

for (let d = 0; d <= 50; d++) {

    if (d % 2 == 0) {
        console.log(`Numero par: ${ d }`);
    } else {
        console.log(`Numero impar   ${ d }`);
    }
}