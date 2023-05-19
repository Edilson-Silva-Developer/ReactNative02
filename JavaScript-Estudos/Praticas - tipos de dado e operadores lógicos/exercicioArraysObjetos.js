let itens = ["macaco","leão","tigre","urso"];

console.log(itens);
console.log(itens[1]);
console.log(itens[3]);



/*************************************************************************/

//conta quantos elementos tem dentro da array
let carro=["porta","Pneu","motor"];
    let moto =["Pneu","Guidão","bau","embreagem"];

        console.log(carro.length);
            console.log(moto.length)





//objeto, objetos e sempre com chaves 

let onibus ={

    rodas : 8,
    passageiro : "80",
    portas : 2
}

console.log("Rodas: " + onibus.rodas);
console.log("passageiro: "+onibus.passageiro);
console.log("Portas: "+onibus.portas);


let janelas = {//adicionado a informação dentro do objeto 

    janelas: 20,
}
Object.assign(onibus, janelas)

    console.log(onibus);


onibus.janelas = 20;//adicionado a informação dentro do objeto 
    console.log(onibus);
        //console.log(onibus.janelas);




//verificação de nome na lista
        let  names = ["Edilson","Juliana","Paulino","Silva"];

            if(names.includes("Edilson")){
                console.log("O nomes esta lista");
            }else{
                console.log("O nome não esta na lista")
            }




//verificar quantidade de elementos na array


let nums = [1,23,54,65,78,5,4,54,55,];
let nums2 =[4,2,66,5];


function verificarelementosArray(arr){
    if(arr.length >= 5){
        console.log("Quantidade boa");
        }else{
            console.log("Pouca quiantidade");
        }
    }


    verificarelementosArray(nums);//invocando a array
    verificarelementosArray(nums2);





//loops em array ele informar todo os elementos dentro da array

let frut = ["Maçã","banana","laranla","Melão","pera"];
    for ( let a = 0; a < frut.length; a ++){
        console.log(frut[a]);
    }



//JSON atribuir a variavel e acessando, serve transporta injformação, propriedades são informações

let dados = {

    "nome" : "Edilson",
    "idade" : 33,
    "Profissão" : "Programador"
}

console.log(dados.nome);
console.log(dados.idade);
console.log(dados.Profissão);



//crias um array aparte de uma frase e imprimir 

let frases = "Ser um programador bom requer muita prática";

    let arrfrases = frases.split(" ");

    for (let i = 0; i < arrfrases.length; i ++){
        console.log(arrfrases[i]);
    }

