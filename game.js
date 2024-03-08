// Variables for player and computer choices
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const selectedLogo = document.getElementById('selected-logo');
const computerLogo = document.getElementById('computer-logo');

// Variables for scores and game over elements
const scoresElement = document.getElementById('scores');
const gameOverMessage = document.querySelector('.game-over-message');
const playAgainButton = document.querySelector('.play-again-button');

// Initialize scores
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    selectedLogo.src = `assets/${playerSelection}-logo.png`;
computerLogo.src = `assets/${computerSelection}-logo.png`;


    // Game logic
    if (playerSelection === computerSelection) {
        // It's a tie
        displayResult("It's a tie!");
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        // Player wins
        playerScore++;
        displayResult('You win!');
    } else {
        // Computer wins
        computerScore++;
        displayResult('Computer wins!');
    }

    // Update scores
    scoresElement.textContent = playerScore + '-' + computerScore;

    // Check for game over
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            displayResult('Congratulations! You win the game!');
        } else {
            displayResult('Computer wins the game!');
        }
        playAgainButton.style.display = 'block';
    }
}

function displayResult(message) {
    gameOverMessage.textContent = message;
    selectedLogo.style.display = 'block';
    computerLogo.style.display = 'block';
}

playAgainButton.addEventListener('click', () => location.reload());