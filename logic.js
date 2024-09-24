// console.log("Hello")

let humanScore = 0;
let computerScore = 0;

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


function getHumanChoice() {
    human_choice = prompt("what is your choice? Rock Paper or Scissors? ").toLowerCase()
    // console.log(human_choice)

    while (human_choice !== "rock" && human_choice !== "paper" && human_choice !== "scissors") {
        alert ("invalid input")
        human_choice = prompt("what is your choice? Rock Paper or Scissors? ").toLowerCase()
    }
   
    return human_choice
    
}

let computer_choice;
let your_choice;
let is_game_on = true



function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`Yay! you beat it this round!`)
        humanScore +=1;
        
        
    }
    else if (humanChoice === computerChoice) {
        console.log(`you both have ${humanChoice}. This round is tied.`)
    }
    else {
        console.log(`You lose this round!`)
        computerScore +=1;
    }
}

function playGame(rounds) {
    // if (humanScore == 3) {
    //     console.log(`You Win! your score is ${humanScore} , computer score is ${computerScore}`);
    //     is_game_on = false;
    // }
    // else if (computerScore == 3) {
    //     console.log(`You lose! your score is ${humanScore} , computer score is ${computerScore}`);
    //     is_game_on = false;
    // }
    // else {
        
    //     computer_choice = getComputerChoice();
    //     your_choice = getHumanChoice()
    //     console.log(`YOU: ${your_choice}`);
    //     console.log(`COMPUTER: ${computer_choice}`);
        
    //     playRound(your_choice, computer_choice);

    //     // Pause before clearing to allow the user to see the results of the round.
    //     alert("Press OK to continue to the next round");
    //     console.clear();
    // }

    for (i = 0; i < rounds; i++) {
        computer_choice = getComputerChoice();
        your_choice = getHumanChoice()
        console.log(`YOU: ${your_choice}`);
        console.log(`COMPUTER: ${computer_choice}`);
        
        playRound(your_choice, computer_choice);
        console.log(`your score: ${humanScore}`)
        console.log(`computer score: ${computerScore}`)

        // Pause before clearing to allow the user to see the results of the round.
        alert("Press OK to continue to the next round");
        console.clear();
    }

    if (humanScore > computerScore) {
        console.log(`You Win! your score is ${humanScore} , computer score is ${computerScore}`);
    }
    else if (computerScore > humanScore) {
        console.log(`You lose! your score is ${humanScore} , computer score is ${computerScore}`);
    }
    else {
        console.log(`the game is draw. both got the score of ${humanScore}`);
    }
}  


playGame(5);
    
    
    

