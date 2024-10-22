// const primerPromesa = new Promise((resolve, reject) => {
//     // resolve();
//     // reject();
//     const num = Math.random();
//     console.log(num);
//     if (num < 0.5) {
//         return resolve("True");
//     }
//     return reject("False");
// })

// console.log(primerPromesa);

// const primerPromesa = new Promise((resolve, reject) => {
//     const num = Math.random();
//     console.log(num);
//     if (num < 0.5) {
//         return resolve();
//     }
//     return reject();
// })

// primerPromesa.then(() => {
//     console.log("True");
// });

// primerPromesa.catch(() => {
//     console.log("False");
// });

// primerPromesa.then(() => {
//     console.log("True");
// }).catch(() => {
//     console.log("False");
// });

// Funcion que retorna promesa, video numero 159

// console.log("Comenzó el Programa");

// const funcPromesa = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.random();
//             console.log(num);
//             if (num < 0.5) {
//                 return resolve();
//             }
//             return reject();
//         }, 5000);
//     })
// }

// funcPromesa().then(() => {
//     console.log("True");
// }).catch(() => {
//     console.log("False");
// });

// console.log("Continua el Programa");
// console.log("Continua el Programa");
// console.log("Continua el Programa");
// console.log("Continua el Programa");
// El programa se va a lanzar pero le delega la promesa al navegador, el navegador se queda escuchando que es lo que pasa, que es lo que se reseulve. Y cuando se resuelve le pasa la info a JS
// Toy generando a proposito una demora con el set time out y toy generando un resultado de promesa a proposito tambien

// axios.get

// Promesas 3, video numero 160

console.log("Comenzó el Programa");

// const funcPromesa = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.random();
//             console.log(num);
//             if (num < 0.5) {
//                 return resolve({status: 200});
//             }
//             return reject({status: 404});
//         }, 5000);
//     })
// }

// funcPromesa().then((respuesta) => {
//     console.log(respuesta.status);
//     console.log("True");
// }).catch((respuesta) => {
//     console.log(respuesta.status);
//     console.log("False");
// });

// console.log("Continua el Programa");
// console.log("Continua el Programa");
// console.log("Continua el Programa");
// console.log("Continua el Programa");

const funcPromesa = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const paginas = {
                "/users" : [
                    {id: 1, usuario: "Juan"},
                    {id: 2, usuario: "Pedro"}
                ],
                "/about" : "Esta pagina es de..."
            };

            const datos = paginas[url];

            if (datos) {
                return resolve({status: 200, datos});
            }
            return reject({status: 404});
        }, 5000);
    })
}

funcPromesa("/users").then((respuesta) => {
    console.log(respuesta.datos);
    console.log(respuesta.status);
    console.log("True");
}).catch((respuesta) => {
    console.log(respuesta.status);
    console.log("False");
});

console.log("Continua el programa");

