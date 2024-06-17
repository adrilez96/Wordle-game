let intentos = 6; // Variable para contar los intentos restantes
let palabra = ""; // Variable para almacenar la palabra aleatoria
const diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']; // Diccionario de palabras para elegir al azar

window.addEventListener('load', init); // Espera a que la página cargue completamente antes de ejecutar init()

function init() {
    console.log('Esto solo se ejecuta cuando se carga la página web');
    seleccionarPalabra(); // Selecciona una palabra aleatoria del diccionario

    const button = document.getElementById("guess-button");
    button.addEventListener("click", intentar); // Asocia la función intentar() al evento click del botón
}

function seleccionarPalabra() {
    palabra = diccionario[Math.floor(Math.random() * diccionario.length)]; // Selecciona una palabra aleatoria del diccionario
    console.log("Palabra seleccionada:", palabra);
}

function intentar() {
    const INTENTO = leerIntento(); // Lee el intento del usuario

    if (INTENTO === palabra) {
        console.log("¡GANASTE!"); // Mensaje en consola si el usuario adivina la palabra
        terminar("<h1>¡GANASTE!😀</h1>"); // Llama a la función terminar() con un mensaje de victoria
        return; // Sale de la función intentar() si el usuario ha ganado
    }

    const ROW = document.createElement('div');
    ROW.className = 'row';

    // Evalúa cada letra del intento comparada con la palabra
    for (let i = 0; i < palabra.length; i++) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i] === palabra[i]) {
            SPAN.textContent = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851'; // Verde
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.textContent = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'; // Amarillo
        } else {
            SPAN.textContent = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4'; // Gris
        }

        ROW.appendChild(SPAN);
    }

    const GRID = document.getElementById("grid");
    GRID.appendChild(ROW); // Agrega la fila con las letras de intento al grid

    intentos--; // Decrementa el número de intentos restantes

    if (intentos === 0) {
        console.log("PERDISTE!");
        terminar("<h1>¡PERDISTE!😖</h1>"); // Llama a la función terminar() con un mensaje de derrota
    }
}

function leerIntento() {
    const input = document.getElementById("guess-input");
    let intento = input.value.toUpperCase(); // Obtiene el valor del input y lo convierte a mayúsculas
    input.value = ""; // Limpia el input después de cada intento
    return intento;
}

function terminar(mensaje) {
    const input = document.getElementById("guess-input");
    const button = document.getElementById("guess-button");

    input.disabled = true; // Deshabilita la entrada del usuario
    button.disabled = true; // Deshabilita el botón de intentar

    const contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje; // Muestra el mensaje de resultado en el contenedor 'guesses'
}


    