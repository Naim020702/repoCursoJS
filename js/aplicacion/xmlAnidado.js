let cadena = "rosa";
cadena.charAt;

const primerReq = new XMLHttpRequest();

primerReq.addEventListener("load", function () {
    console.log("Datos recibidos");
    const objeto = JSON.parse(this.response);
    const filmUrl = objeto.results[0].films[1];
    console.log(filmUrl);

    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener("load", function () {
        const film = JSON.parse(this.response);
        const titulo = film.title;

        console.log(titulo)
        // console.log(JSON.parse(this.response));
    });

    filmReq.addEventListener("error", () => {
        console.log("Error, imposible acceder al film");
    });

    filmReq.open("GET", filmUrl);

    filmReq.send();
});

primerReq.addEventListener("error", () => {
    console.log("Error, imposible acceder los datos");
});

primerReq.open("GET", "https://swapi.dev/api/people/");

primerReq.send();

console.log("Primer request enviado");