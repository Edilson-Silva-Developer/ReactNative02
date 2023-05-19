//Operador Question? primeira parte quando e atingida a segunda é opcional, no caso após a (?);

const padrao = /car?ro/;

    console.log(padrao.test("carro"));
    console.log(padrao.test("caro"));
    console.log(padrao.test("cao"));



const padrao2 = /\d+\w?/;//quando e atingida a segunda é opcional, no caso após a (?);

    console.log(padrao2.test("1990"));
    console.log(padrao2.test("1989 - Edilson"));
    console.log(padrao2.test("Edilson"));



const padrao3 = /p?ê?ra/;

    console.log(padrao3.test("pêra"));
    console.log(padrao3.test("pera"));

const padrao4 = /ch?uva/;

 console.log(padrao4.test("chuva"));
 console.log(padrao4.test("xuva"));
 console.log(padrao4.test("cuva"));