//calculadora feito com objetos e seus metodos.

const calculadora = {//objeto

    soma: function (a, b) { //metodos
        return a + b;
    },
    subtrair: function (a, b) {
        return a - b;
    },
    multplicar: function (a, b) {
        return a * b;
    },
    dividir: function (a, b) {
        return a / b;
    },

}


console.log(calculadora.soma(10,2));
console.log(calculadora.subtrair(8,2));
console.log(calculadora.multplicar(20,2));
console.log(calculadora.dividir(60,2));