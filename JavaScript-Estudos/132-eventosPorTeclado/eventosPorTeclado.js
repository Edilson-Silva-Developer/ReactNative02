window.addEventListener("keydown", function (e) {

    if (e.key == 'x') {
        console.log("Apertou a letra x");
    } else if (e.key == "Enter") {
        console.log("Apertou Enter");
    }
});

window.addEventListener("keyup", function (e) {

    if (e.key == "Enter") {
        console.log("Soltou o Enter")
    }
});

//**Eventos de tecla apertando a tecla X e Enter */
