
function Room(layout,x,y,color_pallet) {
    this.layout = layout;
    this.x = x;
    this.y = y;
    this.color_pallet = color_pallet;
}

Room.prototype.draw = function() {
    let color;
    for (var i=0; i<this.layout.length; i++) {
        for (var j=0; j<this.layout[i].length; j++) {
            switch (this.layout[i][j]) {
                case 'wall':
                    color = this.color_pallet.wall;
                    break;
                case 'floor':
                    color = this.color_pallet.floor;
                    break;
                case 'door':
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
    layout : [['wall','wall','wall','wall','wall','wall','wall','wall'],
              ['wall','floor','floor','floor','floor','floor','floor','wall'],
              ['wall','floor','floor','floor','floor','floor','floor','wall'],
              ['wall','floor','floor','floor','floor','floor','floor','wall'],
              ['wall','floor','floor','floor','floor','floor','floor','wall'],
              ['wall','wall','wall','wall','wall','wall','wall','wall']],
    color_pallet : { 'wall':'black', 'floor':'green'}
  },
};
