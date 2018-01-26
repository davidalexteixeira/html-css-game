'use strict';

function Battle (playerOne, playerTwo, gameElement) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentTurn;
    this.playerCount;
    this.gameElement;

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
    var snd = new Audio("./Sounds/woosh.mp3");
    var snd1 = new Audio('./Sounds/punch.mp3');
    
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

    var hitChance = Math.floor(Math.random() * 100)
    var snd = new Audio("./Sounds/special-attack-miss.mp3");
    var snd1 = new Audio('./Sounds/special-attack-success.mp3');

    if (self.currentTurn === 0 && hitChance > 80) {
        self.playerTwo.receiveDamage(self.playerOne.specialAttack());
        snd1.play();   
    } else if(self.currentTurn === 1 && hitChance > 80){
        self.playerOne.receiveDamage(self.playerTwo.specialAttack()); 
        snd1.play();
    } else {
        snd.play();
    }
    self.checkIfDeath();
    console.log(self.playerOne.name, self.playerOne.health);
    console.log(self.playerTwo.name, self.playerTwo.health);

}

Battle.prototype.defensiveBonus = function () {
    var self = this;
    var snd = new Audio("./Sounds/defense.mp3")

    if (self.currentTurn === 0) {
        self.playerOne.getBonus();
        snd.play();   
    } else {
        self.playerTwo.getBonus(); 
        snd.play();
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


