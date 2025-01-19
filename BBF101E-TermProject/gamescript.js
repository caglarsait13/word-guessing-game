//general variables are here
const b_letter = document.getElementById("b_letter");
const l_letter = document.getElementById("l_letter");
const i_letter = document.getElementById("i_letter");
const n_letter = document.getElementById("n_letter");
const k_letter = document.getElementById("k_letter");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const heartsContain = document.getElementById("hearts");

const letters = [b_letter, l_letter, i_letter, n_letter, k_letter];
const myWord = "blink";
let currentScore = 0;
let lives = 3;
let submittedLetters = ["","","","",""];

/* reset and submit buttons are here*/
resetBtn.classList.add("hidden");
submitBtn.addEventListener("click", () => {
    const input = document.getElementById("guess").value.toLowerCase();

    if (input.length === 1) {
        checkLetter(input);
    } else if (input === myWord) {
        showLetters();
        currentScore = 100;
        endGame(true);
    } else {
        lives = 0;
        currentScore = 0;
        changeHeartsDisplay(); 
        endGame(false);
    }
    resetBtn.classList.remove("hidden");
    restartGameboard();
});

resetBtn.addEventListener("click", resetGame);

//This function checks the letters.
function checkLetter(letter) {
    if (myWord[0] === letter && submittedLetters[0] != "b") {
        letters[0].classList.remove("hidden");
        letters[0].parentElement.style.backgroundColor = "transparent";
        letters[0].parentElement.style.border = "none";
        currentScore += 20;
        document.getElementById("guess").value = "";
        submittedLetters[0] = "b";
    }else if (myWord[1] === letter && submittedLetters[1] != "l") {
        letters[1].classList.remove("hidden");
        letters[1].parentElement.style.backgroundColor = "transparent";
        letters[1].parentElement.style.border = "none";
        currentScore += 20;
        document.getElementById("guess").value = "";
        submittedLetters[1] = "l";
    }else if (myWord[2] === letter && submittedLetters[2] != "i") {
        letters[2].classList.remove("hidden");
        letters[2].parentElement.style.backgroundColor = "transparent";
        letters[2].parentElement.style.border = "none";
        currentScore += 20;
        document.getElementById("guess").value = "";
        submittedLetters[3] = "i";
    }else if (myWord[3] === letter && submittedLetters[3] != "n" ) {
        letters[3].classList.remove("hidden");
        letters[3].parentElement.style.backgroundColor = "transparent";
        letters[3].parentElement.style.border = "none";
        currentScore += 20;
        document.getElementById("guess").value = "";
        submittedLetters[4] = "n";
    }else if (myWord[4] === letter && submittedLetters[4] != "k") {
        letters[4].classList.remove("hidden");
        letters[4].parentElement.style.backgroundColor = "transparent";
        letters[4].parentElement.style.border = "none";
        currentScore += 20;
        document.getElementById("guess").value = "";
        submittedLetters[5] = "k";
    }
    else {
        lives -= 1;
        document.getElementById("guess").value = "";
        changeHeartsDisplay(); 
    }

    if (currentScore === 100) {
        endGame(true);
    } else if (lives === 0) {
        endGame(false);
    }
}

//This function displays all letters.
function showLetters() {
    for (let i = 0; i < letters.length; i++) {
        letters[i].classList.remove("hidden");
        letters[i].parentElement.style.backgroundColor = "transparent";
        letters[i].parentElement.style.border = "none";
    }
}

function endGame(isTrue) {
    setTimeout(() => {
        alert(isTrue ? "You win!" : "You lose!");
    }, 100);

    submitBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
}
//This function restarts the game.
function resetGame() {
    currentScore = 0;
    lives = 3;

    for (let i = 0; i < letters.length; i++) {
        letters[i].classList.add("hidden");
        letters[i].parentElement.style.backgroundColor = "#9bcee0";
        letters[i].parentElement.style.border = "";
        submittedLetters[i] = "";
    }
    submitBtn.classList.remove("hidden");
    resetBtn.classList.add("hidden");

    restartGameboard();
}

function restartGameboard() {
    document.getElementById("score").innerText = `Points: ${currentScore}`;
    changeHeartsDisplay(); 
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}

function changeHeartsDisplay() {
    heartsContain.innerHTML = "";

    for (let i = 0; i < lives; i++) {
        const heartIcon = document.createElement("img");
        heartIcon.src = "hearts.svg";
        heartIcon.classList.add("hearts-icon");
        heartsContain.appendChild(heartIcon);
    }
}

restartGameboard();
