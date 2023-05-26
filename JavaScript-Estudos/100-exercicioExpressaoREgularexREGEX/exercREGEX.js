//REGEX só aceita letras maiúsculas, se tiver 1 letras maiúscula ela vai aceitar

const validarmaisucula = /[A-Z]/;

    console.log(validarmaisucula.test("EDILSON"));
    console.log(validarmaisucula.test("Antonio"));
    console.log(validarmaisucula.test("silva"));




//String que termine com ID, digitos terminado com ID

const validarId = /\d+ID/; //(d)aceitar numeros(+)aceitar qualquer quantidade de numeros,(ID)fim(/b)garante que termina com ID

console.log(validarId.test("1989ID"))

const validarId1 = /\d+IE/;//Informação de ID pode ser alterado
console.log(validarId1.test("1989IE"))


//verificação de marca ou registro,Choice Pa+ttern

const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/; //Choice Pattern

    console.log(validarMarca.test("Marca: Nike"));
    console.log(validarMarca.test("Marca: Adidas"));
    console.log(validarMarca.test("Marca: Puma"));
    console.log(validarMarca.test("Marca: Edilson"));


//validar endereço de IP

const validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

    console.log(validarIP.test("192.168.1.1"));
    console.log(validarIP.test("192.168.1"));

//validar CPF

const validarCPF = /\d{3}\.\d{3}\.\d{3}\-\d{2}/;

    console.log(validarCPF.test("081.264.334-85"));
    console.log(validarCPF.test("081.264.334-8"));

//validar RG

const validarRG = /\d{1}\.\d{3}\.\d{3}/;

    console.log(validarRG.test("6.092.095"));
    console.log(validarRG.test("6.092.05"));


//validar nome de usuario no sistema 

let validarNomeUsuario = /^(?=.{3,16}$)[a-zA-Z0-9-_]+$/; //(?=.(a-z)) - Um lookahead positivo que verifica se há pelo menos um caractere (representado por .) seguido de uma letra minúscula de a a z. O (?=...) é uma construção de lookahead positivo, que não faz parte do resultado da regex.

console.log(validarNomeUsuario.test("edilson_1989"));
console.log(validarNomeUsuario.test("Edilson_1989"));
console.log(validarNomeUsuario.test("E.11"));
console.log(validarNomeUsuario.test("E_11"));