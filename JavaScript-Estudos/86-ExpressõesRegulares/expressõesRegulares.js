//expressão regular 

const reg1 = new RegExp('carro');//inserrindo o regex

    console.log(reg1.test("Tem uma carro na via"));





const reg2 = /bike/;
    let text = "A uma bike na rua";
        console.log(reg2.test("Tem bike"));//verificação da palavra
            console.log(reg2.test(text));//verificação no texto;




            

//verificação direto no console.log
console.log(/livro/.test("tem um livro encima da mesa ?"));
console.log(/agulha/.test("palheiropalheiropalheiroagulhapalheiropalheiropalheiro"));//agulha no palheirio.


