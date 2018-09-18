function Enemy() {
    this.x = room.x+50;
    this.y = room.y+20;
    this.x_len = 5;
    this.y_len = 5;
    this.speed = 2;
    this.health = 5;
    this.damage = 1;
    this.alive = true;
    this.damageable = true;
    this.fill_color = 'red';
    this.stroke_color = 'red';
    this.walkable = false;
    this.has_interaction = false;
}
Enemy.prototype.constuctor = Enemy;

Enemy.prototype.beenHit = function (dmg) {
    if (dmg >= this.health) {
       this.alive = false;
       console.log('dead');
    }
    else {
       this.health -= dmg;
       console.log('hit');
    }
};

Enemy.prototype.draw = function() {
    c.fillStyle = "red";
    c.fillRect(this.x,this.y,5,5);
};
