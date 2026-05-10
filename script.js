// Música automática
window.onload = () => {

    let audio = document.getElementById("musica");

    if(audio){
        audio.muted = true;
        audio.play().catch(()=>{});

        setTimeout(()=>{
            audio.muted = false;
            audio.volume = 0.4;
        },1000);
    }

};

// Mostrar mensaje sorpresa
function mostrarSorpresa(){

    let box = document.getElementById("mensajeBox");
    box.classList.add("show");

    box.scrollIntoView({
        behavior:"smooth"
    });
}

// Modal
function abrirModal(card){

    document.getElementById("modal").style.display = "flex";

    let img = card.querySelector("img").src;
    let text = card.querySelector("p").innerText;

    document.getElementById("modalImg").src = img;
    document.getElementById("modalText").innerText = text;
}

function cerrarModal(){
    document.getElementById("modal").style.display = "none";
}

const petalos = document.querySelector(".petalos");

function crearFlor(){

    const flor = document.createElement("div");

    flor.classList.add("flor");

    const flores = ["🌸","🌷","💮","🌺"];

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

function irAsorpresa(){

    const musica =
    document.getElementById("musica");

    localStorage.setItem(
        "tiempoMusica", musica.currentTime
    );

    window.location.href="sorpresa.html";

}

setInterval(crearFlor,300);