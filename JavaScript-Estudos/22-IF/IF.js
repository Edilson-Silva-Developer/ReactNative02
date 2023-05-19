let idade = 18;

if (idade == 18) {

    console.log("A idade é maior de +18");
}

if (idade < 25) {

    console.log("Acesso restrito");
}



let nome = "Edilson";

if (nome == "Edilson" && idade > 17) {

    console.log("Liberado o Acesso!");
}


let passaporte = true;

if ((nome == "Edilson" && idade > 30) || passaporte == true) {

    console.log("Aprovado");
}