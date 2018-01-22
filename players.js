'use strict';

function Players (health, strength){
    this.isDead = false;
    this.health = health;
    this.strength = strength;
}

Players.prototype.receiveDamage = function (damage) {
    var self = this;
    self.health = self.health - damage;   
};

Players.prototype.attack = function () {
    var self = this;
    return self.strength;  
};


function Goku () {
    Players.call(this, 500, 75)
    this.name = 'Goku';
};

Goku.prototype = Object.create(Players.prototype);
Goku.prototype.constructor = Goku;

function Broly () {
    Players.call(this, 1000, 100)
    this.name = 'Broly';
}

Broly.prototype = Object.create(Players.prototype);
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