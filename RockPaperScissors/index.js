function computerChoice() {
  let arr = [
    "rock",
    "paper",
    "scissors",
    "paper",
    "paper",
    "scissors",
    "rock",
    "scissors",
    "rock",
  ];
  let randomNum = Math.floor(Math.random() * 9);
  return arr[randomNum];
}

let user_posture = document.getElementsByClassName("user-posture")[0];
let comp_posture = document.getElementsByClassName("computer-posture")[0];

let user = document.getElementById("user");
let computer = document.getElementById("computer");
let play_again = document.getElementById("pAgain");
let coin = document.getElementById("coins");

let uwin = 0;
let cwin = 0;
let tie = 0;
let uloss = 0;
let closs = 0;
let coins = 0;

function userInput(value) {
  user_posture.innerHTML = "";
  let compValue = computerChoice();
  if (value == "rock") {
    user_posture.classList.remove("rotate-scissor");
    user_posture.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
  } else if (value == "paper") {
    user_posture.classList.remove("rotate-scissor");
    user_posture.innerHTML = '<i class="fa-solid fa-hand"></i>';
  } else if (value == "scissors") {
    user_posture.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    user_posture.classList.add("rotate-scissor");
  }

  if (compValue == "rock") {
    comp_posture.classList.remove("comp-scissor");
    comp_posture.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
  } else if (compValue == "paper") {
    comp_posture.classList.remove("comp-scissor");
    comp_posture.innerHTML = '<i class="fa-solid fa-hand"></i>';
  } else if (compValue == "scissors") {
    comp_posture.innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    comp_posture.classList.add("comp-scissor");
  }

  getWinner(value, compValue);
}

function getWinner(v, cv) {
  if (v == cv) {
    tie++;
    user.innerHTML = ` You - <span>| Wins - ${uwin} |</span>
    <span> Loses -  ${uloss} |</span>
    <span >Tied - ${tie}</span>`;
    computer.innerHTML = ` You - <span>| Wins - ${cwin} |</span>
    <span> Loses -  ${closs} |</span>
    <span >Tied - ${tie}</span>`;
  } else if (
    (v == "rock" && cv == "scissors") ||
    (v == "paper" && cv == "rock") ||
    (v == "scissors" && cv == "paper")
  ) {
    uwin++;
    coins = coins + 10;
    localStorage.setItem("coins", coins);
    closs++;
    user.innerHTML = `<b> You - </b> <span>| Wins - ${uwin} |</span>
    <span> Loses -  ${uloss} |</span>
    <span >Tied - ${tie}</span>`;
    computer.innerHTML = `<b> Computer - </b> <span>| Wins - ${cwin} |</span>
    <span> Loses -  ${closs} |</span>
    <span >Tied - ${tie}</span>`;
  } else {
    cwin++;
    uloss++;
    let currentCoins = parseInt(localStorage.getItem("coins"));
    let newCoins = Math.max(currentCoins - 10, 0);
    localStorage.setItem("coins", newCoins);

    coin.innerHTML = `<h1>You have <span>${newCoins}</span> coins !</h1>`;

    user.innerHTML = `<b> You - </b> <span>| Wins - ${uwin} |</span>
    <span> Loses -  ${uloss} |</span>
    <span >Tied - ${tie}</span>`;
    computer.innerHTML = `<b> Compuer - </b> <span>| Wins - ${cwin} |</span>
    <span> Loses -  ${closs} |</span>
    <span >Tied - ${tie}</span>`;
  }
}

play_again.addEventListener("click", function () {
  user_posture.innerHTML =
    "<i class='fa-regular fa-face-rolling-eyes fa-shake'></i>";
  comp_posture.innerHTML =
    "<i class='fa-regular fa-face-rolling-eyes fa-shake'></i>";

  user_posture.classList.remove("rotate-scissor");
  comp_posture.classList.remove("comp-scissor");

  uwin = 0;
  cwin = 0;
  tie = 0;
  uloss = 0;
  closs = 0;

  updateScore();
});

function updateScore() {
  user.innerHTML = ` You - <span>| Wins - ${uwin} |</span>
    <span> Loses -  ${uloss} |</span>
    <span >Tied - ${tie}</span>`;
  computer.innerHTML = ` Computer - <span>| Wins - ${cwin} |</span>
    <span> Loses -  ${closs} |</span>
    <span >Tied - ${tie}</span>`;
}
