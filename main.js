/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary Design a program for the Hollywood Movie Rating Guide || created: 10.11.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let movieName, rating, continueInt;
let movieArray = [];

function main() {
    while (continueInt == 1 || continueInt == null) {
        setMovieName();
        setRating();
        populateMovieArray();
        setContinueInt();
    }
    if (continueInt == 0) {
        printAverageRating();
    }
}

main();

function setMovieName() {
    movieName = PROMPT.question('What movie do you want to rate today?\n>');
}

function setRating() {
    rating = PROMPT.question('Out of five stars, what would you rate "' + movieName + '?"\n>');
    for (let i = 0; i < 3 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5; i++) {
        rating = PROMPT.question('No, you idiot, out of FIVE stars. One to five. Try again, twit.\n>');
        if (i == 2) {
            console.log("You're hopeless.")
        }
    }
}

function populateMovieArray() {
    console.log('movieArray =' + movieArray.length);
    for (let i = 0; i <= movieArray.length; i++) {
        if (movieArray[i] == null) {
            movieArray[i] = [];
            movieArray[i][0] = movieName;
            movieArray[i][1] = rating;
            movieArray[i][2] = 1;
        } else if (movieName == movieArray[i][0]) {
            movieArray[i][1] += rating;
            movieArray[i][2] += 1;
        }
    }
    console.log('\n' +
    'Movie name =' + movieName +
    '\nmovie rating =' + rating);
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
    for (let i = 0; i < movieArray.length + 1; i++) {
        if (movieName == movieArray[i][0]) {
            let averageRating = movieArray[i][1] / movieArray[i][2];
            console.log('The average rating of ' + movieName + ' is ' + averageRating + ' stars out of five.');
        }
    }
}

/*
console.log('\n' +
'Movie name =' + movieName +
'\nmovie rating =' + rating +
'\nMovie namearray =' + movieArray[i][0] +
'\nmovie rating total =' +  movieArray[i][1]);*/
