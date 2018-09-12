
function Room(layout,x,y,color_pallet) {
    this.layout = layout;
    this.x = x;
    this.y = y;
    this.color_pallet = color_pallet;
}

Room.prototype.getSqr = function(x,y) {
    return this.layout[y][x];
};

Room.prototype.draw = function() {
    let color;
    for (var i=0; i<this.layout.length; i++) {
        for (var j=0; j<this.layout[i].length; j++) {
            switch (this.layout[i][j]) {
                case 'w':
                    color = this.color_pallet.wall;
                    break;
                case 'f':
                    color = this.color_pallet.floor;
                    break;
                case 'd':
                    color = this.color_pallet.door; 
                    break;
                default:
                    color = 'white';
                    console.log(this.layout[i][j]);
            }
            c.fillStyle = color;
            c.fillRect(this.x+(j*SQR),this.y+(i*SQR),SQR,SQR);
        }
    }
};

var room_data = {
  start : {
    layout : [['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w'],
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
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','w'],
              ['w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w','w']],
    color_pallet : { 'wall':'black', 'floor':'green'}
  },
};
/** color pallet codes
w = wall
f = floor
d = door
c = chest


*/


