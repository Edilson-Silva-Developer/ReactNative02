//Regex Caracteres Especiais

const dia = /\d\d/;//verificar se tem 2 digitos numericos

    console.log(dia.test("2019"));
    console.log(dia.test("asd"));
    console.log(dia.test("18"));
    console.log(dia.test("add1"));


    const dias = /\d\d/;//verificar se tem 2 digitos numericos, validação de lenfth para ser direto no digito dia que tem 2 digitos

    console.log(dias.test("2019") && "2019".length == 2);
    console.log(dias.test("asd"));
    console.log(dias.test("18")&& "18".length == 2);//true
    console.log(dias.test("add1"));


const palavrasPeloMenosTresLEtras = /\w\w\w/;

    console.log(palavrasPeloMenosTresLEtras.test("Edilson"));
    console.log(palavrasPeloMenosTresLEtras.test("oi"));
    console.log(palavrasPeloMenosTresLEtras.test("dia"));