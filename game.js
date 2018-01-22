'use strict';


function Game (gameElement){
    //battle
    this.gameElement = gameElement;
    this.fightButtonOneElement;
    this.fightButtonTwoElement;
    // this.battle = new Battle(goku, broly)
}

var goku = new Goku ();

var broly = new Broly ();

var battle = new Battle (goku, broly)

var attackOneClick = function () {
   var self = this; 
   battle.attackPlayer(1);

};

var attackTwoClick = function () {
    var self = this;
    battle.attackPlayer(2);
    
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

    self.fightButtonOneElement.addEventListener('click', attackOneClick);

    self.fightButtonTwoElement.addEventListener('click', attackTwoClick);
}
