'use strict';

function Battle (playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;

}

Battle.prototype.chooseCommand = function() {
    
}

Battle.prototype.attackPlayer = function(player) {
    var self = this;

    if (player === 1) {
        self.playerTwo.receiveDamage(self.playerOne.attack());   
        self.checkIfDeath(2);
    } else {
        self.playerOne.receiveDamage(self.playerTwo.attack()); 
        self.checkIfDeath(1);
    }
    console.log('Player 1: ', self.playerOne.health);
    console.log('Player 2: ', self.playerTwo.health);
}

Battle.prototype.checkIfDeath = function(player) {
    var self = this;

    if (player === 1) {
        if(self.playerOne.health <= 0) {
            self.playerOne.isDead = true;
        } 
    } else {
        if(self.playerTwo.health <= 0) {
            self.playerTwo.isDead = true;
        }  
    }
}

