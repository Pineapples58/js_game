
function Room(data) {
    this.name = data.name;
    this.x = (window.innerWidth-100)/2;
    this.y = (window.innerHeight-100)/2;
    this.layout = [];
    this.layout_data = data.layout_data; 
    this.layout_ordering = data.layout_ordering;
}

Room.prototype.constructor = Room;

Room.prototype.populateLayout = function(){ 
    this.layout_ordering.forEach((order_name) => {
        this.layout_data[order_name].forEach((obj_data) => {
            switch (order_name) {
                case 'floor':
                    this.layout.push(new Floor(obj_data));
                    break;
                case 'wall':
                    this.layout.push(new Floor(obj_data));
                    break;
            }
        });       
    });
};

Room.prototype.addToLayout = function(obj) {
    this.layout.push(obj);
};

Room.prototype.getX = function() {
    return this.x;   
};

Room.prototype.getY = function() {
    return this.y;   
};

Room.prototype.draw = function() {
    this.layout.forEach((obj) => {
        obj.draw();
    });
};

var room_data = {
    
  Start_Area : {
    name : 'Start_Area',
    player_start: [3,3],
    layout_data : {floor:[{x:0,y:0,x_len:100,y_len:100,fill_color:'green',stroke_color:'green',walkable:true}],
                   wall:[{x:0,y:0,x_len:100,y_len:5,fill_color:'black',stroke_color:'black',walkable:false},
                         {x:0,y:0,x_len:5,y_len:100,fill_color:'black',stroke_color:'black',walkable:false},
                         {x:95,y:0,x_len:5,y_len:100,fill_color:'black',stroke_color:'black',walkable:false},
                         {x:0,y:95,x_len:100,y_len:5,fill_color:'black',stroke_color:'black',walkable:false}],
                   door:[{x:90,y:90,x_len:10,y_len:10,fill_color:'pick',stroke_color:'pink',walkable:true}]
                  },
    layout_ordering : ['floor','wall', 'door'],
    next_room : 'First_Area',
  },
  First_Area : {
    name : 'First_Area',
    player_start: [3,3],
    layout_data : {floor:[{x:0,y:0,x_len:100,y_len:100,fill_color:'green',stroke_color:'green',walkable:true}],
                   wall:[{x:0,y:0,x_len:100,y_len:5,fill_color:'black',stroke_color:'black',walkable:false},
                         {x:0,y:0,x_len:5,y_len:100,fill_color:'black',stroke_color:'black',walkable:false},
                         {x:95,y:0,x_len:5,y_len:100,fill_color:'black',stroke_color:'black',walkable:false},
                         {x:0,y:95,x_len:100,y_len:5,fill_color:'black',stroke_color:'black',walkable:false}],
                   door:[{x:10,y:90,x_len:10,y_len:10,fill_color:'pick',stroke_color:'pink',walkable:true}]
                  },
    layout_ordering : ['floor','wall', 'door'],
  },  
    
};

function Floor(data) {
    this.x = room.getX()+data.x;
    this.y = room.getY()+data.y;
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
};
Floor.prototype.constructor = Floor;

function Door(data) {
    Floor.call(this,data);
    this.next_room = data.next_room;
}
Door.prototype = Object.create(Floor.prototype);
Door.prototype.constructor = Door;
