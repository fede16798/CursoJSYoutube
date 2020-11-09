let materias = {
    fisica: ["fisica",90,6,4],
    matematica: ["matematica", 79,8,2],
    logica: ["logica",96,8,4],
    programacion: ["programacion",50,9,4],
    baseDeDatos: ["base de datos", 100,10,4]
}

const aprobo = () => {
    for (materia in materias) {
        let asistencias = materias[materia][1];
        let promedio = materias[materia][2];
        let trabajos = materias[materia][3];

        if (asistencias > 75 && promedio > 6 && trabajos > 2) {
            console.log(`%c La materia ${materias[materia][0]} está aprobada`, "color: green");
        } else {
            console.log(`%c La materia ${materias[materia][0]} está desaprobada`, "color: red");
        }
    }
}

aprobo();