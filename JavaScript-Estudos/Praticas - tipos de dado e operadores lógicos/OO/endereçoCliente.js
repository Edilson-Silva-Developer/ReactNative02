//endereço do cliente
class Endereco {
    constructor(rua, bairro, cidade, estado) {

        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua) {
        this.rua = novaRua;
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
    set novaCidade(novaCidade) {
        this.cidade = novaCidade;
    }
    set novoEstado(novoEstado) {
        this.estado = novoEstado;
    }
}


let endereco = new Endereco("Av.Beira Rio", "Fragoso", "Olinda", "PE");
console.log(endereco);

//usando o get e o set para alteraçãoes da informação
endereco.novaRua = "Rua Algodoeiro";
console.log(endereco);

endereco.novoBairro = "Jatoba";
console.log(endereco);
endereco.novaCidade = "Paulista";
console.log(endereco);