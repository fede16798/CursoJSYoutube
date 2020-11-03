/*Realizar una calculadora muy sencilla
Tiene que poder realizar: las 4 operaciones basicas, potenciar, raiz cuadrada y cubica*/
class Calculadora{
    constructor(){}

    sumar(num1, num2) {
        return parseInt(num1) + parseInt(num2);    
    }
    restar(num1, num2) {
        return parseInt(num1) - parseInt(num2);    
    }
    multiplicar(num1, num2) {
        return parseInt(num1) * parseInt(num2);    
    }
    dividir(num1, num2) {
        if ( num2 != 0) {
            return parseInt(num1) / parseInt(num2);    
        } else {
            alert("No es posible dividir por cero");
        }
    }
    exponencial(num,exp){
        return num**exp;
    }
    raizCuadrada(num1){
        return Math.sqrt(num1);
    }
    raizCubica(num1){
        return Math.cbrt(num1);
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación desea realizar?");
let operacion = parseInt(prompt("1: suma, 2: resta, 3: multiplicar, 4: dividir, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica"));
let num1, num2, resultado;
if(operacion < 6){
    num1 = prompt("Primer numero para realizar la operacion");
    num2 = prompt("Segundo numero para realizar la operacion");
} else {
    num1 = prompt("Numero para realizar la operacion");
}

switch (operacion) {
    case 1:
        resultado = calculadora.sumar(num1,num2);
        alert(`Tu resultado es ${resultado}`);
        break;
    case 2:
        resultado = calculadora.restar(num1,num2);
        alert(`Tu resultado es ${resultado}`);
        break;
    case 3:
        resultado = calculadora.multiplicar(num1,num2);
        alert(`Tu resultado es ${resultado}`);
        break;
    case 4:
        resultado = calculadora.dividir (num1,num2);
        alert(`Tu resultado es ${resultado}`);
        break;
    case 5:
        resultado = calculadora.exponencial (num1,num2);
        alert(`Tu resultado es ${resultado}`);
        break;
    case 6:
        resultado = calculadora.raizCuadrada(num1);
        alert(`Tu resultado es ${resultado}`);
        break; 
    case 7:
        resultado = calculadora.raizCubica(num1);
        alert(`Tu resultado es ${resultado}`);
        break; 
    default:
        document.write("No seleccionaste ninguna de las opciones disponibles");
        break;
}