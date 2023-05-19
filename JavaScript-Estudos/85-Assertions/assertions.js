//assertions

let arr = [1, 2, 3, 65,];
let arr2 = [];

function interarArray(arr) {
    if (arr.length == 0) {
        throw new Error("O arrya precisa ter pelo menso um elemento");
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(i);

        }
    }
}


function arryVazio(arr) {
    if (arr.length > 0) {
        throw Error("O array não pode tee elementos");

    } else {
        console.log("Agora deu certo");
    }
}


interarArray(arr);
interarArray(arr2);