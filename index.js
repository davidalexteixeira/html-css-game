'use strict';

function main () {

    var mainElement = document.querySelector('#site-main');
    var stage;

    //SPLASH

    var splashElement;
    var startGameButton;
    

    var handleStartClick = function () {
        destroySplash();
        buildCharacterSelect();
        var snd = new Audio("./Sounds/start.mp3");
        snd.play();
    };

    function buildSplash(){
        //@todo build div
        stage = 'splash';
        
        splashElement = document.createElement('div');
        splashElement.setAttribute('id', 'splash');

        var title = document.createElement('h1');
        title.innerText = 'The Turn of the Dragon';

        splashElement.appendChild(title);
  
        mainElement.appendChild(splashElement);
        //@todo create a button

        startGameButton = document.createElement('button');
        startGameButton.setAttribute('id', 'button');
        startGameButton.innerText = 'Fight!';
        splashElement.appendChild(startGameButton); 

        startGameButton.addEventListener('click', handleStartClick);
        //@todo call destroySplash on click
    };

    function destroySplash(){
        //@todo remove splash content
        startGameButton.removeEventListener('click', handleStartClick);
        splashElement.remove();

    };

    //CHARACTER SELECT STAGE

    var stageElement;
    
    function buildCharacterSelect(){
        stage = 'characterSelect'

        stageElement = document.createElement('div');
        stageElement.setAttribute('id', 'splash');
        mainElement.appendChild(stageElement);

        var selectCharacter = new Character (stageElement);

        selectCharacter.onCharacterSelected(function (players) {
            destroyCharacterSelect();
            buildGame(players);
            var snd = new Audio("./Sounds/start.mp3");
             snd.play();
        });


    };

    function destroyCharacterSelect() {
        stageElement.remove();
    };

    //BUILD GAME STAGE

    var fightButton;
    var gameElement;

    function buildGame (players){
        stage = 'game';

        gameElement = document.createElement('div');
        gameElement.setAttribute('id', 'game');
        mainElement.appendChild(gameElement);

        var game = new Game(gameElement, players);
        game.onGameOver(function (name) {
            console.log(name);
            destroyGame();
            buildGameOver(name);
        });
        //@todo create dom elements 
        
    };
    
    function destroyGame (){
        gameElement.remove();       
    };

    //GAMEOVER

    var gameOverElement;
    var gameOverButton;

    var handleGameOverClick = function () {
        destroyGameOver();
        buildCharacterSelect();
        var snd = new Audio("./Sounds/start.mp3");
        snd.play();
    };

    function buildGameOver (name){
        stage = 'gameOver';
        
        gameOverElement = document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        var endTitle = document.createElement('h1');
        endTitle.innerText = 'GAME OVER ' + name;
        gameOverElement.appendChild(endTitle);

        var endElement = document.querySelector('#site-main');
        endElement.appendChild(gameOverElement);
       

        gameOverButton = document.createElement('button')
        gameOverButton.innerText = 'Continue?';
        gameOverButton.setAttribute('id', 'button')
        gameOverElement.appendChild(gameOverButton); 

        gameOverButton.addEventListener('click', handleGameOverClick);

        
        
       
    };

    function destroyGameOver (){

        gameOverButton.removeEventListener('click', handleGameOverClick);
        gameOverElement.remove();

    };

    buildSplash();

};


window.onload = main;