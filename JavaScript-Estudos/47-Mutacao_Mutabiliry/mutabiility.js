//mutability  - criar um objeto igual ao outro e ainda referenciando ao antigo

let pessoa = {
    nome: "Edilson"
}


let pessoa2 = pessoa;


let pessoa3 = {
    nome:"Julina"
}
console.log(pessoa3.nome);


pessoa2.nome = "Antonio";
console.log(pessoa.nome);


pessoa.nome = "Silva";
console.log(pessoa2.nome);


console.log(pessoa == pessoa2);//comparação de objetos 
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);
