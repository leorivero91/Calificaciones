let notaResu, nota1, nota2, nota3: number;

let nombre = prompt("Ingrese nombre del Alumno");
console.log("Alumno :" + nombre);

while (nombre !== "") {
  nota1 = Number(prompt("Ingrese nota parte Practica"));
  nota2 = Number(prompt("Ingrese nota parte Problemas"));
  nota3 = Number(prompt("Ingrese nota parte Teorica"));

  if (
    nota1 > -1 &&
    nota2 > -1 &&
    nota3 > -1 &&
    nota1 <= 10 &&
    nota2 <= 10 &&
    nota3 <= 10
  ) {
    let notaResu: number = 0;
    console.log("La nota final es", nota1 * 0.1 + nota2 * 0.5 + nota3 * 0.4);
  } else {
    console.log("Error en el ingreso de datos");
  }
  nombre = prompt("Ingrese nombre del Alumno");
  if (nombre !== "") {
    console.log("alumno :" + nombre);
  }
}
