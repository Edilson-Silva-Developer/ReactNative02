//usar o construtor para instaciar uma class

function criaCachorro(raca, patas, cor, orelhas, rabo, uivar){

    let cachorro = Object.create({});
        cachorro.raca = raca;
        cachorro.patas = patas;
        cachorro.cor = cor;
        cachorro.orelhas = orelhas;
        cachorro.rabo = rabo;
        cachorro.latir = function(){//adicionando um metodo.
            console.log("Latir: AUAUAUAU")
        };
        cachorro.uivar = uivar;
            return cachorro;

}   
    let Dachshund = criaCachorro("Dachshund", 4, "Preto", 1, 1,"AUUUuuuuUUUU" );
        console.log(Dachshund);
        Dachshund.latir();

    let Caramelo = criaCachorro("RND",4,"Caramelo",1,1,"AuUUUuuu");
        console.log(Caramelo);
        Caramelo.latir();