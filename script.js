const canvas = document.getElementById("superficie");
const ctx = canvas.getContext("2d");

// Barrido horizontal
let y = 0;
const speedY = 1.5;
const barHeight = 25;

// Barrido vertical
let x = 0;
const speedX = 1.5;
const barWidth = 25;

function animar() {
    // Fondo negro
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Barra horizontal
    ctx.fillStyle = "white";
    ctx.fillRect(0, y, canvas.width, barHeight);

    // Barra vertical
    ctx.fillRect(x, 0, barWidth, canvas.height);

    // Actualizar posición horizontal
    y += speedY;
    if (y > canvas.height) y = -barHeight;

    // Actualizar posición vertical
    x += speedX;
    if (x > canvas.width) x = -barWidth;

    requestAnimationFrame(animar);
}

animar();





