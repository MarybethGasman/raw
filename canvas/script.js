const canvas = document.querySelector("canvas");
canvas.width = 600;
canvas.height = 800;

const ctx = canvas.getContext("2d");
const cx = 300;
const cy = 400;

// set the radius of the hexagon
const radius = 50;

// move the canvas to the center position
ctx.translate(cx, cy);

drawShape(225, 100, 50, 7);
drawShape(350, 100, 50, 4);


function drawShape(x, y, r, sides) {
    // move the canvas to the center position
    ctx.translate(x, y);

    for (let i = 0; i < sides; i++) {
        // calculate the rotation
        const rotation = ((Math.PI * 2) / sides) * i;

        // for the first point move to
        if (i === 0) {
            ctx.moveTo(r * Math.cos(rotation), r * Math.sin(rotation));
        } else {
            // for the rest draw a line
            ctx.lineTo(r * Math.cos(rotation), r * Math.sin(rotation));
        }
    }

    // close path and stroke it
    ctx.closePath();
    ctx.stroke();

    // reset the translate position
    ctx.resetTransform();
}

