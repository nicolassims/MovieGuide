/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary Design an rps program || created: 10.17.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let computerHand, playerHand, victoryMet;

function main() {
    while (victoryMet == 1 || victoryMet == null) {
        setComputerHand();
        setPlayerHand();
        setVictoryMet();
    }
}

main();

function setComputerHand() {
    computerHand = Math.floor((Math.random() * 3) + 1);
}

function setPlayerHand() {
    playerHand = PROMPT.question('<1> = Rock\n<2> = Paper\n<3> = Scissors\n>');
    while (playerHand != 1 && playerHand != 2 && playerHand != 3) {
        playerHand = PROMPT.question('That\'s not an option. Select one, two, or three.\n>');
    }
}

function setVictoryMet() {
    const ROCK = 1, PAPER = 2, SCISSORS = 3;
    if (playerHand == ROCK && computerHand == PAPER || playerHand == PAPER && computerHand == SCISSORS || playerHand ==
        SCISSORS && computerHand == ROCK) {
        console.log('Computer wins.');
        victoryMet = 0;
    } else if ( playerHand == computerHand) {
        console.log('Tie. try again.');
        victoryMet = 1;
    } else {
        console.log('You win.');
        victoryMet = 1;
    }
}