var ctx = document.getElementById("canvas").getContext("2d");

var square_size = 40;

// set width and height
// take mod square_size to match dimensions of each square in the grid (removes trailing lines)
// set width of canvas to be 75% of the width of the page to leave room for instructions
var base_width = window.innerWidth * 0.75;
var width = base_width - (base_width % square_size);
var base_height = window.innerHeight * 0.95;
var height = base_height - (base_height % square_size);

window.onresize = function(event) {
    // figure out a way to redraw canvas
    // just calling draw function is too slow
    // some optimisation required
    window.requestAnimationFrame(draw);
}


function draw() {

    ctx.canvas.width = width;
    ctx.canvas.height = height;

    for (var x = 0; x <= width; x+= square_size) {
        for (y = 0; y <= height; y += square_size) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    }

    drawArrow();

}


function drawArrow() {
    console.log(ctx);

    // create new space to draw
    ctx.beginPath();

    // set start position
    ctx.moveTo(500, 500);
    // draw arrow
    ctx.lineTo(400, 600);
    ctx.lineTo(460, 600);
    ctx.lineTo(460, 800);
    ctx.lineTo(540, 800);
    ctx.lineTo(540, 600);
    ctx.lineTo(600, 600);
    ctx.lineTo(500, 500);

    // fill arrow with colour
    ctx.fillStyle = "#3F51B5";
    ctx.fill();

    //var x = width / 2;
    //var y = height / 2;
    //ctx.fillRect(x, y, 100, 100);
}