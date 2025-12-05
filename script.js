const canvas = document.getElementById("superficie");
const ctx = canvas.getContext("2d");

const pixelSize = 10; // más chico = más detalle

function generarPatron() {

    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {

            const gris = 80 + Math.floor(Math.random() * 120);
            ctx.fillStyle = `rgb(${gris},${gris},${gris})`;

            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }
}

setInterval(generarPatron, 150);

