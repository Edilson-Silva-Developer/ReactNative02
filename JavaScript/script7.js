function tecladoApertado(evento){

console.log("Teclado apertado " + evento.keyCode); //consegue saber qual botão foi precionnado por código

    if(evento.keyCode ==13){
        console.log('Voce apertou o enter');

    }

}

function soltouOteclado(){
    console.log('Soltou o teclado!');

}

function apertouNoteclado(){

    console.log("Apertou uma tecla")
}