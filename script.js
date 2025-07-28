const text = "Happy Birthday Dog-Woz!";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

function showSurprise() {
    document.getElementById("surprise").style.display = "block";
}

function escape() {
  window.location.href = "terminal.html";
}
