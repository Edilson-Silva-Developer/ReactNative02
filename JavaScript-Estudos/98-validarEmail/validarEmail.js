const validarEmail = /\w+@\w+\.\w+/; //1 -texto,2-aroba,3-dominio,4-ponto,5-conteudo alfa numerico.


console.log(validarEmail.test("edilson@gmail.com"));
console.log(validarEmail.test("@gmail.com"));
console.log(validarEmail.test("edilson@gmail.com.br"));
console.log(validarEmail.test("edilson@gmail"));