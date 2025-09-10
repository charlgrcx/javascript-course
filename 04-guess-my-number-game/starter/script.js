'use strict';

// DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);

// change the text content of messageEl
//messageEl.textContent = 'Hello from javascript';

const scoreEl = document.querySelector('.score');
//scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
//numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guest');
//guessInputEl.value = 6;

// Game state variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

/////////////////////////
// basic game logic
document.querySelector('.check').addEventListener('click', function () {
    // code block
    console.log('Check button clicked!');
    const guess = Number(document.querySelector('.guess').value);
    console.log("Players guessed:", guess);

    // input validation
    if (!guess) {
        document.querySelector('.message').textContent = "Please input a number!";
        return;
    }
    
    if (guess  < 1 || guess > 20) {
        document.querySelector('.message').textContent = 'Number must be between 1 and 20. Please try again.';
        return;
    }

    
    if (guess === secretNumber) {
        console.log('correct guessed!!!');
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = 'YOU WON !!!';
        document.body.style.backgroundColor = 'pink';
        document.querySelector('.guess').value= '';
    } else if (guess > secretNumber) {
        console.log("Too high!!!");
        document.querySelector('.message').textContent = 'Too high!!';
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "GAME OVER! Please press Again.";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = 'red';
            document.querySelector('.guess').value= '';
        }
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too low :(";
        score--;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "GAME OVER! ";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = 'red';
            document.querySelector('.guess').value= '';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    //block
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    //restart secret number display
    document.querySelector('.number').textContent = '?';
    //restart the scsore
    document.querySelector('.score').textContent = score;
    //empty the guess input value to none
    document.querySelector('.guess').value = '';
    //enable guess and check input buttons
    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
    document.body.style.backgroundColor = '';
});







