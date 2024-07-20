function datoAleatorioDe(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let array = ["hola", 1, null, false, "Pedro", 3.14];
console.log(datoAleatorioDe(array));