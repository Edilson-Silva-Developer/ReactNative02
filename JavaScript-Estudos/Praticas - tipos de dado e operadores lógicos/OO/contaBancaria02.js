//conta bancaria especial 

class contaB {
    constructor(saldoCC, saldoCP, juros) {

        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }
    deposito(valor) { //aplicando os metodos deposito e saque 
        this.saldoCC += valor;
    }
    saque(valor) {
        this.saldoCC -= valor;
    }
    transferenciaCP(valor) {//aplicando metodos trsnferencia de contas
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor) {
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }
    jurosDeAniversario() { //metodo dos juros
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }

}



//criação de conta nova enderdano a herança,Herança Inheritance
class contaEspecial extends contaB {
    constructor(saldoCC, saldoCP, juros) {
        super(saldoCC, saldoCP, juros * 2)
    }
}



let inter = new contaB(1430, 100, 1);//conta normal
console.log(inter);

inter.saque(430);
console.log(inter);

inter.deposito(100);
console.log(inter);

inter.transferenciaCP(500);
console.log(inter);

inter.transferenciaCC(100);
console.log(inter);

inter.jurosDeAniversario()//juros da conta CP
console.log(inter);

let picPay = new contaEspecial(2000, 120, 2);//conta especial
console.log(picPay);

picPay.saque(200);
console.log(picPay);

picPay.jurosDeAniversario();//juros da conta CP
console.log(picPay);