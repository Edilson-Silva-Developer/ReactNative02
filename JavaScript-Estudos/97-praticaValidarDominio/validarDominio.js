//Validar Dominio 

const validaDominio = /[?www.]\w+\.com.br|.com/;

    console.log(validaDominio.test("www.google.com"));
    console.log(validaDominio.test("www.google.com.br"));
    console.log(validaDominio.test("UOL.com.br"));
    console.log(validaDominio.test("terra.org"));




//Validação para e-maiil.

