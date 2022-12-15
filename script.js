let choices = ["rock", "scissors", "paper" ]

let wins = 0;
let losses = 0;
let ties = 0;

let random = Math.floor(Math.random() * choices.length);
let computerChoice = choices[random]

let playerChoice = prompt("choice either rock paper or scissors to play")

if (playerChoice === computerChoice) {

ties++
alert("You tied")

} else if(computerChoice == "scissors" && playerChoice == "rock" || computerChoice )

console.log(playerChoice, computerChoice)
wins++
alert("Your win")
} else {
    losses++
    alert("you lost!")
}