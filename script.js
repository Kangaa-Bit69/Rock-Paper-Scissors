//create variables for user and computer choices
const playerChoice = prompt('RPS?').toLowerCase();
const comChoice = getComputerChoice();

//write function that chooses one option at random for the computer
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return('rock');
    } else if (randomNum === 2) {
        return('paper');
    } else {
        return('scissiors');
    }
    
} console.log(playerChoice + comChoice )


//write function to compare choices
function playRound(playerChoice, comChoice) {
    console.log(playerChoice + comChoice)
    if (playerChoice === 'rock' && comChoice === 'paper') {
        return('you lose! paper beats rock')
    } else if (playerChoice === 'rock' && comChoice === 'scissiors') {
        return('you win! rock beats scissiors!')
    } else if (playerChoice === 'paper' && comChoice === 'rock') {
        return('you win! paper beats rock!')
    } else if (playerChoice === 'paper' && comChoice === 'scissiors') {
        return('you lose! scissiors beats paper!')
    }  else if (playerChoice === 'scissiors' && comChoice === 'rock') {
        return('you lose! rock beats paper!')
    }  else if (playerChoice === 'scissiors' && comChoice === 'paper') {
        return('you win! scissiors beats paper!')
    } else if (playerChoice === comChoice) {
        return('Tie!');
    }
}

console.log(playRound(playerChoice,comChoice))
//output