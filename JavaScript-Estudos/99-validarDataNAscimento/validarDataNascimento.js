const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/]19[5-9]\d|20[0-4]\d|2050{4}/; // dia, mes, ano - limitando os digitos.



    console.log(validarDataNasc.test('18/08/1989'));
    console.log(validarDataNasc.test("18/8/1989"));
    console.log(validarDataNasc.test("18/08/89"));
    console.log(validarDataNasc.test("18/08/2001"));
    console.log(validarDataNasc.test("18/08/2009"));
    console.log(validarDataNasc.test("18/08/2022"));
    