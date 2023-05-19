/***Podemos definri variáveis com os valores de um array utilizando o destructuring
 * usando os valores do indices, não precisa passar os indicis, seguir a ordem que o arrya esta criado.
 */

let datas = [1990, 1989, 1966, 1968];

let [data1, data2, data3, data4] = datas;

console.log(data1);
console.log(data3);
console.log(data2);
console.log(data4);



let objetos = ["Carro", "Casa", "Moto", "Bicicleta"];

let [obj1, obj2, obj3, obj4] = objetos;

    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
    console.log(obj4);
