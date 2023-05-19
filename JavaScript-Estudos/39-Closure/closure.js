//Uma função que se lembra so ambiente em que ela foi criada

function lembrarSoma(x) {//usando function
    return function (y) {
        return x + y;
    }
}
let soma1 = lembrarSoma(10);
console.log(soma1(5));
let soma2 = lembrarSoma(1989);
console.log(soma2(1990));
let soma3 = lembrarSoma(32);
console.log(soma3(33));
let nome1 = lembrarSoma("Edilson");
console.log(nome1(" & Juliama"));



let calculo = lembrarSoma(50);//usando modo simples junto com a função adicionada acima, operação idependente.
console.log(calculo(100));



function somaMenos(j) {
    return function (e) {
        return j - e;
    }
}
let sub1 = somaMenos(1989);
console.log(sub1(1990));
let sub2 = somaMenos(33);
console.log(sub2(32));



function divNumero(u) {
    return function (o) {
        return u / o;
    }
}

let div1 = divNumero(10);
    console.log(div1(2));
let div2 =  divNumero(100);
    console.log(div2(50));







    
//exemplo contador 
function contador(i) {
    let cont = i;
    let somarContador = function () {
        console.log(cont);
        cont++;
    }
    return somarContador;
}
let meuContador = contador(10);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador2 = contador(0);
meuContador2();
meuContador2();
meuContador2();
meuContador2();
meuContador2();






//funcção contado decrementado.
function contador3(g) {//funcção contado decrementado.
    let cont = g;
    let somarContador3 = function () {
        console.log(cont);
        cont--;
    }
    return somarContador3;
}
let meuContador3 = contador3(10);
meuContador3();
meuContador3();
meuContador3();
meuContador3();
meuContador3();
meuContador3();
meuContador3();



