const astronautaEsquerda = document.querySelector(".astronauta1");
const astronautaDireita = document.querySelector(".astronauta2");


setInterval(()=>{
    if(astronautaEsquerda.classList.length === 2){
        astronautaEsquerda.classList.remove('astro1');
        astronautaDireita.classList.add('astro2');
    }else if(astronautaDireita.classList.length === 2){
        astronautaDireita.classList.remove('astro2');
        astronautaEsquerda.classList.add('astro1');
    }
}, 20000);
