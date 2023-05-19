

document.write("</br><b>Faça seu pedido: </br>");
document.write("</br><b> 1 - Sorvete </br>");
document.write("</br><b> 2 - Agua mineral </br>");
document.write("</br><b> 3 - Salgado</br>");
document.write("</br><b> 4- Coca-cola</br>");

function pedido() {

    x = prompt("O que deseja pedir ? ");

    switch (x) {


    case "1":
            alert("Você pediu um sorevete !");
                break;
    case "2":
            alert("Você pediu uma agua mineral !");
                break;
    case "3":
            alert("Você pediu um Salgado !");
                break;
    case "4":
            alert("Você pediu uma Coca-Cola");
                break;
    default:
            alert("ops não temos essa opção, no momento.")
                break;

    }
}

alert("Faça seu pedido agora!")
