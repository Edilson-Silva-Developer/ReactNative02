let btn1 =  document.querySelector("#btn1");
let btn2 =  document.querySelector("#btn2");
let btn3 =  document.querySelector("#btn3");


    function msg(){
        console.log("Clicou em mim!");
    }

    btn1.addEventListener("click", msg);

    btn2.addEventListener("click", function(){
        btn1.removeEventListener("click", msg);
    });


    let sair = document.querySelector("#btn3")

        sair.addEventListener("click", ()=>{
            console.log("Saiu")
        });