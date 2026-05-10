window.onload = () => {

    let audio =
    document.getElementById("musica");

    if(audio){

        const tiempoGuardado =
        localStorage.getItem("tiempoMusica");

        if(tiempoGuardado){
            audio.currentTime =
            tiempoGuardado;
        }

        audio.play().catch(()=>{});

        audio.volume = 0.4;

        setInterval(()=>{

            localStorage.setItem(
                "tiempoMusica",
                audio.currentTime
            );

        },1000);
    }

};

const mensajes = {

    abuela: [

        "Gracias por cada abrazo lleno de ternura 💖",
        "Tus historias hacen feliz a toda la familia 🌸",
        "Eres el corazón más noble del hogar 💐",
        "Tu amor siempre ilumina nuestras vidas ✨"

    ],

    mama: [

        "Gracias por cuidarme siempre ❤️",
        "Eres mi ejemplo de fuerza y amor 🌷",
        "Tu cariño hace mejor cada día 💖",
        "Siempre estaré agradecida contigo ✨"

    ],

    tia: [

        "Gracias por tu alegría y apoyo 🌸",
        "Tu cariño hace especial cada momento 💕",
        "Siempre transmites felicidad 🌷",
        "Gracias por estar siempre presente ✨"

    ]
};

function abrirModal(tipo){

    document.getElementById("modal")
    .style.display = "flex";

    document.getElementById("modalText")
    .innerHTML = `

    <div class="regalo-box">

        <button class="regalo"
        onclick="abrirCarta('${tipo}')">
            💌
        </button>

        <div class="regalo-texto">
            Haz click en la carta 💖
        </div>

    </div>

    `;
}

function abrirCarta(tipo){

    let cajaMensajes = "";

    mensajes[tipo].forEach(msg => {

        cajaMensajes += `

        <div class="mensaje-card">
            ${msg}
        </div>

        `;

    });

    document.getElementById("modalText")
    .innerHTML = `

    <div class="mensajes-container">

        <h2 class="titulo-mensajes">
            💖 Mensajes Especiales 💖
        </h2>

        ${cajaMensajes}

        <button class="btn-cerrar"
        onclick="cerrarModal()">
            Cerrar 💖
        </button>

    </div>

    `;
}

function cerrarModal(){

    document.getElementById("modal")
    .style.display = "none";
}

const petalos =
document.querySelector(".petalos");

function crearFlor(){

    const flor =
    document.createElement("div");

    flor.classList.add("flor");

    const flores = [
        "🌸","🌷","💮","🌺","💖","💕","💗"
    ];

    flor.innerHTML =
    flores[Math.floor(Math.random()*flores.length)];

    flor.style.left =
    Math.random() * window.innerWidth + "px";

    flor.style.animationDuration =
    (Math.random()*5+5)+"s";

    flor.style.fontSize =
    (Math.random()*20+20)+"px";

    petalos.appendChild(flor);

    setTimeout(()=>{
        flor.remove();
    },10000);
}

setInterval(crearFlor,250);

const frases = [

    "💖 Gracias por tu amor, tu paciencia y por acompañarme siempre con una sonrisa y un abrazo sincero. Hoy quiero desearles un hermoso Día de la Madre, lleno de alegría, cariño y momentos inolvidables. Que este día sea tan especial como ustedes lo son para mí. 🌸"

];

let fraseActual = 0;
let letraActual = 0;

const texto =
document.getElementById("texto-maquina");

function escribirTexto(){

    if(fraseActual < frases.length){

        if(letraActual < frases[fraseActual].length){

            texto.innerHTML +=
            frases[fraseActual].charAt(letraActual);

            letraActual++;

        }else{

            texto.innerHTML += "<br><br>";

            fraseActual++;
            letraActual = 0;
        }
    }
}

setInterval(escribirTexto,80);

function crearConfeti(){

    const confeti =
    document.createElement("div");

    confeti.classList.add("confeti");

    confeti.style.left =
    Math.random()*window.innerWidth+"px";

    confeti.style.background =
    `hsl(${Math.random()*360},100%,70%)`;

    confeti.style.animationDuration =
    (Math.random()*3+2)+"s";

    document.body.appendChild(confeti);

    setTimeout(()=>{
        confeti.remove();
    },5000);
}

for(let i=0;i<120;i++){
    setTimeout(()=>{
        crearConfeti();
    },i*80);
}

const frasesAuto = [

"💖 Te amo mamá",
"🌸 Gracias por cuidarme",
"✨ Eres mi inspiración",
"🌷 Siempre serás especial"

];

let fraseIndex = 0;

setInterval(()=>{

    const frase =
    document.getElementById("frase-auto");

    if(frase){

        frase.style.opacity = 0;

        setTimeout(()=>{

            frase.innerHTML =
            frasesAuto[fraseIndex];

            frase.style.opacity = 1;

            fraseIndex++;

            if(fraseIndex >= frasesAuto.length){
                fraseIndex = 0;
            }

        },500);
    }

},3000);

function toggleMusica(){

    const musica =
    document.getElementById("musica");

    const btn =
    document.getElementById("btnMusic");

    if(musica.paused){
        musica.play();
        btn.innerHTML = "⏸️ Pausar Música";
    }else{
        musica.pause();
        btn.innerHTML = "🎵 Reproducir Música";
    }
}

document.addEventListener("mousemove",(e)=>{

    const brillo =
    document.querySelector(".brillo");

    if(brillo){
        brillo.style.left = e.clientX + "px";
        brillo.style.top = e.clientY + "px";
    }
});

window.onclick = function(e){

    const modal =
    document.getElementById("modal");

    if(e.target == modal){
        cerrarModal();
    }
}