'use strict';

function Battle (playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentTurn;
    this.playerCount;

    this.init();
}

Battle.prototype.init = function() {
    this.playerCount = 2;
    this.currentTurn = 0;
}

Battle.prototype.updateTurn = function() {
    var self = this;
    self.currentTurn += 1;
    self.currentTurn = self.currentTurn % self.playerCount;
}

Battle.prototype.chooseCommand = function() {
    
}

Battle.prototype.attack = function(command) { //must change to execCommand
    var self = this;

    //switch (command)
    // case attack -> check turn and attack

    var hitChance = Math.floor(Math.random() * 100);
    var snd = new Audio("./Sounds/woosh.mp3"); // buffers automatically when created
    var snd1 = new Audio('./Sounds/punch.mp3')

    
    if (self.currentTurn === 0 && hitChance > 50) { 
        self.playerTwo.receiveDamage(self.playerOne.attack())
        snd1.play();
    } else if (self.currentTurn === 1 && hitChance > 50){
        self.playerOne.receiveDamage(self.playerTwo.attack())
        snd1.play();
    } else {
        snd.play();
    }
    self.checkIfDeath();
    console.log(self.playerOne.name, self.playerOne.health);
    console.log(self.playerTwo.name, self.playerTwo.health);
}

Battle.prototype.specialAttack = function () {
    var self = this; 

    if (self.currentTurn === 0) {
        self.playerTwo.receiveDamage(self.playerOne.specialAttack());   
    } else {
        self.playerOne.receiveDamage(self.playerTwo.specialAttack()); 
    }
    self.checkIfDeath();
    console.log(self.playerOne.name, self.playerOne.health);
    console.log(self.playerTwo.name, self.playerTwo.health);

}

Battle.prototype.defensiveBonus = function () {
    var self = this;

    if (self.currentTurn === 0) {
        self.playerOne.getBonus();   
    } else {
        self.playerTwo.getBonus(); 
    }
    self.checkIfDeath();
    console.log(self.playerOne.name, self.playerOne.health);
    console.log(self.playerTwo.name, self.playerTwo.health);


}


Battle.prototype.checkIfDeath = function() {
    var self = this;

    if(self.playerOne.health <= 0) {
        self.playerOne.isDead = true;
    } 
    if(self.playerTwo.health <= 0) {
        self.playerTwo.isDead = true;
    }  
}

