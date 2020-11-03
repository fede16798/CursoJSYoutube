//PROBLEMA A
/* Tres chicos van a comprar helado. Los precios no están al lado
su respectivo helado. Ellos quieren comprar el helado más caro con la plata
que tienen7
Roberto tiene $1.5USD - Pedro tiene $2.7USD - Cofla tiene $3USD

Los precios son los siguientes:
Palito de agua: $0.6 usd
palito de crema: $1 usd
bombon helado marca heladix: $1.6 usd
bombon helado marca heladovich: $1.7 usd
bombon helado marca helardo: $2.9 usd
pote de 1/4kg: $2.9 usd

Crear las siguientes soluciones: 
- Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro
- Si hay 2 o mas con el mismo precio, mostrar ambos
- Cofla quiere saber cuanto es el vuelto
*/

let palitoDeAgua = 0.6;
let palitoDeCrema = 1;
let bombonHeladoHeladix = 1.6;
let bombonHeladoHeladovich = 1.7;
let bombonHeladoHelardo = 2.9;
let poteUnCuarto = 2.9;

let dineroCofla = parseFloat(prompt("ingresar monto Cofla"));
let dineroRoberto = parseFloat(prompt("ingresar monto Roberto"));
let dineroPedro = parseFloat(prompt("ingresar monto Pedro"));

let heladoAMostrar = 0;

let monto = dineroCofla;

    if(monto >= bombonHeladoHelardo){
        document.write(`<p> bombon Helardo = ${bombonHeladoHelardo}</p>`);
        document.write(`<p> pote de un cuarto = ${poteUnCuarto}</p>`);
        heladoAMostrar = poteUnCuarto;
    } else if (monto >= bombonHeladoHeladovich){
        heladoAMostrar = bombonHeladoHeladovich;
        document.write(`<p> bombon Heladovich = ${bombonHeladoHeladovich}</p>`);
    } else if (monto >= bombonHeladoHeladix){
        heladoAMostrar = bombonHeladoHeladix;
        document.write(`<p> bombon Heladix = ${bombonHeladoHeladix}</p>`);
    } else if (monto >= palitoDeCrema){
        heladoAMostrar = palitoDeCrema;
        document.write(`<p> palito de Crema = ${palitoDeCrema}</p>`);
    } else if (monto >= palitoDeAgua ){
        heladoAMostrar = palitoDeAgua
        document.write(`<p> palito de agua = ${palitoDeAgua} </p>`);
    } else {
        document.write("no te alcanza para nada");
    }
    if(monto == dineroCofla){
        vuelto = dineroCofla - heladoAMostrar;
        document.write(`El vuelto es ${vuelto}`);
    }
