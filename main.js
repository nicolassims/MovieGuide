/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary Design a program for the Hollywood Movie Rating Guide || created: 10.11.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let rating, numberRatings, totalRatings, continueInt;

function main() {
    while (continueInt == 1 || continueInt == null) {
        setRating();
        setNumberRating();
        setTotalRatings();
        setContinueInt();
    }
    if (continueInt == 0) {
        printAverageRating();
    }
}

main();

function setRating() {
    rating = PROMPT.question('Out of five stars, what would you rate "Spaceballs 2: The Search for More Money?"\n>');
    for (let i = 0; i < 3 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5; i++) {
        rating = PROMPT.question('No, you idiot, out of FIVE stars. One to five. Try again, twit.\n>');
        if (i == 2) {
            console.log("You're hopeless.")
        }
    }
    console.log("rating=" + rating);
}

function setNumberRating() {
    if (numberRatings == null) {
        numberRatings = 1;
    } else {
        numberRatings += 1;
    }
    console.log("numberratings=" + numberRatings);
}

function setTotalRatings() {
    if (totalRatings == null) {
        totalRatings = Number(rating);
    } else {
        totalRatings += Number(rating)
    }
    console.log("numberratings=" + numberRatings);
    console.log("totalRatings=" + totalRatings);
}

function setContinueInt() {
    continueInt = PROMPT.question('Would you like to continue? <<1 = Yes, 0 = No>>\n>');
    for (let i = 0; i < 3 && continueInt != 1 && continueInt != 0; i++) {
        continueInt = PROMPT.question('There are two options. Two. One or zero. Select one, idiot.\n>');
        if (i == 2) {
            console.log("You're hopeless.");
        }
    }
}

function printAverageRating() {
    let averageRating = totalRatings / numberRatings;
    console.log("The average rating of this move is... " + averageRating + " stars out of five." )
}