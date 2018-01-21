'use strict';
var damage = 50;

function Players (){
    this.isDead = false;
    this.health = health;
    this.strength = strength;

}

Players.prototype.attack = function(){
    var self = this;
    return self.strength;
     
};

Players.prototype.receiveDamage = function () {
    var self = this;

    self.health = self.health - self.damage;
    
};


function Goku (name, health, strength) {
    Players.call(this, health, strength)
    this.name = name;
};

Goku.prototype = Object.create(Players.prototype);
Goku.prototype.constructor = Goku;

function Broly (name, health, strength) {
    Players.call(this, health, strength)
    this.name = name;
}
