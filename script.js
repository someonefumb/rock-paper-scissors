let playerScore = 0;
let computerScore = 0;
let computerChoice = Math.floor(Math.random() * 3);

function getComputerChoice () {
    if (computerChoice === 0) {
        computerChoice = 'rock';
    } else if (computerChoice === 1) {
        computerChoice = 'scissor';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    }
}

function playRound () {
    getComputerChoice();

    let playerChoice = prompt('Rock Paper Scissor', '');
    playerChoice = playerChoice.toLowerCase();

    switch(true) {
        case playerChoice === computerChoice:
            return alert('tie');
        case playerChoice === 'rock' && computerChoice === 'paper':
            return alert('you lost, paper beats rock');
        case playerChoice === 'rock' && computerChoice === 'scissor':
            return alert('you win, rock beats scissor');
        case playerChoice === 'paper' && computerChoice === 'rock':
            return alert('you win, paper beats rock');
        case playerChoice === 'paper' && computerChoice === 'scissor':
            return alert('you lost, scissor beats paper');
        case playerChoice === 'scissor' && computerChoice === 'rock':
            return alert('you lost, rock beats scissor');
        case playerChoice === 'scissor' && computerChoice === 'paper':
            return alert('you win, scissor beats paper');
    }

}

playRound();