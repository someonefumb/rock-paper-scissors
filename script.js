// Scores
let playerScore = 0;
let computerScore = 0;

// Computer Choice
let computer = ['rock', 'paper', 'scissor']
let computerChoice = computer[Math.floor(Math.random() * 3)];

function playRound() {
    if(playerChoice === computerChoice) {
        playerScore++;
        computerScore++;
        return alert('tie');
    } else if (playerChoice === 'rock' && computerChoice === 'scissor'
        || playerChoice === 'paper' && computerChoice === 'rock' 
        || playerChoice === 'scissor' && computerChoice === 'paper') {
            playerScore++;
            return alert(`you win, ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === 'rock' && computerChoice === 'paper'
        || playerChoice === 'paper' && computerChoice === 'scissor' 
        || playerChoice === 'scissor' && computerChoice === 'rock') {
            computerScore++;
            return alert(`you lose, ${computerChoice} beats ${playerChoice}`);
    }
}

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


