//criando ID

function* criadorID(){
    let id = 1;
    while(true){
        yield id++;
    }
}

    let criarID = criadorID();

console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);
console.log(criarID.next().value);