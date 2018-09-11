
var canvas;
var c;
let player;
let background;
let SQR;

function Player () {
    this.location = "start";
    this.x = window.innerWidth/2;
    this.y = window.innerHeight/2;
    this.height = 9;
    this.width = 6;
    this.color = 'green';
    this.equiped = [];
    this.inventory = [];
}

Player.prototype.draw = function() {
    c.fillStyle = "blue";
    c.fillRect(this.x,this.y,this.width,this.height);
};

Player.prototype.undraw = function() {
    c.fillStyle = "#cccdce";
    c.fillRect(this.x,this.y,this.width,this.height);
};
    
Player.prototype.moveUp = function() {
    //let contact_type = this.detectContact(0,1);
    //if (!contact_type) {
        this.undraw();
        this.y -= SQR;
        this.draw();
   // }
   // else if (contact_type = 'hit') {
   //     this.hit();
   // }
};

Player.prototype.moveDown = function() {
    this.undraw();
    this.y += SQR;
    this.draw();
 };

Player.prototype.moveLeft = function() {
    this.undraw();
    this.x -= SQR;
    this.draw();
};

Player.prototype.moveRight = function() {
    this.undraw();
    this.x += SQR;
    this.draw();
};

function Background(color) {
    this.color = color || "#cccdce";
}

Background.prototype.draw = function() {
    c.fillStyle = this.color;
    c.fillRect(0,0,window.innerWidth,window.innerHeight);   
};

function Room(layout,x,y,color_pallet) {
    this.layout = layout;
    this.x = x;
    this.y = y;
    this.color_pallet = color_pallet;
}

Room.prototype.draw = function() {
    let color;
    for (var i=0; i<this.layout.length; i++) {
        for (var j=0; j<this.layout[i].length; j++) {
            switch (this.layout[i][j]) {
                case 'wall':
                    color = this.color_pallet.wall;
                case 'floor':
                    color = this.color_pallet.floor;
                case 'door':
                    color = this.color_pallet.door;                    
                default:
                    color = 'white';
                    console.log(this.layout[i][j]);
            }
            c.fillStyle = color;
            c.fillRect(this.x+(j*SQR),this.y+(i*SQR),SQR,SQR);
        }
    }
};

function draw_game() {
    background.draw();
    player.draw();
    requestAnimationFrame(draw_game);
}

function canvas_size () {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.onload = init;
window.resize = canvas_size;


function init() {
    
    canvas = document.getElementById('myCanvas');
    c = canvas.getContext('2d');   
    player = new Player();
    background = new Background();
    SQR = 10;
    
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
//init();
