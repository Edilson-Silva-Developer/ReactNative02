let buton = document.querySelector("button");

buton.addEventListener("click", () =>{
    console.log("Clicou em min!");
});

let buton2 = document.querySelector("#box");

buton2.addEventListener("click", () =>{

    console.log("Clicou em min novamente")
});

let buton3 = document.querySelector("#box2")

buton3.addEventListener("click", () =>{

    console.log("Voltou a clicar")
});


let sair = document.querySelector("#quit");

sair.addEventListener("click", () =>{

    console.log("Você saiu !")
});


let sairR = document.querySelector("#quitR");

sairR.addEventListener("click", () =>{

    console.log("Saiu e voltou!")

});