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
    self.updateHealth();
}

Game.prototype.startGame = function() {
    //iterate self.player
    //

    var self = this;
    
    var player1 = self.createPlayers(self.players[0]);
    var player2 = self.createPlayers(self.players[1]);

    self.playerImagesOne(player1);
    self.PlayerImagesTwo(player2);
    

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
        case 'Piccolo':
            return new Piccolo ();
        case 'Gohan':
            return new Gohan ();
        case 'KidBuu':
            return new Buu ();
        default:
         alert('Error occured');
    }

};

var characterSwitchOne;
var characterSwitchTwo;

Game.prototype.playerImagesOne = function(player1) {
    var self = this; 

    self.characterSwitchOne = document.createElement('div');
    self.characterSwitchOne.setAttribute('id', '');
    self.gameElement.appendChild(self.characterSwitchOne);
    
    switch(player1.name){
        case 'Goku':
        return self.characterSwitchOne.setAttribute('id', 'goku-standing-player-one');
        case 'Broly':
        return self.characterSwitchOne.setAttribute('id', 'broly-standing-player-one');
        case 'Beerus':
        return self.characterSwitchOne.setAttribute('id', 'beerus-standing-player-one');
        case 'Vegeta':
        return self.characterSwitchOne.setAttribute('id', 'vegeta-standing-player-one');
        case 'Piccolo':
        return self.characterSwitchOne.setAttribute('id', 'piccolo-standing-player-one');
        case 'Gohan':
        return self.characterSwitchOne.setAttribute('id', 'gohan-standing-player-one');
        case 'Kid Buu':
        return self.characterSwitchOne.setAttribute('id', 'buu-standing-player-one');
        default:
        alert('Error occured');
    }
};

Game.prototype.PlayerImagesTwo = function (player2) {
    var self = this;

    self.characterSwitchTwo = document.createElement('div');
    self.characterSwitchTwo.setAttribute('id', '');
    self.gameElement.appendChild(self.characterSwitchTwo);
    switch(player2.name){
        case 'Goku':
            return self.characterSwitchTwo.setAttribute('id', 'goku-standing-player-two');
        case 'Broly':
            return self.characterSwitchTwo.setAttribute('id', 'broly-standing-player-two');
        case 'Beerus':
            return self.characterSwitchTwo.setAttribute('id', 'beerus-standing-player-two');
        case 'Vegeta':
            return self.characterSwitchTwo.setAttribute('id', 'vegeta-standing-player-two');
        case 'Piccolo':
            return self.characterSwitchTwo.setAttribute('id', 'piccolo-standing-player-two');
        case 'Gohan':
            return self.characterSwitchTwo.setAttribute('id', 'gohan-standing-player-two');
        case 'Kid Buu':
            return self.characterSwitchTwo.setAttribute('id', 'buu-standing-player-two');
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
    self.updateHealth();
    
    console.log(self.battle.playerOne.health)
    self.battle.updateTurn();
};

Game.prototype.updateHealth = function () {
    var self = this;
    document.querySelectorAll('.health-bar')[0].innerText = (self.battle.playerOne.name + ' ' + self.battle.playerOne.health)
    document.querySelectorAll('.health-bar')[1].innerText = (self.battle.playerTwo.name + ' ' + self.battle.playerTwo.health)
}

Game.prototype.specialAttackClick = function () {
    var self = this;
    self.battle.specialAttack();
    self.checkIfIsOver();
    self.battle.updateTurn();
    self.updateHealth();
};

Game.prototype.defenseButtonClick = function () {
    var self = this;
    self.battle.defensiveBonus();
    self.checkIfIsOver();
    self.battle.updateTurn();
    self.updateHealth();
};


Game.prototype.buildStage = function() {
    var self = this;

    var buttonWrap;
    var healthWrap;
    var player1;
    var player2;

    buttonWrap = document.createElement('div');
    buttonWrap.setAttribute('id','game-wrapper');
    self.gameElement.appendChild(buttonWrap);

    // player1 = document.createElement('div');
    // player1.setAttribute('id', 'goku-standing-player-one');
    // self.gameElement.appendChild(player1);

    // player2 = document.createElement('div');
    // player2.setAttribute('id', 'broly-standing-player-two');
    // self.gameElement.appendChild(player2);

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

    //Health Bar # 1
    self.healthBar1 = document.createElement('div');
    self.healthBar1.setAttribute('class', 'health-bar')
    self.healthBar1.innerText = self.players[0];
    self.gameElement.appendChild(self.healthBar1);
    // // //Health bar # 2
    self.healthBar2 = document.createElement('div');
    self.healthBar2.setAttribute('class', 'health-bar')
    self.healthBar2.innerText = self.players[1];
    self.gameElement.appendChild(self.healthBar2);
    healthWrap = document.createElement('div');
    healthWrap.setAttribute('id', 'health-wrap')
    healthWrap.appendChild(self.healthBar1);
    healthWrap.appendChild(self.healthBar2);
    self.gameElement.appendChild(healthWrap);

}





