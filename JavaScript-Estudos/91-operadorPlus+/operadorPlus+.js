//Operador Plus + ele aceita quantos numb estiver

const umOuMaisNumeros = /\d+/;

    console.log(umOuMaisNumeros.test("1901989"));//true
    console.log(umOuMaisNumeros.test("  "));//false
    console.log(umOuMaisNumeros.test("Edilson"));//false
    console.log(umOuMaisNumeros.test("Edilson1989"));//true por conter number após a string
    console.log(umOuMaisNumeros.test("1234569874562341"));
