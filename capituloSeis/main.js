//let parrafo = document.getElementById("parrafo");
//let parrafo = document.getElementsByTagName("p");
//let parrafo = document.querySelector("#parrafo");
//let parrafo = document.querySelectorAll(".parrafo");

//const rangoEtario = document.querySelector(".rangoEtario");
/*document.write(`<br> ${rangoEtario.getAttribute("type")} <br>`);
rangoEtario.setAttribute("type", "text");
document.write(`<br> ${rangoEtario.getAttribute("type")} <br>`);
*/
//rangoEtario.removeAttribute("type");

//const titulo = document.querySelector(".titulo");
//titulo.setAttribute("contentEditable", "true");
//titulo.setAttribute("dir", "rtl");
//titulo.setAttribute("hidden", "true");
//titulo.setAttribute("tabindex", "0");
//titulo.setAttribute("title", "prueba");

/*-----------------------------------INPUT---------------------------------------------------------------*/
/*const input = document.querySelector(".input-normal");
document.write(input.className);

input.type = "text";*/
/*--------------------------------------STYLE------------------------------------------------------------*/
/*
const titulo = document.querySelector(".titulo");
titulo.style.color = "blue";
titulo.style.backgroundColor = "red";
titulo.classList.add("grande");
let valor = titulo.classList.item(1);
let valor2 = titulo.classList.contains("titulo");
titulo.classList.toggle("titulo");
titulo.classList.replace("grande", "chico");*/
/*--------------------------------------Elementos------------------------------------------------------------*/
/*let titulo = document.querySelector(".titulo");
let resultado = titulo.innerText;
document.write(resultado);*/
/*--------------------------------------Creación de Elementos------------------------------------------------------------*/
/*
const fragmento = document.createDocumentFragment();
for (let i = 0; i < 20; i++) {
    const item = document.createElement("LI");
    item.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item);
}
contendor.appendChild(fragmento);*/
/*--------------------------------------obtencion de hijo------------------------------------------------------------*/
/*const primerHijo2 = contendor.firstChild;
const primerHijo = contendor.firstElementChild;
const todosLosNodos2 = contendor.childNodes;
const todosLosNodos = contendor.children;
for (const hijo of todosLosNodos) {
    console.log(hijo);
}
console.log(todosLosNodos);*/
/*--------------------------------------metodos de hijo------------------------------------------------------------*/
const contendor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
parrafo.innerHTML = "parrafo";
const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML = "titulo nuevo";
const h2Viejo = document.querySelector(".h2")
//contendor.replaceChild(h2Nuevo,h2Viejo);
//contendor.removeChild(h2Viejo);

let respuesta = h2Viejo.hasChildNodes();

respuesta = h2Viejo.parentElement;
console.log(respuesta);
let h4 = document.querySelector("h4");
console.log(h4.nextElementSibling);