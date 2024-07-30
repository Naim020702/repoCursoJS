const cliente = {
    // atributos o propiedades del objeto
    nombre : "Carlos",
    apellido : "Zarate",

    // metodos del objeto
    sumar : function (x,y) {
        return x + y;
    },

    restar : (x,y) => {
        return x - y;
    },

    // No son necesarios los dos puntos :
    dividir(x,y) {
        return x / y;
    },

    multiplicar(x,y) {
        return x * y;
    }

}

// utilizando una propiedad o metodo
console.log(cliente.restar(2,2));