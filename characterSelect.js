'use strict';

var IMAGES =['Goku.png', 'Broly.png', 'Beerus.png', 'Vegeta.png', 'Piccolo.png', 'Gohan.png', 'KidBuu.png']



function Character (stageElement) {
    var self = this;

    self.stageElement = stageElement;
    self.player1Selection;
    self.player2Selection;
    self.characterSelect1Element;
    self.idxSelectPlayerOne;
    self.characterSelect2Element;
    self.idxSelectPlayerTwo;
    self.onSelected;

    self.handleSelectClick1 = function () {
    
        self.idxSelectPlayerOne++;

        if(self.idxSelectPlayerOne > IMAGES.length - 1){
            self.idxSelectPlayerOne = 0;
        }
        self.characterSelect1Element.setAttribute('src', './Images/' + IMAGES[self.idxSelectPlayerOne])

        self._setSelectedCharacters();
        var snd = new Audio("./Sounds/start.mp3");
        snd.play();
    }

    self.handleSelectClick2 = function () {

        self.idxSelectPlayerTwo++;

        if(self.idxSelectPlayerTwo > IMAGES.length - 1){
            self.idxSelectPlayerTwo = 0;
        }
        self.characterSelect2Element.setAttribute('src', './Images/' + IMAGES[self.idxSelectPlayerTwo])

        self._setSelectedCharacters();
        var snd = new Audio("./Sounds/start.mp3");
        snd.play();
    }

    self.handleSelectedClick = function(event){

        var players = [self.player1Selection, self.player2Selection]
        self.onSelected(players);
    }

    self.init();

}

Character.prototype.init = function () {
    var self = this; 

    self.idxSelectPlayerOne = 0;
    self.idxSelectPlayerTwo = 1;


    self.buildCharacterSelect();
    self._setSelectedCharacters();
}

Character.prototype._setSelectedCharacters = function () {
    var self = this;

    self.player1Selection = self._formatName(IMAGES[self.idxSelectPlayerOne]);
    self.player2Selection = self._formatName(IMAGES[self.idxSelectPlayerTwo]);
}

Character.prototype._formatName = function(string) {
    var self = this;

    return string.replace('.png', '');
    //remove .pgn
    //return the formatted string
}

Character.prototype.onCharacterSelected = function (callback){
    var self = this;

    self.onSelected = callback;
};


Character.prototype.buildCharacterSelect = function () {
    var self = this;

    self.characterSelect1Element = document.createElement('img');
    self.characterSelect2Element = document.createElement('img');
    self.characterSelect1Element.setAttribute('id', 'select-one');
    self.characterSelect2Element.setAttribute('id', 'select-two');
    self.stageElement.appendChild(self.characterSelect1Element);
    self.stageElement.appendChild(self.characterSelect2Element);
    self.characterSelect1Element.setAttribute('src', './Images/Goku.png')
    self.characterSelect2Element.setAttribute('src', './Images/Broly.png')

    var randomDiv = document.createElement('div');
    randomDiv.setAttribute('id', 'button-wrap')
    self.nextButton1 = document.createElement('button');
    self.nextButton1.setAttribute('id', 'next-one-button');
    self.nextButton1.innerText = 'Next';
    randomDiv.appendChild(self.nextButton1);
    self.nextButton1.addEventListener('click', self.handleSelectClick1);
    self.nextButton2 = document.createElement('button');
    self.nextButton2.setAttribute('id', 'next-two-button');
    self.nextButton2.innerText = 'Next';
    randomDiv.appendChild(self.nextButton2);
    self.nextButton2.addEventListener('click', self.handleSelectClick2);
    var randomDiv2 = document.createElement('div');
    randomDiv2.setAttribute('id', 'choose-wrap')
    self.choose1 = document.createElement('button');
    self.choose1.setAttribute('id', 'next-one-button');
    self.choose1.innerText = 'Choose';
    self.choose1.addEventListener('click', self.handleSelectedClick);

    randomDiv2.appendChild(self.choose1);
      
    self.stageElement.appendChild(randomDiv);
    self.stageElement.appendChild(randomDiv2);
}



