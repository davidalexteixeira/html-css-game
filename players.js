'use strict';
var damage = 50;

function Players (){
    this.isDead = false;
    this.health = 0;
    this.strength = 0;

}

function Goku (name, health, strength) {
    Players.call(this, health, strength)
    this.name = 'Goku';
    this.health = 500;
    this.strength = 75;
};

Goku.prototype = Object.create(Players.prototype);
Goku.prototype.constructor = Goku;

function Broly (name, health, strength) {
    Players.call(this, health, strength)
    this.name = 'Broly';
    this.health = 1000;
    this.strength = 75;
}

Broly.prototype = Object.create(Players.prototype);
Broly.prototype.constructor = Broly;

var goku = new Goku ();

var broly = new Broly ();


Players.prototype.receiveDamage = function () {
    var self = this;
    self.health = self.health - self.strength;
    
};

Players.prototype.attack = function(){
    var self = this;
    return self.strength;
};
