'use strict';

function main () {

    //@todo top level variables 
    //@todo constant variables that don't change 


    function buildSplash( ){
        //@todo build div
        //@todo create a button
        //@todo call destroySplash on click
        //@todo create dom elements
        destroySplash();
        buildGame();
    }
    function destroySplash(){
        //@todo remove splash content

    }

    function buildGame (){
        //@todo calls game constructor
        //@todo calls players constructor
        //@todo calls battle constructor
        //@todo create dom elements
        destroyGame();
        buildgameOver();
    }

    function destroyGame (){
        //@todo removes buildGame 
        //@todo calls buildGameOver
    }

    function buildGameOver (){
        //@todo create div
            //@clickable button
        //@todo call destroyGameOver
       destroyGame();
       buildGame();
    }

    function destroyGameOver (){
        //@todo remove buildGameOver
        //@todo call buildGame

    }



}


window.onload = main;