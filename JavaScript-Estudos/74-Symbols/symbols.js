//propriedade de objetos, não pode ser alterado funciona como uma constante 

class Cachorro {
    constructor(raca,cor,orelhas,rabo){

        this.raca = raca;
        this.cor = cor;
        this.orelhas = orelhas;
        this.rabo = rabo;
    }
}

Cachorro.prototype.latir = function(){ 
    console.log("AUAUAU");
}

Cachorro.prototype.raca = "Labrador";

    let patas = Symbol();//symbol função para usar quando não for feito alteração 
    Cachorro.prototype[patas] = 4;

    let caramelo = new Cachorro("RND","Caramelo",2,1);
console.log(caramelo);
        caramelo.latir()


console.log(Cachorro.prototype.raca);
console.log(caramelo.raca);

//acessando symbol
console.log(Cachorro.prototype[patas]);
console.log(caramelo[patas]);






class carro{
    constructor(marca,porta,motor,arCodi,arBer){

        this.marca=marca;
        this.porta=porta;
        this.motor=motor;
        this.arCodi=arCodi;
        this.arBer=arBer
    }
}
let rodas = Symbol();
    carro.prototype[rodas] = 4;


let HB20 = new carro("HB20","4",1.0,"Sim","Sim")
    console.log(HB20); 
    console.log("HB20 rodas: "+HB20[rodas]);
    

carro.prototype.marca = "Celta";//overrider adicionado
    console.log(carro.prototype.marca);

        console.log("Rodas: "+carro.prototype[rodas]); 