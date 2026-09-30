
function Coche(marca, modelo, anio, color, puertas, km, motor) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = parseInt(anio);
  this.color = color;
  this.puertas = parseInt(puertas);
  this.kilometraje = parseFloat(km);
  this.tipoMotor = motor;
}

const prompt = require('prompt-sync')();

// Type your code below this line!


console.log("--- Ingrese los datos del vehículo ---");
const marca = prompt("Ingrese la marca: ");
const modelo = prompt("Ingrese el modelo: ");
const anio = prompt("Ingrese el año: ");
const color = prompt("Ingrese el color: ");
const puertas = prompt("Ingrese número de puertas: ");
const km = prompt("Ingrese el Km: ");
const motor = prompt("¿Motor de combustión o eléctrico?: ");

const miCoche = new Coche(marca, modelo, anio, color, puertas, km, motor);

console.log("\n--- Vehículo Registrado con Éxito ---");
console.log(miCoche.marca+ "," + miCoche.modelo+ "," + miCoche.anio + "," + miCoche.color + "," + miCoche.puertas + "," + miCoche.kilometraje + "," + miCoche.tipoMotor);

