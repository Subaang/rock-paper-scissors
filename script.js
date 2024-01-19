function getComputerChoice(){ //0 = rock, 1 = paper, 2 = scissor
    return Math.floor(Math.random()*3);

}

function findWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        alert("Tie!");
    }
    else if(playerSelection == 0 && computerSelection == 1){
        alert("You lost! Paper beats rock");
    }
    else if(playerSelection == 1 && computerSelection == 2){
        alert("You lost! Scissors beats paper");
    }
    else if(playerSelection == 2 && computerSelection == 0){
        alert("You lost! Rock beats Scissors");
    }
    else if(playerSelection == 1 && computerSelection == 0){
        alert("You won! Paper beats rock");
    }
    else if(playerSelection == 2 && computerSelection == 1){
        alert("You won! Scissors beats paper");
    }
    else if(playerSelection == 0 && computerSelection == 2){
        alert("You won! Rock beats Scissors");
    }
}

function translate(playerSelectionWord){ //translates player choice to numbers
    if (playerSelectionWord == "rock"){
        return 0;
    }

    else if(playerSelectionWord == "paper"){
        return 1;
    }

    else if(playerSelectionWord == "scissors"){
        return 2;
    }
    
}

let playerSelectionWord = prompt("Enter choice");
let playerSelection = translate(playerSelectionWord);
let computerSelection = getComputerChoice();

findWinner(playerSelection,computerSelection);
