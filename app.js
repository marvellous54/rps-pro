let rockEl = document.getElementById("option-rock");
let paperEl = document.getElementById("option-paper");
let scissorEl = document.getElementById("option-scissor");
let computerScoreEl = document.getElementById("computer-score");
let userScoreEl = document.getElementById("user-score");
let computerInputImgContainerEl = document.getElementById("computer-input-img-container");
let userInputImgContainerEl = document.getElementById("user-input-img-container");
let computerInputTextEl = document.getElementById("computer-input-text");
let userInputTextEl = document.getElementById("user-input-text");

let sample = document.querySelector(".options")

let computerInput = "";
let userInput = "";
let computerScore = 0;
let userScore = 0;
let elements = ["Rock", "Paper", "Scissor"];
let elementsIcon = {
    Rock: '<i class="fas fa-hand-rock element-icon" ></i>',
    Paper: '<i class="fas fa-hand-paper element-icon"></i>',
    Scissor: '<i class="fas fa-hand-scissors element-icon"></i>'
}
let active = false;

computerScoreEl.textContent = computerScore;
userScoreEl.textContent = userScore;

function setInputs(e) {
    active = true
// getting user's pick
    if (!e.target.nextElementSibling && e.target.textContent.length === 0) {
        userInput = e.target.parentElement.nextElementSibling.textContent;
    } else if (e.target.nextElementSibling) {
        userInput = e.target.nextElementSibling.textContent;
    }
// ==========================================

    function getRandomNumber() {
        let randomNumber = Math.floor( Math.random() * 3 );
        return randomNumber;
    }

    userInputTextEl.textContent = userInput
    userInputImgContainerEl.innerHTML = elementsIcon[userInput]

//  getting computer's pick
    setTimeout(() => {
        computerInput =  elements[getRandomNumber()];
        computerInputTextEl.textContent = computerInput;
        computerInputImgContainerEl.innerHTML = elementsIcon[computerInput];

        decideResult()

        // resseting computer's and user's Picks
            setTimeout(() => {
                resetPick()
            }, 1500)
        // ===========================================
    }, 1500)
// ==========================================


}

function resetPick() {
    userInput = "";
    computerInput = "";
    userInputTextEl.textContent = userInput;
    computerInputTextEl.textContent = computerInput;
    userInputImgContainerEl.innerHTML = "";
    computerInputImgContainerEl.innerHTML = "";
    active = false
} 

function decideResult() {

    function computerUserWins(winner, loser) {
        let winPossibilities = (winner, loser) => {
            return (winner === "Rock" && loser === "Scissor") || (winner === "Scissor" && loser === "Paper") || (winner === "Paper" && loser === "Rock")
        }
        return winPossibilities(winner, loser)
    }

    if (computerUserWins(computerInput, userInput)) {
        computerScore += 1;
        computerScoreEl.textContent = computerScore;
    } else if (computerUserWins(userInput, computerInput)) {
        userScore += 1;
        userScoreEl.textContent = userScore;
    } else {
        return
    }
}


// event listeners =====================================
sample.addEventListener("click", (e) => {
    if (!active) {
        setInputs(e)
    }
})