
function Room(data) {
    console.log(data.layout_ordering);
    this.name = data.name;
    this.x = (window.innerWidth-100)/2;
    this.y = (window.innerHeight-100)/2;
    this.layout = []
         
    data.layout_ordering.forEach((order_name) => {
        data.layout[order_name].forEach((obj_data) => {
            switch (order_name) {
                case 'floor':
                    this.layout.push(new Floor(obj_data));
                    break;
            }
        });       
    });
}

Room.prototype.constructor = Room;

Room.prototype.addToLayout = function(obj) {
    this.layout.push(obj);
};

Room.prototype.getSqr = function(x,y) {
    return this.layout[y][x];
};

Room.prototype.getX = function() {
    return this.x;   
}

Room.prototype.getY = function() {
    return this.y;   
}

Room.prototype.draw = function() {
    this.layout.forEach((obj) => {
        obj.draw();
    });
};

var room_data = {
    
  Start_Area : {
    name : 'Start_Area',
    player_start: [3,3],
    layout : {floor:[{x:0,y:0,x_len:100,y_len:100,fill_color:'green',stroke_color:'green',walkable:true}]},
    layout_ordering : ['floor'],
  },
    
};

function Floor(data) {
    this.x = room.x+data.x;
    this.y = room.y+data.y;
    this.x_len = data.x_len;
    this.y_len = data.y_len;
    this.fill_color = data.fill_color;
    this.stroke_color = data.stroke_color;
    this.walkable = data.walkable;
} 

Floor.prototype.draw = function () {
    c.fillStyle = this.fill_color;
    c.strokeStyle = this.stroke_color;
    c.fillRect(this.x, this.y, this.x_len, this.y_len);
    c.strokeRect(this.x, this.y, this.x_len, this.y_len);
}

Floor.prototype.constructor = Floor;
