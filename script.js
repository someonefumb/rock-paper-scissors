let computerChoice = Math.floor(Math.random() * 3);

function getComputerChoice () {
    if (computerChoice === 0) {
        computerChoice = 'Rock';
    } else if (computerRandom === 1) {
        computerChoice = 'Scissor';
    } else if (computerRandom === 2) {
        computerChoice = 'Paper';
    }
}
