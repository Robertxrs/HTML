const nome = ['Luiz Otavio','Henrique','Claudio'];

for (let valor of nome){
    console.log(valor);
}


nome.forEach(function (el, indice){
    console.log(el, indice)
});