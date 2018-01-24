'use strict';

var IMAGES =['','Beerus.png', 'Vegeta.png', 'Janemba.png', 'Gohan.png', 'Broly.png', 'KidBuu.png','Goku.png']



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

        self.characterSelect1Element.setAttribute('src', './Images/' + IMAGES[self.idxSelectPlayerOne])
        if(self.idxSelectPlayerOne >= IMAGES.length - 1){
            self.idxSelectPlayerOne = 0;
        }

        self.player1Selection = self._formatName(IMAGES[self.idxSelectPlayerOne]);

        
    }

    self.handleSelectClick2 = function () {

        self.idxSelectPlayerTwo++;

        self.characterSelect2Element.setAttribute('src', './Images/' + IMAGES[self.idxSelectPlayerTwo])
        if(self.idxSelectPlayerTwo >= IMAGES.length - 1){
            self.idxSelectPlayerTwo = 0;
        }

        self.player2Selection = self._formatName(IMAGES[self.idxSelectPlayerTwo]);
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
    self.idxSelectPlayerTwo = 0;
    self.buildCharacterSelect();
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
    self.choose1 = document.createElement('button');
    self.choose1.setAttribute('id', 'next-one-button');
    self.choose1.innerText = 'Choose';
    self.choose1.addEventListener('click', self.handleSelectedClick);

    randomDiv2.appendChild(self.choose1);
      
    self.stageElement.appendChild(randomDiv);
    self.stageElement.appendChild(randomDiv2);
}



