//conta bancaria

class contaBancaria{
    constructor(saldo){

        this.saldo=saldo;
    }

        deposito(valor){
            this.saldo += valor;
        }
        saque(valor){
            this.saldo -= valor;
        }

}

//add saldo na conta
    let conta = new contaBancaria (100);
        conta.deposito(200);
            console.log("Saldo atual: "+conta.saldo);
    
    //saque da conta
    conta.saque(50);
        console.log("Saldo Atual, após o Saque: "+conta.saldo)





//carrinho de compras

