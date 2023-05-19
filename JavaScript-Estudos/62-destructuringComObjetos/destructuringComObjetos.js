/**
 * criando variavel aparte de um objeto
 * desitritura o objeto em variavel
 * pode ser transformado em variavel ou constante 
 * 
 */


let obj = {

    rodas: 4,
    portas: 4,
    tetosolar: "Sim",
    motor: "2.0",
    turbo: "Sim"
}

const {rodas: vRodas, portas:vPortas, tetosolar:vTetoSolar, motor:vMotor, turbo:vTurbo} = obj;


    console.log("Rodas: " + vRodas);
    console.log("Portas: " + vPortas);
    console.log("Teto Solar: " + vTetoSolar);
    console.log("Motor: " + vMotor);
    console.log("Turbo: " + vTurbo);



let PC = {

    placa: "Xeon",
    memoria: "DDR4",
    placaVideo: "RX580",
    whaterCooler: "Aigo"
}

let {placa: vPlaca, memoria:vMemoria, placaVideo:vPlacadeVideo, whaterCooler:vWhaterCooler} = PC;

    console.log("Placa Mão: " + vPlaca);
    console.log("Memoria: " + vMemoria);
    console.log("Placa de Viedo: " + vPlacadeVideo);
    console.log("WhaterCooler: " + vWhaterCooler);