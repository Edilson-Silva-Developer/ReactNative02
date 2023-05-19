
document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - soverte / 1 - suco </br>");
document.write("</br> 2 - Coca cola / 3 - Salgado </br></br>");

//Switch
function pedir() {

    x = prompt("O que deseja pedir ?");

    switch (x) {

        case "0":
            alert("Você pediu um soverte !");
            break;
        case "1":
            alert("Você pediu um suco !");
            break;
        case "2":
            alert("Você pediu uma coa-cola !");
            break;
        case "3":
            alert("Você pediu um Salgado !");
            break;
        default:
            alert("Ops não temos essa opção!!");
            break;

    }

}