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


function escape() {
  window.location.href = "terminal.html";
}


function roll() {
    const covers = document.getElementById("covers");
    const cover = document.getElementById("Cover");

    covers.style.transform = "scaleX(-1) rotate(110deg)";

    covers.style.top = "77%";
    cover.style.top = "77%";

}
