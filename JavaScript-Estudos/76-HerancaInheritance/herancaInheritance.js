//Herança

class caninos {
        constructor(patas){

            this.patas=patas;
        }
}

let coiote = new caninos(4);    
    console.log(coiote);


class cachorro extends caninos{
    constructor(patas,raca){
        super(patas, patas);
        this.raca = raca;
    }
}

let pug =  new cachorro (4, "Pug");
    console.log(pug);

let pastor = new cachorro(4,"Pastor");
    console.log(pastor);