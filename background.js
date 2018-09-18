
function Background(color) {
    this.color = color || "#61d1f9";
}

Background.prototype.draw = function() {
    c.fillStyle = this.color;
    c.fillRect(0,0,window.innerWidth,window.innerHeight);   
};
