function Enemy() {
    this.x = 50;
    this.y = 50;
    this.speed = 2;
    this.health = 5;
    this.damage = 1;
    this.color = 'red';
    this.alive = true;
    this.damageable = true;
}

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
