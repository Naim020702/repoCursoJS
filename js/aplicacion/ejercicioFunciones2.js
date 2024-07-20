function promedioDe(notas) {
    let cantNotas = notas.length;
    let sumaNotas = 0;
    for (let nota of notas) {
        sumaNotas = sumaNotas + nota;
    }
    return sumaNotas / cantNotas;
}