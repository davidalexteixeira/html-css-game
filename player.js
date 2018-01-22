'use strict';

function Player (health, strength){
    this.isDead = false;
    this.health = health;
    this.strength = strength;
}

Player.prototype.receiveDamage = function (damage) {
    var self = this;
    self.health = self.health - damage;   
};

Player.prototype.specialAttack = function (damage) {
    var self = this;
    self.health = self.health - damage;
}

Player.prototype.attack = function () {
    var self = this;
    return self.strength;  
};


function Goku () {
    Player.call(this, 500, 75)
    this.name = 'Goku';
};

Goku.prototype = Object.create(Player.prototype);
Goku.prototype.constructor = Goku;

function Broly () {
    Player.call(this, 1000, 100)
    this.name = 'Broly';
}

Broly.prototype = Object.create(Player.prototype);
Broly.prototype.constructor = Broly;


// Players.prototype.attackPlayer1 = function(){
//     var self = this;
    
//     if(goku.health > 0 && broly.health > 0) {
//         broly.receiveDamage(goku.strength);
//     }
//     else if(broly.health <= 0) {
//         return broly.isDead = true;
//         console.log('Broly has died in a battle against Goku');
//     }
    
// };

// Players.prototype.attackPlayer2 = function () {
//     var self = this;
    
//     if(broly.health > 0 && goku.health > 0) {
//         goku.receiveDamage(broly.strength);
//     } 
//     else if (goku.health <= 0) {
//         goku.isDead = true;
//         console.log('Goku had died in a battle against Broly');
//     }
// }