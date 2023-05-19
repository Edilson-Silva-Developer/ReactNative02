//Instanceof operator


class caninos {
    constructor(patas) {

        this.patas = patas;
    }
}

let coiote = new caninos(4);
console.log(coiote);


class cachorro extends caninos {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }
}

let pug = new cachorro(4, "Pug");
console.log(pug);

let pastor = new cachorro(4, "Pastor");
console.log(pastor);

//aplicando o instanceOF

console.log( new cachorro instanceof caninos);
console.log( pug instanceof caninos);
console.log( pastor instanceof caninos);