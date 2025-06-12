
const nomes = ['Maria','Julio','Ricardo','Antonio','Gabriel'];

// nomes.splice(indice, delete, element1, element2,element3);
// pop

const removidos = nomes.splice(3,2);
const add = nomes.splice(1,1,'Robert');
console.log(nomes, removidos, add);