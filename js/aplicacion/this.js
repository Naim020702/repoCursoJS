// Este this hace referencia a este mismo objeto
const objeto = {
    nombre : "Marcos",
    apellido : "Catelli",
    // Esta funcion pertenece a objeto, no al scope global
    nombreCompleto() {
        console.log(this); // Esto muestra el objeto entero
        console.log(objeto.nombre); // Esto muestra el atributo nombre del objeto, pero no se usa, se usa this
        console.log(this.nombre); // Esto es lo mismo tambien
    },

    nombreCompleto2(){
        const {nombre, apellido} = this;
        return (nombre + " " + apellido);
    },

    imprimir() {
        console.log(this.nombreCompleto2)
    }

}
objeto.nombre = "Cristian"; // Cambia el nombre del objeto
objeto.apodo = "Chiquito"; // Agrega este atributo al objeto
objeto.nombreCompleto();
objeto.nombreCompleto2();
objeto.imprimir();
objeto.miNuevaFuncion = function () {
    console.log("Mi nueva funcion, perteneciente al objeto objeto");
    console.log(this);
}
objeto.miNuevaFuncion();


// Esto pertenece al objeto global Window, ya que no se encuentra encasillado dentro de nada
// Si vamos a la consola del navegador, veremos que en sus metodos estara dameNombre()
console.log(this); // Esto hace referencia al objeto global window

function dameNombre () { 
    console.log(this); // Mostrara por consola "Window"
}
dameNombre();
//