//REGEX só aceita letras maiúsculas, se tiver 1 letras maiúscula ela vai aceitar

const validarmaisucula = /[A-Z]/;

    console.log(validarmaisucula.test("EDILSON"));
    console.log(validarmaisucula.test("Antonio"));
    console.log(validarmaisucula.test("silva"));




//String que termine com ID, digitos terminado com ID

const validarId = /\d+ID/; //(d)aceitar numeros(+)aceitar qualquer quantidade de numeros,(ID)fim(/b)garante que termina com ID

console.log(validarId.test("1989ID"))

const validarId1 = /\d+IE/;
console.log(validarId1.test("1989IE"))