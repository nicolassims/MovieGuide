/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary Design a program for the Hollywood Movie Rating Guide || created: 10.11.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movieName, rating, movieNumber, continueInt;
let movieArray = [];
const MOVIENAMECOLUMN = 0, MOVIETOTALRATINGCOLUMN = 1, MOVIENUMBERRATINGS = 2;

function main() {
    setMovieName();
    while (continueInt == 1 || continueInt == null) {
        setMovieNumber();
        setRating();
        populateMovieArray();
        setContinueInt();
    }
    if (continueInt == 0) {
        printAverageRating();
    }
}

main();

function setMovieName(number) {
    if (number == null) {
        movieName = PROMPT.question('What movie do you want to rate today?\n>');
    } else {
        movieName = movieArray[number][MOVIENAMECOLUMN]
    }

}

function setMovieNumber() {
    if (movieNumber == null) {
        movieNumber = 0;
    } else {
        for (let i = 0; i < movieArray.length; i++) {
            console.log('<' + i + '> = ' + movieArray[i][MOVIENAMECOLUMN]);
        }
        movieNumber = PROMPT.question('<' + movieArray.length + '> = A New Movie\n' +
            'Which movie would you like to rate now?\n>');
        if (movieNumber == movieArray.length) {
            return setMovieName();
        } else {
            return setMovieName(movieNumber);
        }
    }
    if (movieNumber < 0 || movieNumber > movieArray.length) {
        console.log('Please check your input.');
        return setMovieNumber();
    }
}

function setRating() {
    rating = PROMPT.question('Out of five stars, what would you rate "' + movieName + '?"\n>');
    for (let i = 0; i < 3 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5; i++) {
        rating = PROMPT.question('Out of five stars, what would you rate "' + movieName + '?"\n>');
        if (i == 2) {
            console.log("You're hopeless.")
        }
    }
}

function populateMovieArray() {
    if (movieArray[movieNumber] == null) {
        movieArray[movieNumber] = [];
        movieArray[movieNumber][MOVIENAMECOLUMN] = movieName;
        movieArray[movieNumber][MOVIETOTALRATINGCOLUMN] = rating;
        movieArray[movieNumber][MOVIENUMBERRATINGS] = 1;
    } else {
        movieArray[movieNumber][MOVIETOTALRATINGCOLUMN] = movieArray[movieNumber][MOVIETOTALRATINGCOLUMN] - -rating;
        movieArray[movieNumber][MOVIENUMBERRATINGS] += 1;
    }
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
    for (let i = 0; i < movieArray.length; i++) {
        console.log(movieArray[i][MOVIENAMECOLUMN] + ' has an average rating of ' +
            movieArray[i][MOVIETOTALRATINGCOLUMN] / movieArray[i][MOVIENUMBERRATINGS] + ' stars out of five.');
    }
}