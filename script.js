// Scores
let playerScore = 0;
let computerScore = 0;

// Computer Choice
let computer = ['rock', 'paper', 'scissor']
let computerChoice = computer[Math.floor(Math.random() * 3)];

// Result
const result = document.querySelector('.rpsResult');

// Plays a round of rock paper scissor
function playRound() {
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
}

// Buttons
const buttons = document.querySelectorAll('.container button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('rock')) {
            playerChoice = 'rock';
            playRound();
        } else if (button.classList.contains('paper')) {
            playerChoice = 'paper';
            playRound();
        } else if (button.classList.contains('scissor')) {
            playerChoice = 'scissor';
            playRound();
        }
        console.log(playerChoice);
    });
});

const game = document.querySelector('.gameStart');

