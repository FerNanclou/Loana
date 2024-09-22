// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "We could leave the Christmas lights up till January", time: 14 },
  { text: "This is our place, we make the rules", time: 20 },
  { text: "And there's a dazzling haze, a mysterious way about you, dear", time: 27 },
  { text: "Have I known you 20 seconds or 20 years?", time: 34 },
  { text: "Can I go where you go?", time: 41 },
  { text: "Can we always be this close, forever and ever?", time: 48 },
  { text: "And ah, take me out, and take me home", time: 55 },
  { text: "You're my, my, my, my", time: 61 },
  { text: "Lover", time: 68 },
  { text: "We could let our friends crash in the living rooms", time: 77 },
  { text: "This is our place, we make the call", time: 84 },
  { text: "And I'm highly suspicious that everyone who sees you whants you", time: 90 },
  { text: "I've loved you three summers now, honey, but I want 'em all", time: 96 },
  { text: "Can I go where you go?", time: 103 },
  { text: "Can we always be this close, forever and ever?", time: 110 },
  { text: "And ah, take me out, and take me home", time: 116 },
  { text: "You're my, my, my, my", time: 123 },
  { text: "Lover", time: 125 },
  { text: "Ladies and gentlemen, will you, please, stand?", time: 128 },
  { text: "With every guitar string scar on my hand", time: 131 },
  { text: "I take this magnetic force of a man to be my lover", time: 139 },
  { text: "My heart's been borrowed and yours has been blue", time: 143 },
  { text: "All's well that ends well to end up with you", time: 146 },
  { text: "Swear to be overdramatic and true to my lover", time: 153 },
  { text: "And you'll save all your dirtiest jokes for me", time: 159 },
  { text: "And at every table, I'll save you a seat, lover", time: 167 },
  { text: "Can I go where you go?", time: 174 },
  { text: "Can we always be this close, forever and ever?", time: 181 },
  { text: "And ah, take me out, and take me home", time: 187 },
  { text: "You're my, my, my, my", time: 193 },
  { text: "Oh, you're my, my, my, my", time: 200 },
  { text: "Darling, you're my, my, my, my", time: 206 },
  { text: "Lover", time: 208 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 20000);