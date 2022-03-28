const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const winDisplay = document.getElementById('wins')
const lossesDisplay = document.getElementById('losses')
const tiesDisplay = document.getElementById('ties')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let finalResult
let winCount = 0
let lossCount = 0
let tieCount = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    winLosses()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = "rock"
    }

    if (randomNumber === 2) {
        computerChoice = "scissors"
    }

    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        finalResult = "Tie!"
    }
    else if(computerChoice === "paper" && userChoice === "rock"  ) {
        finalResult = "ai wins again"

    }
    // if(computerChoice === "paper" && userChoice === "scissors") {
    //     finalResult = "Player 1 wins"
    // }
    else if(computerChoice === "scissors" && userChoice === "paper") {
finalResult = "ai wins again"
    }
    // if(computerChoice === "paper" && userChoice === "scissors"  ) {
    //     finalResult = "Player 1 wins"
    // }
    // if(computerChoice === "rock" && userChoice === "paper") {
    //     finalResult = "Player 1 wins"
    // }
    // if(computerChoice === "scissors" && userChoice === "rock") {
    //     finalResult = "Player 1 wins"
    // }
    else if(computerChoice === "rock" && userChoice === "scissors") {
        finalResult = "ai wins again"
    } else {
        finalResult = "Player 1 wins"
    }
    resultDisplay.innerHTML = finalResult
}

function winLosses() {
    if (finalResult === "Player 1 wins") {
        winCount += 1
        winDisplay.innerHTML = winCount
    } else if (finalResult === "ai wins again"){
        lossCount += 1
        lossesDisplay.innerHTML = lossCount
} else
        tieCount += 1
    tiesDisplay.innerHTML = tieCount
}


