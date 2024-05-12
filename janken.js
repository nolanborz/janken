//Announcement Strings
const tieRound = "It's a tie!";
const paperBeatsRockWin = "Paper beats rock, you win!";
const rockBeatsScissorsLose = "Rock beats scissors, you lose!";
const scissorsBeatsPaperLose = "Scissors beats paper, you lose!";
const rockBeatsScissorsWin = "Rock beats scissors, you win!";
const paperBeatsRockLose = "Paper beats rock, you lose!";
const scissorsBeatsPaperWin = "Scissors beats paper, you win!";

//assign button and score queries
const btnRock = document.querySelector('#rockBtn');
const btnScissors = document.querySelector('#scissorsBtn');
const btnPaper = document.querySelector('#paperBtn');
const btnReset = document.querySelector('#resetBtn');
const keepScore = document.querySelector('.score');
const results = document.querySelector('.results');

//event listeners for buttons
btnRock.addEventListener("click", () => {
    playRound(getComputerChoice(), 'rock');
});

btnScissors.addEventListener("click", () => {
    playRound(getComputerChoice(), 'scissors');
});

btnPaper.addEventListener("click", () => {
    playRound(getComputerChoice(), 'paper');
});

btnReset.addEventListener("click", () => {
    resetGame();
    writeScore();
})
//initialize scores
let computerScore = 0;
let humanScore = 0;

//Generate the Computer's choice
function getComputerChoice() {
    let number = Math.random() * 100;
    let cpuChoice = '';
    if (number <= 33) {
        cpuChoice = 'rock';
    }
    else if (number <= 66) {
        cpuChoice = 'paper';
    }
    else {
        cpuChoice = 'scissors';
    }
    return cpuChoice;
}
function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        results.textContent = "It's a tie!";
    }

    else if (computerChoice == 'rock' && humanChoice == 'paper') {
        humanScore += 1;
        results.textContent = "Paper beats rock, you win!";      
    }
    else if (computerChoice == 'rock' && humanChoice == 'scissors') {
        computerScore += 1;
        results.textContent = "Rock beats scissors, you lose!";
    }
    else if (computerChoice == 'scissors' && humanChoice == 'paper') {
        computerScore += 1;
        results.textContent = "Scissors beats paper, you lose!";
    }
    else if (computerChoice == 'scissors' && humanChoice == 'rock') {
        humanScore += 1;
        results.textContent = "Rock beats scissors, you win!";
    }   
    else if (computerChoice == 'paper' && humanChoice == 'rock') {
        computerScore += 1;
        results.textContent = "Paper beats rock, you lose!";
    }
    else {
        humanScore += 1;
        results.textContent = "Scissors beats paper, you win!";
    }  
    writeScore();
    checkIfOver();
}

function checkIfOver() {
    if (computerScore === 5) {
        results.textContent = 'A victory for technology!';
        resetGame();
    }
    else if (humanScore === 5) {
        results.textContent = 'A victory for mankind!';
        resetGame();
    }
}

function writeScore() {
    keepScore.textContent = `Computer: ${computerScore} Human: ${humanScore}`
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
}
 




