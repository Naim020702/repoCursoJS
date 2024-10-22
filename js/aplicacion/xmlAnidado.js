let cadena = "rosa";
cadena.charAt;

const primerReq = new XMLHttpRequest();

primerReq.addEventListener("load", function () {
    console.log("Datos recibidos");
    const objeto = JSON.parse(this.response);
    console.log(objeto.results[0]);
});

primerReq.addEventListener("error", () => {
    console.log("Error, imposible acceder los datos");
});

primerReq.open("GET", "https://swapi.dev/api/people/");

primerReq.send();

console.log("Primer request enviado");