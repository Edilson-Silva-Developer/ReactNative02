class carro {
    constructor(modelo, ano, rodas) {

        this.modelo = modelo;
        this.ano = ano;
        this.rodas = rodas;
    }
    arcondi() { //metodo dentro da função 
        console.log("Ar-Condicionado incluso");
    }
    airberg() {
        console.log("AirBergue");
    }
}

let HB20 = new carro("HB20", 2022, 4);
console.log(HB20);
HB20.arcondi();
HB20.airberg();





class Cachorro {
    constructor(raca,patas,cor,orelhas,rabo){

        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
        this.orelhas = orelhas;
        this.rabo = rabo;
    }
}

Cachorro.prototype.latir = function(){ //metodo prototype é passado por fora e não dentro da function,separando metodos e calss
    console.log("AUAUAU");
}

let caramelo = new Cachorro("RND",4,"Caramelo",2,1);
    console.log(caramelo);
        caramelo.latir();




class pcGamer {
    constructor(placaM,memoria,processador,fonte){

        this.placaM = placaM;
        this.memoria = memoria;
        this.processador = processador;
        this.fonte = fonte;
    }

    coolerRGB(){
        console.log("Cooler_RGB"); // exemplo de metodo prototype dentro e fora da class
    }
}

pcGamer.prototype.waterColler = function(){
    console.log("Water-Cooler - aigo");
}

let xeon2 = new pcGamer("Kilsser","Kilsser - DDR4 - 16GB","E5 2640 v3","Electra V2");
    console.log(xeon2);
        xeon2.waterColler();
            xeon2.coolerRGB();