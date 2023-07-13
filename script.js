// Scores
let playerScore = 0;
let computerScore = 0;
const scores = document.querySelector('.rpsScores');

// Result 
const result = document.querySelector('.rpsResult');

// Computer Choice
let computer = ['rock', 'paper', 'scissor']
let computerChoice = 0;
function getComputerChoice () {
    computerChoice = computer[Math.floor(Math.random() * 3)];
};

// Defines when game is over
function isGameOver() {
    if (playerScore === 5) {
        result.textContent = `YOU WON ROCK PAPER SCISSORS ${playerScore} TO ${computerScore}`;
    } else if (computerScore === 5) {
        result.textContent = `YOU LOST ROCK PAPER SCISSORS ${computerScore} TO ${playerScore}`;
    }
}

// Plays a round of rock paper scissor
function playRound() {
    getComputerChoice ();
    if (computerScore === 5 || playerScore === 5) {
        return;
    } else {
    if(playerChoice === computerChoice) {
        result.textContent = 'You tied!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissor'
        || playerChoice === 'paper' && computerChoice === 'rock' 
        || playerChoice === 'scissor' && computerChoice === 'paper') {
            playerScore++;
            result.textContent = `You won, ${playerChoice} beats ${computerChoice}!`;
    } else {
            computerScore++;
            result.textContent = `You lost, ${computerChoice} beats ${playerChoice}!`;
    }
    scores.textContent = `You: ${playerScore}  Computer: ${computerScore}`;
    }
}

// Buttons
const buttons = document.querySelectorAll('.container button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.className;
        playRound();
        isGameOver();
    });
});
