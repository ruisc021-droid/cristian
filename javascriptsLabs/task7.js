


 const lineas = 50;
let resultados = []; 


let primos = [3, 5, 7, 11, 13, 17];

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];

for (let numero = 1; numero <= lineas; numero++) {
    let palabra = "";

  
    for (let i = 0; i < buzzWords.length; i++) {
      
        if (numero % primos[i] === 0) {
            palabra += buzzWords[i];
        }
    }

    if (palabra === "") {
        resultados.push(numero);
    } else {
        resultados.push(palabra);
    }
}

console.log(resultados)
