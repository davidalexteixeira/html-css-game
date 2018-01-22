'use strict';


function Game (gameElement, end){
    this.gameElement = gameElement;
    this.fightButtonOneElement;
    this.fightButtonTwoElement;
    this.gameIsOver = false;
    this.characterOne;
    this.characterTwo;
    this.healthBar1;
    this.healthBar2;
    this.onEnded;
}

var goku = new Goku ();

var broly = new Broly ();

var battle = new Battle (goku, broly)

Game.prototype.gameIsOver = function () {
    var self = this; 

    if(goku.isDead === true) {
        self.gameIsOver = true;
        self.onEnded();
    }

}

Game.prototype.attackOneClick = function () {
   var self = this; 
   battle.attackPlayer(1);
   self.gameIsOver();
};

Game.prototype.attackTwoClick = function () {
    var self = this;
    battle.attackPlayer(2);
    self.gameIsOver();
};

Game.prototype.buildStage = function() {
    var self = this;

    self.fightButtonOneElement = document.createElement('button');
    self.fightButtonOneElement.setAttribute('id', 'fight');
    self.fightButtonOneElement.innerText = 'Attack One';
    self.gameElement.appendChild(self.fightButtonOneElement);

    self.fightButtonTwoElement = document.createElement('button');
    self.fightButtonTwoElement.setAttribute('id', 'fight-two');
    self.fightButtonTwoElement.innerText ='Attack Two';
    self.gameElement.appendChild(self.fightButtonTwoElement);

    self.fightButtonOneElement.addEventListener('click', self.attackOneClick);

    self.fightButtonTwoElement.addEventListener('click', self.attackTwoClick);
    self.characterOne = document.createElement('');
    self.characterTwo = document.createElement('');
    self.healthBar1 = document.createElement('');
    self.healthBar2 = document.createElement('');
}




