// Selectores
let palabras = ["ALURA","ORACLE","ONE", "JAVASCRIPT", "HTML"];

// variable que contendrá el contexto canvas
let tablero = document.getElementById("hoja").getContext("2d");

let palabraSecreta = ""; // porque inicialmente no hay ninguna

// Palabra Secreta
function escogerPalabraSecreta(){
    let palabra = palabras [Math.floor(Math.random() * palabras.length)] // va a indexar un valor aleatorio
}


// Iniciar juego
function iniciarJuego() {
    // al presionar el botón de iniciar juego, desaparece ese div
    document.getElementById("iniciar-juego").style.display = "none";

}
