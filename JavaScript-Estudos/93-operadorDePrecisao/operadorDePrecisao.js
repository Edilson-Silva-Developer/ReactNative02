//Operador de Precisão ocorrencia precisa, delimitar o uso do caracteres, operador digitos precisos     


const cep = /\d{5}-\d{3}/;

    console.log(cep.test("53250-130"));
    console.log(cep.test("250-130"));



const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

    console.log(tel.test("(81)99600-1833"));


const rg = /\d{1}.\d{3}.\d{3}/;
    console.log(rg.test("6.902.095"));