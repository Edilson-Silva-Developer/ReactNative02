//Pausa no loop
for ( let i = 5; i <20; i = i +1){
    if( i % 10 == 0){
        console.log(`Saiu do loop`);
        break;
    }
    console.log(`Prosseguindo o loop`);
}

//quando chega na determinda caondição ele pausa nesse caso quando chega no numero 10 ele imprime a mensagem.
let nome = "Edilson";

for (let x = 0; x < 11; x = x + 1){

    if( x == 3){
        nome = "Edilson";
    }

    if( x == 9 && nome == "Edilson"){
        console.log("O nome é Edilson, pode parar");
        break;
    }

    console.log(x);
}