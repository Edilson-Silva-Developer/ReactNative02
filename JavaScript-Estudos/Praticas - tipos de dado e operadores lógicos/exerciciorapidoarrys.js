//exercicios arrays
{
let nomes = ['Edilson', 'Antonio','Juliana','Paulino' ];

    console.log(nomes); // exemplo 01 imprimindo informação dentro do array
        console.log(nomes[2]);// identificando o valor do array 2.
            console.log(nomes.length);//informar quantos valores tem na variavel - que é uma propriedade 


            console.log(Object.keys(nomes));//exemplo de chaves,chave e valor da propriedade


            //funcionalidade que deixa a letra de menuscula para maiuscula
            let nomer = 'Edilson';
                console.log(nomer.toUpperCase());//maiusculo - que é um metodo
                    console.log(nomer.toLowerCase());//menusculo - que é um metodo

//Loops em Arrays, Como é uma lista com muitos valores, muitas vezes precisamos ver cada um deles
for (let a = 0; a <= nomes.length; a++){
    console.log(nomes[a]);
}


      }              





{//exemplo de Objetos deletar, informação adicionais, usando como plus
    
let computador = {

        cpu: 'Xeon',
        memoria: 'DDR4',
        fonte: 'ElectroV2',
}
console.log(computador.cpu);
console.log(computador.memoria);
console.log(computador.fonte);
    delete computador.memoria;//remover o valor 
        console.log(computador.memoria);

    computador.memoria = 'DDR4';//adicionou novamento o valor
        console.log(computador.memoria);


let video={//copiando uma prorpiedade de um objeto para outro.

    placaVideo:'RX580-8GB',
    cooler:'walter cooler'
}
    Object.assign(computador, video);//metodo para adicionar a informação.

        console.log(computador);
    }






//mutability
{
let pessoa ={
    nome:"Edilson"
}
console.log(pessoa.nome);

let pessoa2 = pessoa; //pessoa não é iguial ao do inicio

pessoa2.nome = "Juliana";
    console.log(pessoa.nome);

let pessoa3 = {
    nome2:"Paulino"
}
console.log(pessoa3.nome2);

pessoa3.nome2="Silva";
    console.log(pessoa3.nome2);


}







//usado para remover e adicionar elementos na array POP, PUSH,SHIFT e UNSHIFT

{  
      let kitPC = ["Processador i5","Palaca mão", "1-memoria DDR4"];

        console.log(kitPC);

        let movermemoria = kitPC.pop();//removel a ultima informação 
            console.log(kitPC);

    kitPC.push("2-momiras DDR4");//Adicionado elemento na array
            console.log(kitPC);



//adicionado e removendo primeiro elemento da array

    let removerprimeiroele = kitPC.shift();
            console.log(kitPC);

//Adicionando elemento no incio da array
    kitPC.unshift("XEON 2470");
            console.log(kitPC);
        }