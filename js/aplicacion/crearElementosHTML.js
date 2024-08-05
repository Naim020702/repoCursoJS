const ul = document.querySelector("ul");

// crear elemento
const nuevoLi = document.createElement("li");

// Asignarle clase o id
nuevoLi.className = "especial";
nuevoLi.id = "li-especial";

// asignarle atributos
nuevoLi.setAttribute("title", "createElement");

// crear un nodo de texto
const propCreateElement = document.createTextNode("createElement");

// asignar nodo de texto al li
nuevoLi.appendChild(propCreateElement);

// asignar al ul un nuevo li
ul.appendChild(nuevoLi);

// console.log(nuevoLi);

// ------------------ Tarea ------------------
const otroLi = document.createElement("li");
otroLi.className = "especial";
otroLi.id = "li-text";
otroLi.setAttribute("title", "createTextNode");
const propCreateTextNode = document.createTextNode("createTextNode");
otroLi.appendChild(propCreateTextNode);
ul.appendChild(otroLi);

const primerDivDelDoc = document.querySelector("div");
primerDivDelDoc.className = "container";

const nuevoDiv = document.createElement("div");
nuevoDiv.className = "div-js";
const textoParaNuevoDiv = document.createTextNode("Este div fue creado con JS");
nuevoDiv.appendChild(textoParaNuevoDiv);
const ultimoDivDelDoc = document