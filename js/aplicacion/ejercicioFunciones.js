function isValidPassword(user, pass) {
    if (pass.length < 8) {
        console.log("No contiene al menos 8 caracteres");
        return false;
    }
    
    if (pass.indexOf(" ") != -1) {
        console.log("No se aceptan espacios");
        return false;
    }

    if (pass.indexOf(user) != -1) {
        console.log("No se acepta el nombre de usuario en la contraseña");
        return false;
    }

    return true;
}

let user = "naim";
let pass = "020702naim";

console.log(isValidPassword(user, pass));