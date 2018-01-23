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

Player.prototype.special = function (damage) {
    var self = this;
    self.health = self.health - damage;
}

Player.prototype.attack = function () {
    var self = this;
    return self.strength;  
};

Player.prototype.specialAttack = function () {
    var self = this;
    return self.specialAbility;
}


function Goku () {
    Player.call(this, 500, 75)
    this.name = 'Goku';
    this.specialAbility = 600;
    this.specialAbilityName = 'Kamehameha Wave!';
};

Goku.prototype = Object.create(Player.prototype);
Goku.prototype.constructor = Goku;

function Vegeta () {
    Player.call(this, 500, 70)
    this.name = 'Vegeta';
    this.specialAbility = 500;
    this.specialAbilityName = 'Galick Gun!';
}

Vegeta.prototype = Object.create(Player.prototype);
Vegeta.prototype.constructor = Vegeta;

function Gohan () {
    Player.call(this, 500, 70)
    this.name = 'Teen Gohan';
    this.specialAbility = 800;
    this.specialAbilityName = 'Super Kamehameha Wave!';
}

Gohan.prototype = Object.create(Player.prototype);
Gohan.prototype.constructor = Gohan;


function Broly () {
    Player.call(this, 1000, 100)
    this.name = 'Broly';
    this.specialAbility = 400;
    this.specialAbilityName = 'RAGE!'
}

Broly.prototype = Object.create(Player.prototype);
Broly.prototype.constructor = Broly;

function Janemba () {
    Player.call(this, 1500, 100)
    this.name = 'Janemba';
    this.specialAbility = 500;
    this.specialAbilityName = 'Sword Dash!'
}

Janemba.prototype = Object.create(Player.prototype);
Janemba.prototype.constructor = Janemba;


function Buu () {
    Player.call(this, 1500, 70)
    this.name = 'Kid Buu';
    this.specialAbility = 300;
    this.specialAbilityName = 'Vanishing Beam!'
}

Buu.prototype = Object.create(Player.prototype);
Buu.prototype.constructor = Buu;


function Beerus () {
    Player.call(this, 500000, 10000)
    this.name = 'Beerus';
    this.specialAbility = 10000;
    this.specialAbilityName = 'Hakai!'
}

Beerus.prototype = Object.create(Player.prototype);
Beerus.prototype.constructor = Beerus;
