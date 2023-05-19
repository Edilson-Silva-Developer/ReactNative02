//Opperador Not ^


const notab = /[^ab]/;
    console.log(notab.test("ab"));//não aceita pós a string passada esta isolada.
    console.log(notab.test("a"));
    console.log(notab.test("a terra é redonda"));//true pós é uma frase 


const notaz = /[^a-z]/;
    console.log(notaz.test("abcdfghijlmnop"));//não aceita pós a informação do not, esta de a-z.
    console.log(notaz.test("ola mundo 2023 "));//vai deixar passara, pois é uma frase completa.


const az = /[a-z]/;//aceita todas as informaçõe
    console.log(az.test("adf654sfg45af6asf"));
    console.log(az.test("asdfhgluoyr"));