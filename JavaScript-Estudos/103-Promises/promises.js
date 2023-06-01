//Promise


let P = Promise.resolve(18);

    console.log("Outros exemplos");

        console.log(P);
    //reaproveitando a promise para usar futuramente.   
        P.then((value)=> {console.log(`O valor é ${value}`)});

        P.then((value)=> {return value + 2})
        .then((value) => {console.log(value)});