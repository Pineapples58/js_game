var canvas;
var c;
let player;
let background;
let SQR;
let room;

function draw_game() {
    background.draw();
    room.draw();
    player.draw();
    requestAnimationFrame(draw_game);
}

function canvas_size () {
    canvas.width  = window.innerWidth-5;
    canvas.height = window.innerHeight-5;
}

window.resize = canvas_size;

function init() {
    SQR = 5;
    canvas = document.getElementById('myCanvas');
    c = canvas.getContext('2d');   

    background = new Background();
    room = new Room(room_data.start);
    player = new Player();
    
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
    canvas_size();
    draw_game();
}
window.onload = init;
