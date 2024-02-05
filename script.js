function getComputerChoice(){ //0 = rock, 1 = paper, 2 = scissor
    return Math.floor(Math.random()*3);

}

function findWinner(playerSelection){

    computerSelection = getComputerChoice();
    if(playerSelection == computerSelection){
        result.textContent = "Tie";
    }
    else if(playerSelection == 0 && computerSelection == 1){
        result.textContent = "You lost! Paper beats rock";
        cmtrScore += 1;
    }
    else if(playerSelection == 1 && computerSelection == 2){
        result.textContent = "You lost! Scissors beats paper";
        cmtrScore += 1;
    }
    else if(playerSelection == 2 && computerSelection == 0){
        result.textContent = "You lost! Rock beats Scissors";
        cmtrScore += 1;
    }
    else if(playerSelection == 1 && computerSelection == 0){
        result.textContent = "You won! Paper beats rock";
        userScore += 1;
    }
    else if(playerSelection == 2 && computerSelection == 1){
        result.textContent = "You won! Scissors beats paper";
        userScore += 1;
    }
    else if(playerSelection == 0 && computerSelection == 2){
        result.textContent = "You won! Rock beats Scissors";
        userScore += 1;
    }
    score = document.createTextNode(`(${userScore} - ${cmtrScore})`)
    result.appendChild(score);

    if(userScore == 5){
        alert("You won!");
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    if(cmtrScore == 5){
        alert("You lost!");
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

let score;
let userScore = 0;
let cmtrScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors")
const result = document.getElementById("result");

rock.addEventListener("click",()=>{findWinner(0)});
paper.addEventListener("click",()=>{findWinner(1)});
scissors.addEventListener("click",()=>{findWinner(2)});








