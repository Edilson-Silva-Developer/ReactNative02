//podemos declara varias variaveis dentro do function

let A = 180;

function imprimir() {
    let A = 100;
    let B = 500;
    let L = ("Numeração");

    console.log(A);
    console.log(B);
    console.log(L);
}
imprimir();

console.log(A);



//Aprofudando o escopo

let X = 10;
let N = 40;

if (X > 5) {
    let X = 200;
    let N = 500;
    X++;
    N++;
    console.log(X);
    console.log(N);
}
console.log(X);
console.log(N);