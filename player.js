'use strict';

function Player (health, strength, defenseBonus, criticalHitChance, attackHitChance){
    this.isDead = false;
    this.health = health;
    this.strength = strength;
    this.criticalHitChance = criticalHitChance;
    this.attackHitChance = attackHitChance;
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

Player.prototype.getBonus = function () {
    var self = this;
    self.health = Math.floor(Math.random() * 50) + self.health;
};

Player.prototype.attackHitChance = function () {
    var self = this;
    return Math.floor(Math.random() * 40) - self.attackHitChance;
};


function Goku () {
    Player.call(this, 500, 75, 100, 100)
    this.name = 'Goku';
    this.specialAbility = 600;
    this.specialAbilityName = 'Kamehameha Wave!';
};

Goku.prototype = Object.create(Player.prototype);
Goku.prototype.constructor = Goku;

function Vegeta () {
    Player.call(this, 500, 70, 100, 100)
    this.name = 'Vegeta';
    this.specialAbility = 500;
    this.specialAbilityName = 'Galick Gun!';
}

Vegeta.prototype = Object.create(Player.prototype);
Vegeta.prototype.constructor = Vegeta;

function Gohan () {
    Player.call(this, 500, 70, 100, 100)
    this.name = 'Gohan';
    this.specialAbility = 800;
    this.specialAbilityName = 'Super Kamehameha Wave!';
}

Gohan.prototype = Object.create(Player.prototype);
Gohan.prototype.constructor = Gohan;


function Broly () {
    Player.call(this, 1000, 100, 100, 100)
    this.name = 'Broly';
    this.specialAbility = 400;
    this.specialAbilityName = 'RAGE!'
}

Broly.prototype = Object.create(Player.prototype);
Broly.prototype.constructor = Broly;

function Piccolo () {
    Player.call(this, 700, 80, 100, 100)
    this.name = 'Piccolo';
    this.specialAbility = 500;
    this.specialAbilityName = 'Special Beam Cannon!'
}

Piccolo.prototype = Object.create(Player.prototype);
Piccolo.prototype.constructor = Piccolo;


function Buu () {
    Player.call(this, 1500, 70, 100, 100)
    this.name = 'Kid Buu';
    this.specialAbility = 300;
    this.specialAbilityName = 'Vanishing Beam!'
}

Buu.prototype = Object.create(Player.prototype);
Buu.prototype.constructor = Buu;


function Beerus () {
    Player.call(this, 500000, 10000, 0, 100 , 100)
    this.name = 'Beerus';
    this.specialAbility = 10000;
    this.specialAbilityName = 'Hakai!'
}

Beerus.prototype = Object.create(Player.prototype);
Beerus.prototype.constructor = Beerus;
