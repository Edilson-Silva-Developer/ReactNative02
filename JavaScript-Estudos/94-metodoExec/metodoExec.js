//Meotodo Exec


const digitos = /\d+/;//aceita numeros

console.log('d')
console.log(digitos.exec("Ano de nascimento 1989"));
console.log(digitos.exec("Ano de nascimento"));




const letras = /\w+/;//não aceita espaço em branco
    console.log('w')
    console.log(letras.exec("Ano de nascimento 1989"));
    console.log(letras.exec("1989"));
    console.log(letras.exec("   "));



const espaco  = /\s+/;//aceita aonde tem espaço, se conter frase com espaço, vai aceitar
    console.log('s');
    console.log(espaco.exec("Olamundo2023"));
    console.log(espaco.exec("     "));



const letras2 = /\D+/;//aceita string, caracteres que não seja digitos, aceita espaço 
    console.log('D');
    console.log(letras2.exec("Olá mundo 2024"));
    console.log(letras2.exec("2024"));
    console.log(letras2.exec("    "));

    

    const letras3 = /\W+/;//não aceita numeros.
    console.log('W')
    console.log(letras3.exec("Ano de nascimento 1989"));
    console.log(letras3.exec("1989"));
    console.log(letras3.exec("   "));
    console.log(letras3.exec("2023"));


    const espaco1  = /\S+/;//não aceita espaço
    console.log('S');
    console.log(espaco1.exec("Ol amundo 2023"));
    console.log(espaco1.exec("     "));
    console.log(espaco1.exec("2023"));


    const qualquer = /.+/;//qualquer caractere, meno nova linha, aceita qualquer tipo, qualquer caractere, menos nova linha 
        console.log('.');
        console.log(qualquer.exec("Ola mundo 2023"));
        console.log(qualquer.exec("2023"));
        console.log(qualquer.exec("      "));