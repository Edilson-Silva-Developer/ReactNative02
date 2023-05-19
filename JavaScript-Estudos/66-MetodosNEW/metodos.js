//metodos e seus funcionamentos

const humano = {

    comer: function () {
        console.log("Se alimentar");
    },
    exercicio: function () {
        console.log("Particar Exercicio");
    },
    trabalhar: function () {
        console.log("Trablhar, para pagar as contas");
    },
    dormir: function () {
        console.log("Dormir para recarregar as energias");
    }
}
    humano.comer();
    humano.exercicio();
    humano.trabalhar();
    humano.dormir();




//Mais Sobre metodos

const cachorro = {
    latir: function () {
        console.log("AUUAUAUAUAUAU");
    },
    corre: function () {
        console.log("Correndo");
    },
    uivar: function () {
        console.log("Auuuuuuuuu");
    },
    raca: function(){
        console.log("SRD");
    },
    nRaca : function (raca){
        this.raca = raca;//this se refetencia a esta objeto, referencia a ele mesmo o objeto
    },
    getRaca: function(){
        return "A raça é " + this.raca;//imprirmi informações do proprio objetos
    }

}



cachorro.latir();
cachorro.corre();
cachorro.uivar();
cachorro.raca();
cachorro.nRaca("Dashrouse");
    console.log(cachorro.raca);
console.log(cachorro.getRaca());
