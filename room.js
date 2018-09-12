
function Room(data) {
    this.name = data.name;
    this.layout = data.layout;
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
            switch (this.layout[i][j]) {
                case 'w':
                    color = this.color_pallet.w;
                    break;
                case 'f':
                    color = this.color_pallet.f;
                    break;
                case 'd':
                    color = this.color_pallet.d; 
                    break;
                default:
                    color = 'white';
                    console.log(this.layout[i][j]);
            }
            c.fillStyle = color;
            c.strokeStyle = color;
            c.fillRect(this.x+(j*SQR),this.y+(i*SQR),SQR,SQR);
            c.strokeRect(this.x+(j*SQR),this.y+(i*SQR),SQR,SQR);
        }
    }
};

var room_data = {
  start : {
    name : 'Start_Area',
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
    color_pallet : { 'w':'black', 'f':'green', 'd':'brown'}
      //Maybe add a layout conversion here to change the char to an object 
      //Instead of saving giant arrays of object just to save space.
  },
  first : {
    name : 'First_Area',
    layout : [['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'],
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
              ['w','w','w','w','w','w','w','w','w','d','d','w','w','w','w','w','w','w','w','w']],
    color_pallet : { 'w':'black', 'f':'green', 'd':'brown'}
  },
};
/** color pallet codes
w = wall
f = floor
d = door
c = chest


*/


