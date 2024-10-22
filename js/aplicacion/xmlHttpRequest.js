// Forma mas antigua y menos utilizada de acceder o dar con la info contenida en una API
// No se pueden usar promesas con este tipo de objetos

const primerReq = new XMLHttpRequest();

// Que escuche el load, si recibio o no recibio los datos, si pudo conectarse y los datos fueron recibidos. Idem resolve de las promesas
// una forma
// primerReq.addEventListener("load", (datos) => {
//     console.log("Datos Recibidos");
//     // console.log(datos.target.response); //Asi nos da los datos en tipo string
//     // console.log(JSON.parse(datos.target.response)); //los convertimos JSON
//     const objeto = JSON.parse(datos.target.response);
//     console.log(objeto);
// });

//otra forma
primerReq.addEventListener("load", function () {
    console.log("Datos Recibidos");
    
    const objeto = JSON.parse(this.responseText); //o response
    console.log(objeto);
});

// Idem rejec de las promesas. 
primerReq.addEventListener("error", () => {
    console.log("Error, imposible acceder los datos");
});

// Posibilitarnos acceder por alguno de los metodos como get o post 
primerReq.open("GET", "https://swapi.dev/api/people/");

// Esto siempre va al final
primerReq.send();

// Esto se va a ejecutar siempre primero porque tarda menos que la peticion que hacemos
console.log("Primer request enviado");