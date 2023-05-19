//Gettters e Setters metodos que vai setar propriedades 

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("AU AU");
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}
let pastor = new Cachorro("Pastor Alemão", "Sem cor");
console.log(pastor);

//Usando o GET e SET

pastor.setCor = "Marron";//altera o objeto por meio set
console.log(pastor.getCor);//e puxou o valor por meio do get







class carros{
    constructor(marca,portas,motor,cor){

        this.marca=marca;
        this.portas=portas;
        this.motor=motor;
        this.cor=cor;

    }
    get getCor(){
        return this.cor;
    }
    set setCor(cor){
        this.cor = cor;
    }
}

let celta = new carros("Celta",4,4,"Sem cor");
    console.log(celta);

celta.setCor = "Prata";
    console.log(celta.getCor);