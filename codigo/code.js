const corpo = document.body;

const imagens = document.querySelectorAll("img");

for(let img of imagens){
    img.addEventListener('click', (e)=>{imgFull(e.target.src, e.target.alt)});
}

function imgFull(caminho, texto){
    const div = document.createElement('div');
    div.setAttribute("class", "fullscreen barras");
    div.style.display = "flex";

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const img = document.createElement('img');
    img.src = caminho;

    const descricao = document.createElement('p');
    descricao.textContent = texto;

    const exit = document.createElement('div');
    exit.setAttribute('class', 'exit');
    exit.innerHTML = `<span class="material-symbols-outlined">close</span>`

    container.appendChild(img);
    container.appendChild(descricao);
    div.appendChild(container);
    corpo.appendChild(div);
    div.appendChild(exit);

    corpo.style.overflow = "hidden";
    div.style.overflow = "scroll";

    const verificarTamanho = setInterval(() => {
        let altura = window.innerHeight;
        let largura = window.innerWidth;

        if(altura >= largura){
            largura = window.innerWidth;
            altura = Number(largura) * 9 / 16;

            img.style.width = `${altura}px`;
            img.style.width = `${largura}px`;
        }else if(largura >= altura){
            altura = window.innerHeight;
            largura = Number(altura) * 16 / 9;

            img.style.width = `${altura}px`;
            img.style.width = `${largura}px`;
        }
    }, 70);

    exit.addEventListener('click', ()=>{
        div.style.display = 'none';
        corpo.removeChild(div);
        corpo.style.overflow = 'auto';
        window.clearInterval(verificarTamanho);
    });
}

const conteudo = document.querySelector('.conteudo');

window.onload = tocarAudio();

function tocarAudio() {
    const musica = document.createElement('audio');
    musica.src = 'musica/as-it-was.webm';
    musica.style.display = 'none';
    musica.setAttribute('controls', '');
    musica.setAttribute('autoplay', '');
    musica.setAttribute('loop', '');
    conteudo.appendChild(musica);
}