//**Argumentos Opcionais*/
/*Podemos chamar uma função em JS sem o número igual de parâmetros determinados**/
function soma (a,b){

if ( a ==undefined || b == undefined){
    console.log("Esta função precisa ter os dois argumentos");
}else{
    return a + b;
}
}
console.log(soma(1));
console.log(soma(10,2));





function saudacao ( nome, idade){
    if(idade === undefined){
        console.log("Olá " + nome);
    }else{
        console.log("Olá "+ nome + " você temm " + idade + " anos");
    }
}
saudacao("Edilson");
saudacao("Edilson",33);