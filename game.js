'use strict';


function Game (gameElement, players){
    this.gameElement = gameElement;
    this.players = players;
    this.fightButtonOneElement;
    this.fightButtonTwoElement;
    this.defenseBonusElement;
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
    //iterate self.player
    //

    var self = this;
    
    var player1 = self.createPlayers(self.players[0]);
    var player2 = self.createPlayers(self.players[1]);


    this.battle = new Battle (player1, player2)
}

Game.prototype.onGameOver = function(callback) {
    var self = this;
    
    self.onEnded = callback;
}

Game.prototype.createPlayers = function(namePlayer) {
    //switch by name and return the created Character

    switch (namePlayer) {
        case 'Goku':
            return new Goku ();
        case 'Broly':
            return new Broly ();
        case 'Beerus':
            return new Beerus ();
        case 'Vegeta':
            return new Vegeta ();
        case 'Janemba':
            return new Janemba ();
        case 'Gohan':
            return new Gohan ();
        case 'KidBuu':
            return new Buu ();
        default:
         alert('Error occured');
    }

};


Game.prototype.checkIfIsOver = function () {
    var self = this; 

    if(self.battle.playerOne.isDead) {
        self.onEnded(self.battle.playerOne.name);
    } else if (self.battle.playerTwo.isDead){
        self.onEnded(self.battle.playerTwo.name);
    }
}


Game.prototype.attackClick = function (e) {
    var self = this;
    console.log(e);
    var command = 'commnad' //grab the id from the e.currentTarget
    self.battle.attack(); // change name to execCommand
    self.checkIfIsOver();
    self.battle.updateTurn();
};

Game.prototype.specialAttackClick = function () {
    var self = this;
    self.battle.specialAttack();
    self.checkIfIsOver();
    self.battle.updateTurn();
};

Game.prototype.defenseButtonClick = function () {
    var self = this;
    self.battle.defensiveBonus();
    self.checkIfIsOver();
    self.battle.updateTurn();
};


Game.prototype.buildStage = function() {
    var self = this;

    var buttonWrap;
    var player1;
    var player2;

    buttonWrap = document.createElement('div');
    buttonWrap.setAttribute('id','game-wrapper');
    self.gameElement.appendChild(buttonWrap);

    player1 = document.createElement('div');
    player1.setAttribute('id', 'goku-standing');
    self.gameElement.appendChild(player1);

    player2 = document.createElement('div');
    player2.setAttribute('id', 'player-two');
    self.gameElement.appendChild(player2);

    self.fightButtonOneElement = document.createElement('button');
    self.fightButtonOneElement.setAttribute('id', 'fight');
    self.fightButtonOneElement.innerText = 'Attack One';
    self.gameElement.appendChild(self.fightButtonOneElement);

    self.fightButtonOneElement.addEventListener('click', self.attackClick.bind(self));
    
    self.fightButtonTwoElement = document.createElement('button');
    self.fightButtonTwoElement.setAttribute('id', 'special');
    self.fightButtonTwoElement.innerText = 'Special Attack';
    self.gameElement.appendChild(self.fightButtonTwoElement);

    self.fightButtonTwoElement.addEventListener('click', self.specialAttackClick.bind(self));

    self.defenseBonusElement = document.createElement('button');
    self.defenseBonusElement.setAttribute('id', 'special');
    self.defenseBonusElement.innerText = 'Defense';
    self.gameElement.appendChild(self.defenseBonusElement);

    self.defenseBonusElement.addEventListener('click', self.defenseButtonClick.bind(self));

    // self.characterOne = document.createElement('');
    // self.characterTwo = document.createElement('');
    //Health Bar # 1
    // self.healthBar1 = document.createElement('div');
    // self.healthBar1.setAttribute('id', 'health-bar')
    // self.healthBar1.innerText = Player.playerOne.health;
    // self.gameElement.appendChild(self.healthBar1);
    // // //Health bar # 2
    // self.healthBar2 = document.createElement('div');
    // self.healthBar2.setAttribute('id', 'health-bar')
    // self.healthBar2.innerText = Player.playerTwo.health;
    // self.gameElement.appendChild(self.healthBar2);

    //self.characterOneSelect = document.createElement('button');
    //self.characterTwoSelect = document.createElement('button');
    //self.characterOneSelect.setAttribute('id', 'character-one-select');
    //self.characterTwoSelect.setAttribute('id', 'character-two-select');
    //self.gameElement.appendChild('self.characterOneSelect');
    //self.gameElement.appendChild('self.characterTwoSelect');
}





