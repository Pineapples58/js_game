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
    
    let contact = this.detectContact(dx, dy);
    if (!contact) {
        this.undraw();
        this.y += (dy);
        this.x += (dx);
        this.draw();
    }
    //else if (spaces.every(obj => obj.name == 'door')) {
    //    this.throughDoor(spaces[0].next_room);
    //}
};

Player.prototype.detectContact = function (dx, dy) {
    
    for (var i = 0; i<room.layout; i++) {
        console.log(room.layout[i]);
        if (room.layout[i].walkable) {
            continue;
        }
        else {
            console.log('not walkable');
            if ((Math.max((this.x+dx),room.layout[i].x) < Math.min((this.x+this.width+dx),(room.layout[i].x+room.layout[i].x_len))) && (Math.max((this.y+dy),room.layout[i].y) < Math.min((this.y+this.height+dy),(room.layout[i].y+room.layout[i].y_len)))) {
                //if room.layout[i].interaction 
                return true;
            }
        }
    }
    return false;
};


/*
Player.prototype.detectContact = function (dx,dy) {
    let loops = (dx != 0)?2:1;
    let spaces = [];
    do {
        let room_x = Math.round((this.x - room.x)/SQR)+dx;
        let room_y = Math.round((this.y - room.y)/SQR)+dy;
        spaces.push(room.getSqr(room_x,room_y));
        dy++;
        loops--;
    }while(loops > 0);
    
    return spaces;
};
*/
Player.prototype.positionReset = function () {
      this.x = room.getX()+SQR;
      this.y = room.getY()+SQR;
};

Player.prototype.throughDoor = function (next_room) {
     room = new Room(room_data[next_room]);
     player.positionReset();
}

