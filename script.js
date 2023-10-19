//create variables for user and computer choices
let playerChoice = '';
let comChoice = '';
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
}
//prompts player for choice and returns it
function promptPlayerChoice() {
    return prompt('Rock, Paper or Scissors?');
}
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
        console.log(cWins, pWins);
        return(`Tie! you both chose ${playerChoice}`);
    } 
}
//create game() function to play 5 rounds and display results of each round and overall winner 

function game() {
    for (let i = 0; i < 5; i++){
        console.log(playRound(promptPlayerChoice(), getComputerChoice()));
    } if (cWins < pWins) {
        return (`You win the game! with a score of ${pWins} to ${cWins}`)
    } else if (pWins < cWins) {
        return (`You lose the game! with a score of ${pWins} to ${cWins}`)
    }
}
console.log(game())
 