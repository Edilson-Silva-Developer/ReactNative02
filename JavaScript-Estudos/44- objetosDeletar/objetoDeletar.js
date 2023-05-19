let pessoa = {

    nome: 'Edilson',
    idade: 33,
    profissao: 'Programador'
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);


//deletando um objeto
delete pessoa.idade;
console.log(pessoa.idade);

console.log(pessoa);

//adicionado
pessoa.idade = 34;
console.log(pessoa.idade);
pessoa.endereco = 'Av.Beira rio';
console.log(pessoa.endereco);
pessoa.casado = 'Casado';
console.log(pessoa.casado);