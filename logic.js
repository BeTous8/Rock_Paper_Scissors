
function getComputerChoice() {
    // GENERATE RANDOM NUMBER BETWEEN 1 TO 3
    let MPC_choice = Math.floor(Math.random() * 3) + 1;
    // console.log(MPC_choice);

    if (MPC_choice == 1) {
        return "rock";
    }
    else if (MPC_choice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


// function getHumanChoice() {
//     human_choice = prompt("what is your choice? Rock Paper or Scissors? ").toLowerCase()
//     // console.log(human_choice)

//     while (human_choice !== "rock" && human_choice !== "paper" && human_choice !== "scissors") {
//         alert ("invalid input")
//         human_choice = prompt("what is your choice? Rock Paper or Scissors? ").toLowerCase()
//     }
   
//     return human_choice
    
// }


function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    const result = document.querySelector(".result");
    
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`Yay! you beat it this round!`)
        result.textContent = `Player: ${humanChoice} +++ Computer: ${computerChoice}. Yay! you beat it this round!`;
        result.style.backgroundColor = 'aquamarine'
        humanScore +=1;
        
        
    }
    else if (humanChoice === computerChoice) {
        console.log(`Player and Computer have ${humanChoice}. This round is tied.`)
        result.textContent = `Player and Computer have ${humanChoice}. This round is tied.`;
        result.style.backgroundColor = 'rgb(252, 252, 99)'
    }
    else {
        console.log(`You lose this round!`)
        result.textContent = `Player: ${humanChoice} +++ Computer: ${computerChoice}.You lose this round!`;
        result.style.backgroundColor = 'lightcoral'
        computerScore +=1;
    }


    div.append(result)
    
    scoreUpdate(humanScore, computerScore);

    if (humanScore == 5 || computerScore == 5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (humanScore > computerScore) {
            result.textContent = `You Win the Game`
            result.style.backgroundColor = 'white';
            result.style.fontSize = `40px`;
        }
        else {
            result.textContent = 'Game Over!';
            result.style.backgroundColor = 'white';
            result.style.color = `red`;
            result.style.fontSize = `40px`;
            
        }
    }
    
}

function scoreUpdate(humanScore, computerScore) {
    
    const scoreboard = document.querySelector(".scoreboard");
    scoreboard.textContent = `Player score: ${humanScore} ****** Computer score: ${computerScore}`;
    div.append(scoreboard)

}


let computer_choice;
// let your_choice;
let humanScore = 0;
let computerScore = 0;


// your_choice = getHumanChoice()
// console.log(`YOU: ${your_choice}`);
// console.log(`COMPUTER: ${computer_choice}`);

const div = document.querySelector("div");
const buttonsGroup = document.querySelector(".buttons")
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", () => {
    playRound(rock.id);
}); 
paper.addEventListener("click", () => {
    playRound(paper.id);
});
scissors.addEventListener("click", () => {
    playRound(scissors.id);
});
// console.log(rock.id);

// playRound(your_choice, computer_choice);
// console.log(`your score: ${humanScore}`)
// console.log(`computer score: ${computerScore}`)

// // Pause before clearing to allow the user to see the results of the round.
// alert("Press OK to continue to the next round");
// console.clear();


// if (humanScore > computerScore) {
//     console.log(`You Win! your score is ${humanScore} , computer score is ${computerScore}`);
// }
// else if (computerScore > humanScore) {
//     console.log(`You lose! your score is ${humanScore} , computer score is ${computerScore}`);
// }
// else {
//     console.log(`the game is draw. both got the score of ${humanScore}`);
// }
  



    
    
    

