
function Background(color) {
    this.color = color || "#cccdce";
}

Background.prototype.draw = function() {
    c.fillStyle = this.color;
    c.fillRect(0,0,window.innerWidth,window.innerHeight);   
};
