function saludar() {
    console.log("Hola amigos");
}

function callback(funcion) {
    funcion();
}

callback(function() {
    console.log("Hola Mundo");
});

setTimeout(function() {
    console.log("Esto demora 5 segundos")
}, 5000);