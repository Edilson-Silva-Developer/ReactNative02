//meotodo prototype

function carro (modelo,ano,rodas){

    this.modelo = modelo;
    this.ano = ano;
    this.rodas = rodas;
}

carro.prototype.arcondi = function(){ //metodo prototype é passado por fora e não dentro da function,separando metodos e calss
    console.log("Ar-Condicionado incluso");
}
carro.prototype.airberg = function(){
    console.log("AirBergue");
}
let HB20 = new carro("HB20",2022,4);
    console.log(HB20);
        HB20.arcondi();
        HB20.airberg();