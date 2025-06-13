
console.log ("hola profe")
//alert("Hola profe, soy tu alumno");
//document.body.innerHTML = "<h1>Hola profe, soy tu alumno</h1>";
//document.body.innerText = "<h1>Hola profe, soy tu alumno</h1>";

const edad = 18;
let edad_dos = 20;
var nombre = "Brayan Duarte";
var string_dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

var impresion = "";
for (let i = 0; i < string_dias.length; i++) {
    console.log(string_dias[i]);
    impresion = impresion + string_dias[i] ;
}

Swal.fire(impresion);

