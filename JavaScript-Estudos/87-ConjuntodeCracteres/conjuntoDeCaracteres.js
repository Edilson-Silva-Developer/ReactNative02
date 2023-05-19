//consjunto verificar se uma frase ou string tem numeros

const reg1 = /[12346789]/;

    console.log(reg1.test("Temos o número 6"));
    console.log(reg1.test("Temos o número 90"));
    console.log(reg1.test("Temos o número 0"));
    console.log(reg1.test("Temos o número 30"));
    


const reg2 = /[0-20]/;

    console.log(reg2.test("Temos o número 1521452"));
    console.log(reg2.test("Temos o número 311521452"));
    console.log(reg2.test("Temos o número"));