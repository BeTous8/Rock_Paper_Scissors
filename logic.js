// console.log("Hello")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // GENERATE RANDOM NUMBER BETWEEN 1 TO 3
    let MPC_choice = Math.floor(Math.random() * 3) + 1;
    console.log(MPC_choice);

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


let computer_choice = getComputerChoice();
console.log(`the computer choice is ${computer_choice}`);


function getHumanChoice() {
    human_choice = prompt("what is your choice? Rock Paper or Scissors? ").toLowerCase()
    // console.log(human_choice)

    if (human_choice !== "rock" && human_choice !== "paper" && human_choice !== "scissors") {
        alert ("invalid input")
        return false
    }
    else {
        return human_choice
    }
}


let your_choice = getHumanChoice()
console.log(your_choice)

function PlayRound(humanChoice, computerChoice) {
    
}