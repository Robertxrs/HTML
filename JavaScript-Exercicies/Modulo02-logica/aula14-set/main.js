function monstraHora(){
    let data= new Date();

    return data.toLocaleTimeString('pt-BR',{
       hour12: false 
    });

}

function funcaoDoInterval(){
    console.log(monstraHora());
}

setInterval(funcaoDoInterval, 1000);