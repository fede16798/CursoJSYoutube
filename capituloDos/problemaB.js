/*Problema B:
- Crear un mini-sistema para registrar presentes(P) y ausentes(A)
- pasados 30 días, mostrar su situación final del alumno
- Maximo de 10% de ausencias*/

let cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos son?"));
let alumnos = [];

for (let i = 0; i < cantidadAlumnos; i++) {
    alumnos[i] = [prompt("nombre del alumno " + (i+1))];
    document.write("<br>" + alumnos[i] );
}

