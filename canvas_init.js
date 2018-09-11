var canvas = document.getElementById('myCanvas');
var c = canvas.getContext('2d');
let player = new Player();
let background = new Background();
let SQR = 10;

function draw_game() {
    background.draw();
    player.draw();
    requestAnimationFrame(draw_game);
}

function canvas_size () {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = canvas_size;
window.resize = canvas_size;

function init() {
    document.onkeydown = function(e) {
        if (e.key == 'ArrowLeft') {
            e.preventDefault();
            player.moveLeft();
        }
        else if (e.key == 'ArrowUp') {
            e.preventDefault();
            player.moveUp();
        }
        else if (e.key == 'ArrowRight') {
            e.preventDefault();
            player.moveRight();   
        }
        else if (e.key == 'ArrowDown') {
            e.preventDefault();
            player.moveDown();   
        }
    };
    draw_game();
}
init();
