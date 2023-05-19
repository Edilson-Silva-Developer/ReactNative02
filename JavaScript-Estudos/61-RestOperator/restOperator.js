/** *Uma forma de uma função receber indefinidos parâmetros;
        *O operador rest vai virar uma array;
        *O parâmetro é definido por:...nome;
        *Podendo ser usado para unificar as informaçõe.
        *condensar varios argumentos em um array e usar como desejar  
         */

 

const numeros = ["Mercedez", "Ferrari", "BMW", "RedBull", "Hass"];
const [primeiro, segundo,terceiro, ...resto] = numeros;

console.log(primeiro); 
console.log(segundo); 
console.log(terceiro); 
console.log(resto); 






const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numeros3 = [7, 8, 9];
const numeros4 = [10, 11, 12];

const todosOsNumeros = [...numeros1, ...numeros2, ...numeros3, ...numeros4];

console.log(todosOsNumeros); 



const nome = ["Edilson Aantonio da Silva"];
const data = ["18/08/1989"];
const nome2=["Juliana Paulino da Silva"];
const data2=["02/09/1990"];

    let dados =[...nome,...data,...nome2,...data2];

        console.log(dados);