const Letter = require("./letter.js"); //executes the code of letter.js

/*
Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:



An array of new Letter objects representing the letters of the underlying word

A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
Word.js should only require Letter.js
*/


// var newWord = new Word() 
// newWord.setWord("lord of the rings")
// console.log(newWord.toString())


//Word constructor
function Word(word){
    this.lettersArr = [/*multiple letter objects*/],
    this.getPuzzle = function(){
        const puzzle = [];
        for(let i = 0; i<this.letterArr.length; i++){
            const currentLetter = this.lettersArr[i];
            const character  = currentLetter.getCharacter();
            puzzle.push(character);
        }
    return puzzle.join(' ');
    },
       this.guessLetter = function(letter) {
           for (let i=0; i < this.letterArr[i]}; i++]
       }
};

module.exports = Word;