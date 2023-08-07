let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");


function msg(e) {
    console.log(e);
}

btn1.addEventListener("click", msg);

btn2.addEventListener("click", function (event) {
    console.log(event);
});


let sair = document.querySelector("#btn3")

sair.addEventListener("click", () => {
    console.log("Saiu")
});