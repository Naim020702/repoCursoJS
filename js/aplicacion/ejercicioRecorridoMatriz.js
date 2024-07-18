const miArray = [
    [1,2,3],
    [4,5,6],
    [7,8],
    [5,5,5,5]
];

let totalTotal = 0;
for (let i = 0; i < miArray.length; i++){
	let totalParcial = 0;
	for (let j = 0; j < miArray[i].length; j++){
	totalParcial = totalParcial + miArray[i][j];
}
console.log("Total parcial de fila ", i, " = ", totalParcial);
totalTotal = totalTotal + totalParcial;
}
console.log(totalTotal);
