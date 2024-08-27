
const teclasBlancas = document.querySelectorAll('.tecla-blanca');
const teclasNegras = document.querySelectorAll('.tecla-negra');

const notasTeclasBlancas = [
    './sonido/do.mp3',
    './sonido/re.mp3',
    './sonido/mi.mp3',
    './sonido/fa.mp3',
    './sonido/sol.mp3',
    './sonido/la.mp3',
    './sonido/si.mp3',
    './sonido/do.mp3',
    './sonido/re.mp3',
    './sonido/mi.mp3',
    './sonido/fa.mp3',
    './sonido/sol.mp3',
    './sonido/la.mp3',
    './sonido/si.mp3',
    './sonido/do.mp3',
    './sonido/re.mp3'
];
const notasTeclasNegras = [
    './sonido/RE#.mp3',
    './sonido/MI#.mp3',
    './sonido/SOL#.mp3',
    './sonido/LA#.mp3',
    
];

function reproducirSonido(ruta) {
    const audio = new Audio(ruta);
    audio.play();
}

//FALTAN LAS TECLAS NEGRAS. IDEAL SERIA COMNSEGUIR EL PACK DE ARCHIVOS CORRECTOS
//CREO Q LOS DIV TRANSPARENTES EESTAN DIFICULTANDO EL CORRECTO FUNCIONAMIENTO

//1)distribuir cada nota en la tecla correspondiente
//2)agregar un evento de click a cada tecla
//3)que al hacer click en esa tecla se ejecute el sonido de esa tecla
//4)que al hacer click en esa tecla, la tecla se pinte de gris?

teclasBlancas.forEach( (tecla, index) => {
    tecla.addEventListener('click', () => {
        reproducirSonido(notasTeclasBlancas[index]);
        tecla.style.backgroundColor = 'grey';
        setTimeout(() => {
            tecla.style.backgroundColor = "white";
        }, 20);
    }); 
});

//ARREGLAR TECLAS NEGRAS
teclasNegras.forEach( (tecla, index) => {
    tecla.addEventListener('click', () => {
        reproducirSonido(notasTeclasNegras[index]);
        tecla.style.backgroundColor = 'grey';
        setTimeout(() => {
            tecla.style.backgroundColor = "black";
        }, 20);
    }); 
});



