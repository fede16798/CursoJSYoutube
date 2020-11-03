/* Problema A:
- dejar pasar solo a los +18
- la primer persona de que entre después de las 2am, no paga
*/
let free = false;

const validarCliente = time => {
    let edad = parseInt(prompt("¿Cual es tu edad?"));
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free === false) {
            document.write("<br>Que suerte. Pasas gratis.<br>");
            free = true;
        } else {
            document.write("<br>Podes pasar, son 1000 dolares la entrada.<br>");
        }
    } else {
        document.write("<br> Sos menor. Vuelve cuando cumplas 18 <br>");
    }
}


validarCliente(12);