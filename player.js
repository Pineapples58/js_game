function Player () {
    this.location = "start";
    this.x = room.getX()+SQR;
    this.y = room.getY()+SQR;
    this.height = 10;
    this.width = 5;
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
    let contact = this.detectContact(0,-1);
    if (!contact) {
        this.undraw();
        this.y -= SQR;
        this.draw();
     }
};

Player.prototype.moveDown = function() {
    // Need to check to srqs below since player is 2 sqrs tall
    let contact = this.detectContact(0,2);
    if (!contact) {
        this.undraw();
        this.y += SQR;
        this.draw();
    }
 };

Player.prototype.moveLeft = function() {
    //need to check sqrs form top and bottom sqrs of player
    let top_contact = this.detectContact(-1,0);
    let bot_contact = this.detectContact(-1,1);
    if (!top_contact && !bot_contact) {
        this.undraw();
        this.x -= SQR;
        this.draw();
    }
};

Player.prototype.moveRight = function() {
    //need to check sqrs form top and bottom sqrs of player
    let top_contact = this.detectContact(1,0);
    let bot_contact = this.detectContact(1,1);
    if (!top_contact && !bot_contact) {
        this.undraw();
        this.x += SQR;
        this.draw();
    }
};

Player.prototype.detectContact = function (dx,dy) {
    let room_x = Math.round((this.x - room.x)/SQR)+dx;
    let room_y = Math.round((this.y - room.y)/SQR)+dy;
    let space = room.getSqr(room_x,room_y);
    
    if (space == 'w') {return true;}
    else {return false;}
};

