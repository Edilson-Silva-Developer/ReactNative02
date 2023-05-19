/**
 * inserre carecteres, antes da String, exemplo SKU de produtos com qauntidade de numeraçõa padrão,
podendo ser alterado a quantidade de casas decimais e o numero padrão
O primeiro argumento é o limite que desejamos que fique a string toda 
 */

let sku = "18";
    console.log(sku.padStart(6, "0"));


let sku2 = "1989";
    console.log(sku2.padStart(6, 0));