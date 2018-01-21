'use strict';

function Players (){
    this.isDead = false;
    this.health = 500;
    this.attack = [
        {name: goku, strength: 500}, 
        {name: broly, strength: 1000}
    ];
}

Players.prototype.attack = function(){

};

Players.prototype.receiveDamage = function () {
    
};
