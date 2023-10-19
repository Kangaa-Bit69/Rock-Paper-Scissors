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

    if (playerChoice === 'rock' && comChoice === 'paper' || playerChoice === 'paper' && comChoice === 'scissors' || playerChoice === 'scissors' && comChoice === 'rock') {
        cWins++ ;
        console.log(cWins, pWins);
        return(`you lose! ${comChoice} beats ${playerChoice}`);
                
        
    } else if (playerChoice === 'rock' && comChoice === 'scissors' || playerChoice === 'paper' && comChoice === 'rock' || playerChoice === 'scissors' && comChoice === 'paper') {
        pWins++ ;
        console.log(cWins, pWins);
        return(`you win! ${playerChoice} beats ${comChoice}`);
        
        
    } else if (playerChoice === comChoice) {
        return(`Tie! you both chose ${playerChoice}`);
    } console.log(cWins, pWins)
}
//create game() function to play 5 rounds and display results of each round and overall winner 

function game(x) {
    for (let i = 1; i < x; i++ )
        if (i < x) continue;
            playRound(playerChoice, comChoice);
        
}
console.log(game(5))
