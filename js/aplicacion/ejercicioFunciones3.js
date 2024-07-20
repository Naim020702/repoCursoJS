function contieneLetrasABC(cadena) {
    let abc = "qazwsxedcrfvtgbyhnujmikolpñ";
    for (let letra of abc) {
        if (!cadena.includes(letra)) {
            return false;
        }
    }
    return true;
}
//o con indexOf tambien
let cadena = "qazwsxedcrfvtgbyhnujmikolpñ";
console.log(contieneLetrasABC(cadena));