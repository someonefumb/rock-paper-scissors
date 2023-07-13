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

// Plays a round of rock paper scissor
function playRound() {
    getComputerChoice ();
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

// Buttons
const buttons = document.querySelectorAll('.container button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.className;
        playRound();
    });
});

