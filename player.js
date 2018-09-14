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
    let detect_x = 0;
    let detect_y = 0;
    switch (dir) {
        case 'ArrowUp':
            detect_y = -1;
            break;
        case 'ArrowDown':
            // set to 2 since player is 2 sqr tall
            detect_y = 2;
            break;
        case 'ArrowRight':
            detect_x = 1;
            break;
        case 'ArrowLeft':
            detect_x = -1;
            break;
    }
    let spaces = this.detectContact(detect_x, detect_y);
    if (spaces.every(obj => obj.walkable)) {
        this.undraw();
        this.y += (SQR*detect_y);
        this.x += (SQR*detect_x);
        this.draw();
    }
    else if (spaces.every(obj => obj.name == 'door')) {
        this.throughDoor(spaces[0].next_room);
    }
};

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

Player.prototype.positionReset = function () {
      this.x = room.getX()+SQR;
      this.y = room.getY()+SQR;
};

Player.prototype.throughDoor = function (next_room) {
     room = new Room(room_data[next_room]);
     player.positionReset();
}

