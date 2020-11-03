class Animal { 
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie} tengo ${edad} anios, soy del color ${this.color}`;
    };

    verInformacion()  {
        document.write(this.informacion + "<br>");
    };

    hablar(){};

}

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    }
    //getter y setter
    set setRaza(raza){
        this.raza = raza;
    }
    get getRaza(){
        return this.raza;
    }

    //sobreescribo el método ver información
    verInformacion()  {
        document.write(`${this.informacion} y de la raza ${this.raza} <br>`);
    };

    //sobrescribimos el metodo hablar para personalizarlo por cada tipo de animal.
    hablar() {
        alert("¡WAW!");
    }
}



const perro = new Animal("perro", 5, "rojo");
const perro1 = new Perro ("perro" , 6 , "blanco" , "caniche");
const gato = new Animal ("gato" , 7, "gris");

perro.verInformacion();
gato.verInformacion();
perro1.hablar();
perro1.verInformacion();
document.write("<hr>");
perro1.setRaza = "Pastor Aleman";
perro1.verInformacion();
document.write(perro1.getRaza);

console.log(perro);