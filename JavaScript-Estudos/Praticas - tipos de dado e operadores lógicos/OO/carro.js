class Carro{
    constructor(marca,cor,gasolinaREstatne,consumo,pneu){

        this.marca = marca;
        this.cor = cor;
        this.gasolinaREstatne = gasolinaREstatne;
        this.consumo = consumo;
        this.pneu = pneu;
    }

    dirigir(km){
        let litrosConsumido = km / this.consumo;

        this.gasolinaREstatne -= litrosConsumido;
    }

    abastecer(l){
        this.gasolinaREstatne += l;
    }

    pneuGasto(dist){
        
        this.pneu -= dist;
    }
}



let fusca = new Carro("Fusca","Preto",80,18,100);
    console.log(fusca);

    fusca.dirigir(20);
        console.log(fusca);

    fusca.abastecer(40);
        console.log(fusca);
        
    fusca.pneuGasto(60);
        console.log(fusca);