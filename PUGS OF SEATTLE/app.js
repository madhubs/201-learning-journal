'use strict';

var answersCorrect = 0;
var yesNoArray = [
    ['Question #1: Pugs originated in China. True or false?', ['true', 't'] , 'Correct!', 'Incorrect!'],
    ['Question #2: A group of crows is called a "murder", a group of pugs is called a "herd." True or false?', ['false', 'f'] , 'Correct!', 'Incorrect!'],
];

//functionality for the above true/false questions 
function yesNoGame(question, answer, correctAlert, incorrectAlert) {
    var userAnswer = prompt(question).toLowerCase();
    
    if(answer.includes(userAnswer)) { //answer.includes is what is running throught the array checking variable userAnswer, the variable passed into the parens, against variable answer. 
        answersCorrect++;
        alert('Correct!');
    }
    else {
            alert('Incorrect!');
        }
    }

for (var i = 0; i < yesNoArray.length; i++) {
        yesNoGame(yesNoArray[i][0], yesNoArray[i][1], yesNoArray[i][2], yesNoArray[i][3]);
        //This For Loop is looping through the array of arrays questions/options/feedback hitting each of the three items in the nested arrays. 
        //That first parameter, yesNoArray[i][0] ---> is the  question in the array
        //The second parameter, yesNoArray[i][1]---> is the ['True', 'False']
        //The third parameter, yesNoArray[i][2]---> is the 'Correct1', 'Incorrect!' 
}


//functionality for the below numeric input questions
//Question #3
var correctAnswer = 4;
var attempts = 4;

function question3() {
    while (attempts > 0) {
        var answer = parseInt(prompt ('Question #3: You have four attempts to guess how many different types of pugs there are.'))
        //by default, a prompt method will turn a numeric answer to a true string, parseInt will convert that string to a true number data type. 
    
    if (answer < correctAnswer) {
        alert ('Incorrect! Number too low! Keep trying!');
    }
    else if (answer > correctAnswer) {
        alert ('Incorrect! Number too high! Keep trying!');
        attempts--;
    }
    else if (answer === correctAnswer) {
        alert ('Correct! There are 4 types of pugs.');
        attemps = 0; //this is what sets the while loop to 0, thus making it false, and exiting the loop, and moving on to next question. 
    }
    else {
        return false; //this allows user to hit cancel and move on to next question
        attempts--; //don't need?
        }
    }
}
question3();


//issues:
//cancel does not escape you
//if you type a non number in #3 it just takes you to the next Q
//#3 is saying every answer is correct



//Question #4- my second numeric input question
var names = ['biggie', 'pippin', 'pugsley'];
var guessesLeft = 4;

function question4() {
    while(guessesLeft > 0) {
        var answer = prompt ('Question #4: You have 4 attempts to try to correctly guess the name of my future pug.');
        
        
        for (var i = 0; i < names.length; i++) {
            if(answer === names[i]) {
            alert ('Correct! The quiz is over! Congrats!');
            guessesLeft = 0; //or setting to -1
            break; //get out of the for loop, or setting guessesLeft = -1, because this will also make the prompt false. 
            }
        }
        if(guessesLeft > 0) {
            guessesLeft--;
            alert('Incorrect! You have ' + guessesLeft + ' attempts left!');
            if(guessesLeft === 0) {
                alert ('And you are out of guesses, my friend! And done with the quiz!'); //
            }
        }
    }
}
question4(); 

