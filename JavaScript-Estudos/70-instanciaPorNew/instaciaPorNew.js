//*EM muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS também

function Cachorro(raca,patas,cor){

    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.latir = function(){
        console.log("AUUuuuu");
    }
}

    let husky = new Cachorro('Husky', 4,"Cinza");
        console.log(husky);
        husky.latir();

    let Dachshund = new Cachorro("Dachshund", 4 , "Preto");
        console.log(Dachshund);
        Dachshund.latir();




function pcGamer(placaM, memoria, fonte, cooler, processador){

    this.placaM = placaM;
    this.memoria = memoria;
    this.fonte = fonte;
    this.cooler = cooler;
    this.processador =processador;
    this.waterColler = function(){
        console.log("Water Coller Aigo")
    }
}

let xeon = new pcGamer("Killser","Kilser - DDR4 16GB", "ElectroV2","GMR_Rgb","E5-2640-V3");
    console.log(xeon);
        xeon.waterColler();
