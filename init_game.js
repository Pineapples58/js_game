// Global vars set in init()
let canvas, c, player, background, room, SQR; 

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
    // Set constants
    SQR = 5;
    
    // Set up canvas
    canvas = document.getElementById('myCanvas');
    c = canvas.getContext('2d');   

    // Sets the objects 
    background = new Background();
    room = new Room(room_data.Start_Area);
    room.populateLayout();
    player = new Player(room.player_start);
    
    document.onkeydown = function(e) {
        if (e.key == 'ArrowLeft' || e.key == 'ArrowUp' || e.key == 'ArrowRight' || e.key == 'ArrowDown') {
            e.preventDefault();
            player.move(e.key);
        }
        else if (e.key == 'Control') {
            player.attack();
        }
    };
    canvas_size();
    draw_game();
}
window.onload = init;
