const mcat = document.getElementById("mpopcat");
const maudio = document.getElementById("mpopsound");
const dcat = document.getElementById("dpopcat");
const daudio = document.getElementById("dpopsound");
const image = document.querySelector("div");
const all = document.querySelector("body");

function mpress(event) {
    mcat.src="src/img/popkane.jpg";
    maudio.src="src/audio/click.mp3";
    maudio.play();
}

function mrelease(event) {
    mcat.src="src/img/kane.jpg";
}

function dpress(event) {
    dcat.src="src/img/popkane.jpg";
    daudio.src="src/audio/click.mp3";
    daudio.play();
}

function drelease(event) {
    dcat.src="src/img/kane.jpg";
}

mcat.addEventListener("touchstart", mpress);
all.addEventListener("touchend", mrelease);
dcat.addEventListener("mousedown", dpress);
all.addEventListener("mouseup", drelease);

window.document.oncontextmenu=new Function("return false");
window.document.onselectstart=new Function("return false");
window.document.ondragstart=new Function("return false");