/*Cada uno debe tener:
	- color
	- peso
	- resolucion de pantalla
	- camara
    - memoria ram
- Deben poder:
	- prender
	- reiniciar
	- tomar fotos
    - grabar
*/
    
class Celular {
    constructor(modelo,color, peso, resolPantalla, camara, memoriaRam){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.resolPantalla = resolPantalla;
        this.camara = camara;
        this.memoriaRam = memoriaRam;
        this.encendido = false;
        this.informacion = ` El celular <b>${this.modelo}</b> tiene las siguientes características: <br>
                            Color: <b>${this.color}</b> <br>
                            Peso: <b>${this.peso}</b> <br>
                            Resolucion de pantalla: <b>${this.resolPantalla}</b> <br>
                            Camara: <b>${camara}mp</b> <br>
                            Memoria Ram: <b> ${this.memoriaRam}</b> <br>`;
    }

    verInformacion()  {
        document.write(this.informacion + "<br>");
    };

    prender() {
        if(this.encendido == false){
            alert("prendiendo celular... " + this.modelo);
            alert(`Celular ${this.modelo} prendido exitosamente`);
            document.write(`acabas de prender el celular ${this.modelo} <br>`)
            this.encendido = true;
        } else {
            alert("El celular ya está prendido salchi");
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando celular... " + this.modelo);
            alert("Celular reiniciado");
            document.write(`acabas de reiniciar el celular ${this.modelo} <br>`)
        } else {
            alert("El celular está apagado");
        }
    }

    tomarFotos(){
        if(this.encendido == true){
            alert("Abriendo Camara... " + this.modelo);
            alert("Foto Tomada con exito");
            document.write(`acabas de tomar una foto con el celular ${this.modelo} <br>`)
        } else {
            alert("El celular está apagado");
        }
    }
    grabar() {
        if(this.encendido == true){
            alert("Abriendo Camara... " + this.modelo);
            alert("Video grabado con exito");
            document.write(`acabas de grabar con el celular ${this.modelo} <br>`)
        } else {
            alert("El celular está apagado");
        }
    }

}

/*- Celulares de alta gama, que hacen lo mismo que los otros y además:
	- grabar en camara super lenta
	- reconocimiento facial
	- tienen una camara extra*/
class CelularAltaGama extends Celular {
    constructor(modelo,color, peso, resolPantalla, camara, memoriaRam, camaraExtra, contrasena){
        super(modelo,color, peso, resolPantalla, camara, memoriaRam);
        this.camaraExtra = camaraExtra;
        this.contrasena = contrasena;
        this.informacion = ` El celular <b>${this.modelo}</b> tiene las siguientes características: <br>
                            Color: <b>${this.color}</b> <br>
                            Peso: <b>${this.peso}</b> <br>
                            Resolucion de pantalla: <b>${this.resolPantalla}</b> <br>
                            Camara: <b>${camara}mp</b> <br>
                            Camara Frontal: <b>${camaraExtra}</b> <br>
                            Memoria Ram: <b> ${this.memoriaRam}</b> <br>`;
    }
    verInformacion()  {
        document.write(this.informacion + "<br>");
    };

    reconocimientoFacial() {
        if(this.encendido == true) {
            let contra = parseInt(prompt("Ingrese su reconocimiento facial"));
            this.contrasena == contra? document.write(`Celular ${this.modelo} desbloqueado con exito <br>`) : document.write(`Reconocimiento facial erroneo`);
        } else {
            alert("El celular está apagado");
        }
    }

    grabarEnCamaraSuperLenta() {
        if(this.encendido == true) {
            alert("Abriendo Camara super lenta... " + this.modelo);
            alert("Video grabado con exito");
            document.write(`Acabas de grabar un video en modo lento con el celular ${this.modelo} <br>`);
        } else {
            alert("El celular está apagado");
        }
    }
}
/*- las Aplicaciones deben contener:
	- cantidad de descargas
	- puntuación
	- peso
- se deben poder:
	- instalar
	- abrir
	- cerrar
    - desinstalar.*/
    
class Aplicacion {
    constructor(cantDescargas, ranking, peso, nombre){
        this.nombre = nombre;
        this.cantDescargas = cantDescargas;
        this.ranking = ranking;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
        this.informacion = `Caracteristicas de la app <b>${this.nombre}</b>: <br>
                            Cantidad de descargas: <b>${this.cantDescargas}</b> <br>
                            Puntuacion: <b>${this.ranking}</b> <br>
                            Peso: <b>${this.peso}</b> <br>`;
    }

    verInformacion() {
        document.write(this.informacion + "<br>");
    }

    desinstalar() {
        if (this.instalada == true) {
            alert("Desintalando app...");
            this.instalada = false;
            alert("App desintalada exitosamente");
        } else {
            alert("La app no está instalada");
        }
    }

    cerrar(){
        if (this.iniciada == true) { 
            alert("Cerrando app...");
            this.iniciada = false;
        } else {
            alert("La app está cerrada.");
        }
    }

    instalar(){
        if (this.instalada == false){
            alert("instalando app...");
            this.instalada = true;
            alert("App instalada");
        } else {
            alert("la app ya esta instalada");
        }
    }

    abrir(){
        if (this.instalada == true) {
            alert("Iniciando app...");
            this.iniciada = true;
        } else {
            alert("Primero debe instalar la app");
        }
    }



}


/*
const motorola = new Celular("motoG 7","15g" , "negro" , "1200px" , "24" , "8gb");
const samsung = new Celular("samsung a5", "17g" , "blanco" , "1500px" , "19" , "6gb");
const lg = new Celular("LG pro","12g", "azul" , "1300px" , "20" , "6gb");

motorola.verInformacion();
samsung.verInformacion();
lg.verInformacion();

const SAMSUNG = new CelularAltaGama ("Galaxy note 10" , "12g", "blanco" , "2400px" , "40" , "16gb", "15" , 2);
const IPHONE = new CelularAltaGama ("Iphone pro max" , "15g", "rosa" , "2400px" , "35" , "16gb" , "12" ,  2);

SAMSUNG.verInformacion();
IPHONE.verInformacion();*/

const TINDER = new Aplicacion("1M" , "4,5 estrellas" , "77mb", "Facebook");
const FACEBOOK = new Aplicacion ("10M" , "4,3 estrellas" , "120mb", "Tinder");
TINDER.verInformacion();
FACEBOOK.verInformacion();