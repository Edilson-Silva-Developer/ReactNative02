//Exceptions

function saudacao(nome){
    if(typeof nome != 'string'){
        throw new Error ("O parâmetro nome precisa se string");//execeptions
    }else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Edilson");
saudacao("1989")



function numero(num){
    if(typeof num != "number"){
        throw new Error ("O parámetro numero precisar ser Number sem aspas");//execeptions
    } else{
        console.log(`O numero é ${num}`)
    }
}

numero(1990);
numero("Edilson");