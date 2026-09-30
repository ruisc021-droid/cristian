// Refer to Task 6 in your Instructions to complete this task

const lineas = 50; 
let resultados = [];

for (let numero = 1; numero <= lineas; numero++) {
    let palabra = "";

    if (numero % 3 === 0) {
        palabra += "Fizz";
    }
    if (numero % 5 === 0) {
        palabra += "Buzz";
    }
    if (numero % 7 === 0) {
        palabra += "Woof";
    }

    
    if (palabra === "") {
        resultados.push(numero); 
    } else {
        resultados.push(palabra);
    }
}


console.log(resultados);