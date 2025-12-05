const canvas = document.getElementById("superficie");
const ctx = canvas.getContext("2d");

let y = 0;
const speed = 1.5; // velocidad del barrido
const barHeight = 25; // altura de la barra blanca

function animar() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.fillRect(0, y, canvas.width, barHeight);

    y += speed;
    if (y > canvas.height) y = -barHeight;

    requestAnimationFrame(animar);
}

animar();



