'use strict';

var IMAGES =['Beerus.png', 'Vegeta.png', 'Janemba.png', 'Gohan.png', 'Broly.png', 'KidBuu.png','Goku.png']



function Character (stageElement, players) {
    this.players = players;
    this.stageElement = stageElement;
    this.characterSelect1Element;
    this.idxSelectPlayerOne;
    this.characterSelect2Element;
    this.idxSelectPlayerTwo;

    this.handleSelectClick1 = function () {
        this.idxSelectPlayerOne++;

        this.characterSelect1Element.setAttribute('src', './Images/' + IMAGES[this.idxSelectPlayerOne])
        if(this.idxSelectPlayerOne >= IMAGES.length - 1){
            this.idxSelectPlayerOne = -1;
        }

        
    }

    this.handleSelectClick2 = function () {
        this.idxSelectPlayerTwo++;

        this.characterSelect2Element.setAttribute('src', './Images/' + IMAGES[this.idxSelectPlayerTwo])
        if(this.idxSelectPlayerTwo >= IMAGES.length - 1){
            this.idxSelectPlayerTwo = -1;
        }

    }

    this.init();

}

Character.prototype.init = function () {
    var self = this; 

    self.idxSelectPlayerOne = 0;
    self.idxSelectPlayerTwo = 0;
    self.buildCharacterSelect();
}

Character.prototype.characterSelected = function (){
    var self = this;

    

};

Character.prototype.nextCharacter = function () {

}

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
    self.nextButton1.addEventListener('click', self.handleSelectClick1.bind(self));
    self.nextButton2 = document.createElement('button');
    self.nextButton2.setAttribute('id', 'next-two-button');
    self.nextButton2.innerText = 'Next';
    randomDiv.appendChild(self.nextButton2);
    self.nextButton2.addEventListener('click', self.handleSelectClick2.bind(self));
    var randomDiv2 = document.createElement('div');
    self.choose1 = document.createElement('button');
    self.choose1.setAttribute('id', 'next-one-button');
    self.choose1.innerText = 'Choose';
    self.choose1.addEventListener('click', function(event){
        return self.characterSelected();
    });

    randomDiv2.appendChild(self.choose1);
    self.choose2 = document.createElement('button');
    self.choose2.setAttribute('id', 'next-two-button');
    self.choose2.innerText = 'Choose';
    self.choose2.addEventListener('click', function(event){
        return self.characterSelected();
    });

    randomDiv2.appendChild(self.choose2);


    self.stageElement.appendChild(randomDiv);
    self.stageElement.appendChild(randomDiv2);
}


