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
    let contact_type = this.detectContact(0,1);
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

Player.prototype.detectContact = function (dx,dy) {
    let room_x = Math.floor((this.x - room.x)/SQR)+dx;
    let room_y = Math.floor((this.y - room.y)/SQR)+dy;
    console.log(room_x, room_y);
    let space = room.getSqr(room_x,room_y);
    if (space == 'w') {return true;}
    else {return false;}
};

