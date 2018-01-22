'use strict';


function Game (gameElement){
    this.gameElement = gameElement;
    this.fightButtonOneElement;
    this.characterOne;
    this.characterTwo;
    this.healthBar1;
    this.healthBar2;
    this.onEnded;
    this.battle;

    this.init();
}

Game.prototype.init = function() {
    var self = this;

    self.buildStage();
    self.startGame();
}

Game.prototype.startGame = function() {
    var goku = new Goku ();
    var broly = new Broly ();
    
    this.battle = new Battle (goku, broly)
}


Game.prototype.checkIfIsOver = function () {
    var self = this; 

    if(self.battle.playerOne.isDead) {
        self.onEnded(self.battle.playerOne.name);
    } else if (self.battle.playerTwo.isDead){
        self.onEnded(self.battle.playerTwo.name);
    }
}

Game.prototype.attackClick = function () {
    var self = this;
    self.battle.attack();
    self.checkIfIsOver();
    self.battle.updateTurn();
};


Game.prototype.buildStage = function() {
    var self = this;

    self.fightButtonOneElement = document.createElement('button');
    self.fightButtonOneElement.setAttribute('id', 'fight');
    self.fightButtonOneElement.innerText = 'Attack One';
    self.gameElement.appendChild(self.fightButtonOneElement);

    self.fightButtonOneElement.addEventListener('click', self.attackClick.bind(self));

    // self.characterOne = document.createElement('');
    // self.characterTwo = document.createElement('');
    //Health Bar # 1
    // self.healthBar1 = document.createElement('div');
    // self.healthBar1.setAttribute('id', 'health-bar')
    // self.healthBar1.innerText = battle.playerOne.health;
    // self.gameElement.appendChild(self.healthBar1);
    // //Health bar # 2
    // self.healthBar2 = document.createElement('div');
    // self.healthBar2.setAttribute('id', 'health-bar')
    // self.healthBar2.innerText = battle.playerTwo.health;
    // self.gameElement.appendChild(self.healthBar2);
}




