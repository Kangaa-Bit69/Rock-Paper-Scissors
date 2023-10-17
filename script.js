//create variables for user and computer choices
const playerChoice = prompt('RPS?').toLowerCase();
const comChoice = getComputerChoice();
let cWins = 0;
let pWins = 0;
//write function that chooses one option at random for the computer
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return('rock');
    } else if (randomNum === 2) {
        return('paper');
    } else {
        return('scissors');
    }
    
} //console.log(playerChoice + comChoice )


//write function to compare choices
function playRound(playerChoice, comChoice) {
    console.log(playerChoice + comChoice)

    if (playerChoice === 'rock' && comChoice === 'paper' || playerChoice === 'paper' && comChoice === 'scissors' || playerChoice === 'scissors' && comChoice === 'rock'){
        return(`you lose! ${comChoice} beats ${playerChoice}`);
        
    } else if (playerChoice === 'rock' && comChoice === 'scissors' || playerChoice === 'paper' && comChoice === 'rock' || playerChoice === 'scissors' && comChoice === 'paper') {
        rreturn(`you win! ${playerChoice} beats ${comChoice}`)
        
    } else if (playerChoice === comChoice) {
        return(`Tie! you both chose ${playerChoice}`);
    } console.log(cWins, pWins)
}
function game() {
    for (let i = 1; i < 5; i++ )
        if (i <5) continue;
            playRound(playerChoice,comChoice);
        ;
}
console.log(playRound(playerChoice,comChoice))
