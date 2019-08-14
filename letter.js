/*
Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:
A string value to store the underlying character for the letter

A boolean value that stores whether that letter has been guessed yet

A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
*/


// code from psychic game
// Creates an array that lists out all of the computer's options, aka, the alphabet
    //var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    //var randomPick = gameWords[Math.floor(Math.random() * gameWords.length)];
    //console.log("Computer chose: " + randomPick); //to test

    // Creating  and setting variables to hold the number of wins, losses. They start at 0. # of guesses at 9.
    // array to hold keys guessed
    //var wins = 0;
    //var losses = 0;
    //var guessesLeft = 9;
    //var keysGuessed = [];



//Letter constructor, string value to store the underlying character for the letter
function Letter(letter){
    this.letter = letter;
    this.guessed = false; //boolean value stores whether letter has been guessed yet

    this.getCharacter = function(){
        return this.guessed ? this.letter : '_';
        // if(this.guessed){
        //     return this.letter;
        // }else if(this.letter === " " || this.letter === "-"  || guessesLeft <=0){
        //     return this.letter;
        // }else{
        //     return "_"
        // }
    }
    this.checkGuess = function(guess){
        if(guess.toLowerCase() === this.letter.toLowerCase){
            this.guessed = true;  //updating stored boolean value to true if guessed correctly
        }
        return this.isGuessed;
    }
}

// const letterA = new Letter('a');
// console.log(letterA.checkGuess('a'));


module.exports = Letter;