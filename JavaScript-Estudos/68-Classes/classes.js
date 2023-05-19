//objeto aparte de uma class/ objeto com prototype e class / prototype com conceito de class

const cachorro = { //isso que compem a base a class
    patas: function () {
        console.log("Patas: " + 4)
    },
    orelhas: function () {
        console.log("Orelhas: " +2)
    },
    rabo: function () {
        console.log("Rabo: " +1)
    },
    latir: function () {
        console.log("AU AU");
    },
    ruivar: function () {
        console.log("AUUUUuuuuuUUU");
    }
}

let labrador = Object.create(cachorro);//metodo do prototype, estanciano objeto, aparte de uma class
labrador.raca = "Labrador";
    console.log("Raça: "+labrador.raca);
    labrador.latir();
    labrador.patas();
    labrador.orelhas();
    labrador.rabo();
    labrador.ruivar();


let Dachshund = Object.create(cachorro);
Dachshund.raca = "Dachshund";
    console.log("Raça: " + Dachshund.raca);    
    Dachshund.latir();
    Dachshund.patas();
    Dachshund.orelhas();
    Dachshund.ruivar();
Dachshund.comprido = "Comprido";
    console.log("O Dachshund é " + Dachshund.comprido);

