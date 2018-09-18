
function Room(data) {
    this.name = data.name;
    this.x = (window.innerWidth-500)/2;
    this.y = (window.innerHeight-500)/2;
    this.layout = [];
    this.layout_data = data.layout_data; 
    this.layout_ordering = data.layout_ordering;
    this.player_start = {x:data.player_start.x+this.x, y:data.player_start.y+this.y};
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
                case 'door':
                    this.layout.push(new Door(obj_data));
                    break;
                case 'crate':
                    this.layout.push(new Crate(obj_data));
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
    player_start: {x:30,y:30},
    layout_data : {floor:[{x:0,y:0,x_len:500,y_len:500,fill_color:'green',stroke_color:'#9e9e9e',walkable:true, has_interaction:false}],
                   wall:[{x:0,y:0,x_len:500,y_len:5,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false},
                         {x:0,y:0,x_len:5,y_len:500,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false},
                         {x:495,y:0,x_len:5,y_len:500,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false},
                         {x:0,y:495,x_len:500,y_len:5,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false}],
                   door:[{x:480,y:480,x_len:10,y_len:10,fill_color:'pink',stroke_color:'pink',walkable:true, has_interaction:true, next_room:'First_Area'}],
                   crate:[{x:200,y:200,x_len:5,y_len:5,fill_color:'brown',stroke_color:'brown',walkable:false, has_interaction:true, inventory:['torch']}]
                  },
    layout_ordering : ['floor','wall', 'door','crate']
  },
  First_Area : {
    name : 'First_Area',
    player_start: {x:100,y:300},
    layout_data : {floor:[{x:0,y:0,x_len:500,y_len:500,fill_color:'green',stroke_color:'#9e9e9e',walkable:true, has_interaction:false}],
                   wall:[{x:0,y:0,x_len:500,y_len:5,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false},
                         {x:0,y:0,x_len:5,y_len:500,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false},
                         {x:495,y:0,x_len:5,y_len:500,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false},
                         {x:0,y:495,x_len:500,y_len:5,fill_color:'black',stroke_color:'black',walkable:false, has_interaction:false}],
                   door:[{x:100,y:480,x_len:10,y_len:10,fill_color:'pink',stroke_color:'pink',walkable:true, has_interaction:true, next_room:'First_Area'}],
                  },
    layout_ordering : ['floor','wall', 'door']
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
    this.has_interaction = data.has_interaction;
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
Door.prototype.interact = function () {
    room = new Room(room_data[this.next_room]);
    room.populateLayout();
    player.x = room.player_start.x;
    player.y = room.player_start.y;
};

function Crate (data) {
    Floor.call(this,data);
    this.inventory = data.inventory;
}

Crate.prototype = Object.create(Floor.prototype);
Crate.prototype.constructor = Crate;
Crate.prototype.interact = function () {
    this.open();
}
// CHANGE this put a div with id crateArea or something
//append table to it make sure only one table at a time
//set location of that div in here too

Crate.prototype.open = function () {
    let div = document.getElementsByClassName('crate_table')[0];
    let table = document.createElement('table');
    let tbody = document.createElement('tbody');
    
    let tr,td;
    for (var i=0; i<this.inventory.length; i++) {
        tr = document.createElement('tr');
        td = document.createElement('tr');
        td.innerHTML = this.inventory[i];
        td.onclick = function () {player.addInventory(this.inventory[i]);table.deleteRow(i);}
        tr.appendChild(td);
        tbody.appendChild(td);
    }
    table.appendChild(tbody);
    div.appendChild(table);
    //div.style.position = 'absolute';
    div.style.left = this.x+'px';
    div.style.top = this.y+'px';
    
}

