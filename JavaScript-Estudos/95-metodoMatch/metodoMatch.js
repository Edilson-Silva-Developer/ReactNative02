const frase = "Ola mundo 2023". match(/\d+/);//aceita numeros
const frase1 = "Ola mundo". match(/\d+/);

    console.log(frase);
    console.log(frase1);



const letras = "Ano de nascimento 1989".match(/\w+/);//não aceita espaço em branco
const letras1 = "         ".match(/\w+/);

    console.log(letras);
    console.log(letras1);



const espaco = "Ola mundo novamente".match(/\s+/);//aceita aonde tem espaço, se conter frase com espaço, vai aceitar
const espaco1 = "Olamundonovamente".match(/\s+/);

    console.log(espaco);
    console.log(espaco1);