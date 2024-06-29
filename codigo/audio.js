const container = document.querySelector("main");

const src = 'musica/as-it-was.webm';

window.onload = tocarAudio(src,container);

function tocarAudio(caminho, local) {
    const musica = document.createElement('audio');
    musica.src = caminho;
    musica.style.display = 'none';
    musica.setAttribute('controls', '');
    //musica.setAttribute('autoplay', '');
    musica.setAttribute('loop', '');
    local.appendChild(musica);
}