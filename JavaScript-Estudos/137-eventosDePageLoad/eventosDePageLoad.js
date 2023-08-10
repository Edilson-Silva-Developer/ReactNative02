window.addEventListener("load", function(){

    alert("Asine os nosso termos de uso");
});


/** 
window.addEventListener("beforeunload", function(e){

    event.returnVale(null);
});

escrito  errada
*/



/**Escrito correto, consulta feita no chat GPT */
window.addEventListener("beforeunload", function(event) {
    event.returnValue = null; 
});