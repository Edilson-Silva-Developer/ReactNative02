//overridePrtototype


class Cachorro {
    constructor(raca,patas,cor,orelhas,rabo){

        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
        this.orelhas = orelhas;
        this.rabo = rabo;
    }
}

Cachorro.prototype.latir = function(){ 
    console.log("AUAUAU");
}

Cachorro.prototype.raca = "Labrador";


let caramelo = new Cachorro("RND",4,"Caramelo",2,1);
    console.log(caramelo);
        caramelo.latir()


console.log(Cachorro.prototype.raca);////overridePrtototype
console.log(caramelo.raca);