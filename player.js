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

Player.prototype.move = function(dir) {
    let dx = 0;
    let dy = 0;
    switch (dir) {
        case 'ArrowUp':
            dy = -SQR;
            break;
        case 'ArrowDown':
            dy = SQR;
            break;
        case 'ArrowRight':
            dx = SQR;
            break;
        case 'ArrowLeft':
            dx = -SQR;
            break;
    }
    
    let obj_contacted = this.detectContact(dx, dy);
    if (!obj_contacted || obj_contacted.walkable) {
        this.undraw();
        this.y += (dy);
        this.x += (dx);
        this.draw();
    }
    if (obj_contacted && obj_contacted.has_interaction) {
        obj_contacted.interact();
    }
};

Player.prototype.detectContact = function (dx, dy) {
    
    for (var i = 0; i<room.layout.length; i++) {
        if (room.layout[i].walkable) {
            if (!room.layout[i].has_interaction) {
                continue;
            }
            else {
                return room.layout[i];
            }
        }
        else {
            if ((Math.max((this.x+dx),room.layout[i].x) < Math.min((this.x+this.width+dx),(room.layout[i].x+room.layout[i].x_len))) && (Math.max((this.y+dy),room.layout[i].y) < Math.min((this.y+this.height+dy),(room.layout[i].y+room.layout[i].y_len)))) {
                //if room.layout[i].interaction 
                return room.layout[i];
            }
        }
    }
    return false;
};


