'use strict';

function main () {


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

        var mainElement = document.querySelector('#site-main');
        mainElement.appendChild(splashElement);
        //@todo create a button

        startGameButton = document.createElement('button')
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

    function buildGame (){
        stage = 'game';

        var game = document.createElement('div');
        game.setAttribute('id', 'game');

        var mainElement = document.querySelector('#site-main');
        mainElement.appendChild(game);
        

        //@todo calls game constructor
        //@todo calls players constructor
        //@todo calls battle constructor
        //@todo create dom elements
        
        setTimeout(destroyGame, 5000);
        
    };

    
    function destroyGame (){
        game.remove();       
        buildGameOver();
    };

    //GAMEOVER

    var gameOverElement;
    var gameOverButton;

    var handleGameOverClick = function () {
        destroyGameOver();
        buildGame();
    };

    function buildGameOver (){
        stage = 'gameOver';
        //@todo create div

        gameOverElement = document.createElement('div');
        gameOverElement.setAttribute('id', 'game-over');

        var endTitle = document.createElement('h1');
        endTitle.innerText = 'GAME OVER';

        gameOverElement.appendChild(endTitle);

        var endElement = document.querySelector('#site-main');
        endElement.appendChild(gameOverElement);
        //@todo create a button

        gameOverButton = document.createElement('button')
        gameOverButton.innerText = 'Continue?';
        gameOverElement.appendChild(gameOverButton); 

        gameOverButton.addEventListener('click', handleGameOverClick);
        
        //destroyGame();
       
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