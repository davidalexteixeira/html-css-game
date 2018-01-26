'use strict';


function Game (gameElement, players){
    this.gameElement = gameElement;
    this.players = players;
    this.fightButtonOneElement;
    this.fightButtonTwoElement;
    this.fightButtonThreeElement
    this.fightButtonFourElement;
    this.defenseBonusElement;
    this.defenseBonusOneElement;
    this.characterOne;
    this.characterTwo;
    this.healthBar1;
    this.healthBar2;
    this.highLightPlayerOne;
    this.highLightPlayerTwo;
    this.gameWrap;
    this.onEnded;
    this.battle;

    this.init();
};

Game.prototype.init = function() {
    var self = this;

    self.buildStage();
    self.startGame();
    self.updateHealth();
    self.buildHighLightPlayerOne();
};

Game.prototype.startGame = function() {
    //iterate self.player
    //

    var self = this;
    
    var player1 = self.createPlayers(self.players[0]);
    var player2 = self.createPlayers(self.players[1]);

    self.playerImagesOne(player1);
    self.PlayerImagesTwo(player2);
    

    this.battle = new Battle (player1, player2)
};

Game.prototype.onGameOver = function(callback) {
    var self = this;
    
    self.onEnded = callback;
};

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
    self.gameWrap.appendChild(self.characterSwitchOne);
    
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
    self.gameWrap.appendChild(self.characterSwitchTwo);

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

    self.whosTurnIsIt();
    self.battle.attack(); 
    self.checkIfIsOver();
    self.updateHealth();
    console.log(self.battle.playerOne.health)
    self.battle.updateTurn();
    
};

Game.prototype.buildHighLightPlayerOne = function () {
    var self = this;

    if(self.battle.playerOne.name === 'Goku'){
        self.highLightPlayerOne = document.getElementById('goku-standing-player-one'); 
        self.highLightPlayerOne.className = 'goku-standing-player-one-turn';
    }else if (self.battle.playerOne.name === 'Broly') {
        self.highLightPlayerOne = document.getElementById('broly-standing-player-one'); 
        self.highLightPlayerOne.className = 'broly-standing-player-one-turn';
    }else if (self.battle.playerOne.name === 'Beerus') {
        self.highLightPlayerOne = document.getElementById('beerus-standing-player-one'); 
        self.highLightPlayerOne.className = 'beerus-standing-player-one-turn';
    }else if (self.battle.playerOne.name === 'Vegeta') {
        self.highLightPlayerOne = document.getElementById('vegeta-standing-player-one'); 
        self.highLightPlayerOne.className = 'vegeta-standing-player-one-turn';
    }else if (self.battle.playerOne.name === 'Piccolo') {
        self.highLightPlayerOne = document.getElementById('piccolo-standing-player-one'); 
        self.highLightPlayerOne.className = 'piccolo-standing-player-one-turn';
    }else if (self.battle.playerOne.name === 'Gohan') {
        self.highLightPlayerOne = document.getElementById('gohan-standing-player-one'); 
        self.highLightPlayerOne.className = 'gohan-standing-player-one-turn';
    }else if (self.battle.playerOne.name === 'Kid Buu') {
        self.highLightPlayerOne = document.getElementById('buu-standing-player-one'); 
        self.highLightPlayerOne.className = 'buu-standing-player-one-turn';
    }
    
}
Game.prototype.buildHighLightPlayerTwo = function (){
    
    var self = this;
    
    if(self.battle.playerTwo.name === 'Goku'){
        self.highLightPlayerTwo = document.getElementById('goku-standing-player-two'); 
        self.highLightPlayerTwo.className = 'goku-standing-player-two-turn';
    }else if (self.battle.playerTwo.name === 'Broly') {
        self.highLightPlayerTwo = document.getElementById('broly-standing-player-two'); 
        self.highLightPlayerTwo.className = 'broly-standing-player-two-turn';
    }else if (self.battle.playerTwo.name === 'Beerus') {
        self.highLightPlayerTwo = document.getElementById('beerus-standing-player-two'); 
        self.highLightPlayerTwo.className = 'beerus-standing-player-two-turn';
    }else if (self.battle.playerTwo.name === 'Vegeta') {
        self.highLightPlayerTwo = document.getElementById('vegeta-standing-player-two'); 
        self.highLightPlayerTwo.className = 'vegeta-standing-player-two-turn';
    }else if (self.battle.playerTwo.name === 'Piccolo') {
        self.highLightPlayerTwo = document.getElementById('piccolo-standing-player-two'); 
        self.highLightPlayerTwo.className = 'piccolo-standing-player-two-turn';
    }else if (self.battle.playerTwo.name === 'Gohan') {
        self.highLightPlayerTwo = document.getElementById('gohan-standing-player-two'); 
        self.highLightPlayerTwo.className = 'gohan-standing-player-two-turn';
    }else if (self.battle.playerTwo.name === 'Kid Buu') {
        self.highLightPlayerTwo = document.getElementById('buu-standing-player-two'); 
        self.highLightPlayerTwo.className = 'buu-standing-player-two-turn';
    }   
}



Game.prototype.whosTurnIsIt = function() {
    var self = this;


    if(self.battle.currentTurn === 1){
        self.buildHighLightPlayerOne();
        if(self.highLightPlayerTwo) {
            self.highLightPlayerTwo.removeAttribute('class');
        }
    } else {
        self.buildHighLightPlayerTwo();
            if(self.highLightPlayerOne) {
              self.highLightPlayerOne.removeAttribute('class');
    };
        
    }
}

Game.prototype.updateHealth = function () {
    var self = this;
    document.querySelectorAll('.health-bar')[0].innerText = (self.battle.playerOne.name + ' ' + self.battle.playerOne.health)
    document.querySelectorAll('.health-bar')[1].innerText = (self.battle.playerTwo.name + ' ' + self.battle.playerTwo.health)
};

Game.prototype.specialAttackClick = function () {
    var self = this;

    self.whosTurnIsIt();
    self.battle.specialAttack();
    self.checkIfIsOver();
    self.battle.updateTurn();
    self.updateHealth();
    
};

Game.prototype.defenseButtonClick = function () {
    var self = this;

    self.whosTurnIsIt();
    self.battle.defensiveBonus();
    self.checkIfIsOver();
    self.battle.updateTurn();
    self.updateHealth();
    
};



Game.prototype.buildStage = function() {
    var self = this;

 
    var healthWrap;
    var player1;
    var player2;

    self.gameWrap = document.createElement('div');
    self.gameWrap.setAttribute('id', 'stage-wrap')
    self.gameElement.appendChild(self.gameWrap);


    self.fightButtonOneElement = document.createElement('button');
    self.fightButtonOneElement.setAttribute('id', 'fight');
    self.fightButtonOneElement.innerText = 'Attack One';
    self.gameWrap.appendChild(self.fightButtonOneElement);

    self.fightButtonOneElement.addEventListener('click', self.attackClick.bind(self));
    
    self.fightButtonTwoElement = document.createElement('button');
    self.fightButtonTwoElement.setAttribute('id', 'special');
    self.fightButtonTwoElement.innerText = 'Special Attack';
    self.gameWrap.appendChild(self.fightButtonTwoElement);

    self.fightButtonTwoElement.addEventListener('click', self.specialAttackClick.bind(self));

    self.defenseBonusElement = document.createElement('button');
    self.defenseBonusElement.setAttribute('id', 'special');
    self.defenseBonusElement.innerText = 'Defense';
    self.gameWrap.appendChild(self.defenseBonusElement);

    self.defenseBonusElement.addEventListener('click', self.defenseButtonClick.bind(self));


    self.fightButtonThreeElement = document.createElement('button');
    self.fightButtonThreeElement.setAttribute('id', 'fight2');
    self.fightButtonThreeElement.innerText = 'Attack One';
    self.gameWrap.appendChild(self.fightButtonThreeElement);

    self.fightButtonThreeElement.addEventListener('click', self.attackClick.bind(self));
    
    self.fightButtonFourElement = document.createElement('button');
    self.fightButtonFourElement.setAttribute('id', 'special2');
    self.fightButtonFourElement.innerText = 'Special Attack';
    self.gameWrap.appendChild(self.fightButtonFourElement);

    self.fightButtonFourElement.addEventListener('click', self.specialAttackClick.bind(self));

    self.defenseBonusOneElement = document.createElement('button');
    self.defenseBonusOneElement.setAttribute('id', 'special2');
    self.defenseBonusOneElement.innerText = 'Defense';
    self.gameWrap.appendChild(self.defenseBonusOneElement);

    self.defenseBonusOneElement.addEventListener('click', self.defenseButtonClick.bind(self));
  
    self.healthBar1 = document.createElement('div');
    self.healthBar1.setAttribute('class', 'health-bar')
    self.healthBar1.innerText = self.players[0];
    self.gameWrap.appendChild(self.healthBar1);
 
    self.healthBar2 = document.createElement('div');
    self.healthBar2.setAttribute('class', 'health-bar')
    self.healthBar2.innerText = self.players[1];
    self.gameWrap.appendChild(self.healthBar2);
    healthWrap = document.createElement('div');
    healthWrap.setAttribute('id', 'health-wrap')
    healthWrap.appendChild(self.healthBar1);
    healthWrap.appendChild(self.healthBar2);
    self.gameWrap.appendChild(healthWrap);

};





