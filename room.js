
function Room(data) {
    this.name = data.name;
    this.layout = data.layout.map(arr => {return arr.map(elem => {return data.layout_conversion_key[elem]})});
    this.x = (window.innerWidth-this.layout[0].length)/2;
    this.y = (window.innerHeight-this.layout.length)/2;
    this.color_pallet = data.color_pallet;
}

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
    let color;
    for (var i=0; i<this.layout.length; i++) {
        for (var j=0; j<this.layout[i].length; j++) {
            c.fillStyle = this.layout[i][j].color;
            c.strokeStyle = this.layout[i][j].color;
            c.fillRect(this.x+(j*SQR),this.y+(i*SQR),SQR,SQR);
            c.strokeRect(this.x+(j*SQR),this.y+(i*SQR),SQR,SQR);
        }
    }
};

var room_data = {
  start : {
    name : 'Start_Area',
    play_start: [3,3],
    layout : [['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','w','w','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','w','w','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','w','w','w','w','w','w','w','w','d','d','w','w','w','w','w','w','w','w','w']],
    layout_conversion_key : {'w':{
                                 name : 'wall',
                                 color : 'black',
                                 walkable : false,
                             },
                             'f':{
                                 name : 'floor',
                                 color : 'green',
                                 walkable : true,
                             },
                             'd':{
                                 name : 'door',
                                 color : 'brown',
                                 walkable : false,
                                 next_room : 'First_Area',
                             }
                          }
  },
  first : {
    name : 'First_Area',
    player_start: [8,1],
    layout : [['w','w','w','w','w','w','w','w','d','d','w','w','w','w','w','w','w','w','w','w'],
              ['w','f','f','f','f','w','f','f','f','f','f','w','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','w','f','f','f','f','f','w','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','w','f','f','f','f','f','w','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','w','f','f','f','f','f','w','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','w','f','f','f','f','f','w','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','w','w','w','w','w','f','w','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w']],
     layout_conversion_key : {'w':{
                             name : 'wall',
                             color : 'black',
                             walkable : false,
                             },
                             'f':{
                                 name : 'floor',
                                 color : 'green',
                                 walkable : true,
                             },
                             'd':{
                                 name : 'door',
                                 color : 'brown',
                                 walkable : false,
                                 next_room : 'Start_Area',
                             }
     }
  }
};



