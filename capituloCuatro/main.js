let frutas = ["manzana" , "pera" , "naranja", "uva", "banana"];
//resultado = frutas.filter(elemento => elemento.length > 4);
let resultado = [];
resultado = frutas.forEach(elemento =>{
    if(elemento.length > 4){
        resultado.push(elemento);
    }
});
//resultado = frutas.slice(0,3);
//resultado = frutas.join("-");

//frutas.splice(1,0,"sandia" , "melon");
//frutas.sort();
//frutas.reverse();

document.write(resultado);
//document.write(frutas);


//let cadena = "   cadena de prueba   ";
//resultado = cadena.trim();
//resultado = cadena.toString();
//esultado = cadena.split("");
//resultado = cadena.repeat(2);
//resultado = cadena.padStart(25, "abc ");
//let resultado = cadena.lastIndexOf("prueba");
//resultado = cadena.indexOf("dena");
//resultado = cadena.concat(" Esta es la cadena que acabo de agregar");
//resultado = cadena.startsWith(cadena2);
//resultado = cadena.includes(cadena2);