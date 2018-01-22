'use strict';

function main () {

    var mainElement = document.querySelector('#site-main');
    var stage;

    //SPLASH

    var splashElement;
    var startGameButton;

    var handleStartClick = function () {
        destroySplash();
        buildGame();
    };

    //@todo top level variables 
    //@todo constant variables that don't change 


    function buildSplash(){
        //@todo build div
        stage = 'splash';
        
        splashElement = document.createElement('div');
        splashElement.setAttribute('id', 'splash');

        var title = document.createElement('h1');
        title.innerText = 'Dragan Ball Zad';

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

    var fightButton;
    var gameElement;

    function buildGame (){
        stage = 'game';

        gameElement = document.createElement('div');
        gameElement.setAttribute('id', 'game');
        mainElement.appendChild(gameElement);

        var game = new Game(gameElement);
        game.onEnded = function (name) {
            console.log(name);
            destroyGame();
            buildGameOver(name);
        }
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
        buildGame();
    };

    function buildGameOver (name){
        stage = 'gameOver';
        //@todo create div

        gameOverElement = document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        var endTitle = document.createElement('h1');
        endTitle.innerText = 'GAME OVER ' + name;
        gameOverElement.appendChild(endTitle);

        var endElement = document.querySelector('#site-main');
        endElement.appendChild(gameOverElement);
        //@todo create a button

        gameOverButton = document.createElement('button')
        gameOverButton.innerText = 'Continue?';
        gameOverButton.setAttribute('id', 'button')
        gameOverElement.appendChild(gameOverButton); 

        gameOverButton.addEventListener('click', handleGameOverClick);

        
        
       
    };

    function destroyGameOver (){
        //@todo remove buildGameOver
        //@todo call buildGame
        gameOverButton.removeEventListener('click', handleGameOverClick);
        gameOverElement.remove();

    };

    buildSplash();

};


window.onload = main;