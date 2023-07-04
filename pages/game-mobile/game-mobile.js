//
window.addEventListener("load", (event) => {
  updateLink();
  switchLanguage();
});

// INITIAL VALUES

// PLAYER 1
// Display info
const nameOne = document.querySelector(".name.one");
const roleOne = document.querySelector(".role.one");
const scoreOne = document.getElementById("score-num-one");
const marblesOne = document.querySelector(".marbles.one");
// Bet values (can be accessed with betType.value & betAmount.value)
const betType = document.getElementById("bet-type");
const betAmount = document.getElementById("bet-amount");

// PLAYER 2
// Display info
const nameTwo = document.querySelector(".name.two");
const roleTwo = document.querySelector(".role.two");
const scoreTwo = document.getElementById("score-num-two");
const marblesTwo = document.querySelector(".marbles.two");

// CONTROLLERS

// Rules
function updateLink() {
  if (language === "EN") {
    rules.setAttribute("href", "#rulesEN");
  } else {
    rules.setAttribute("href", "#rulesRU");
  }
}

// Language
let language = "EN";

const languageSwitch = document.getElementById("language-switch");
languageSwitch.addEventListener("click", () => {
  switchLanguage();
  updateLink();
  renderLanguage();
});

function switchLanguage() {
  const ru = document.getElementById("ru");
  const en = document.getElementById("en");
  if (languageSwitch.checked === true) {
    ru.classList.remove("hidden");
    en.classList.add("hidden");
    language = "RU";
  } else {
    en.classList.remove("hidden");
    ru.classList.add("hidden");
    language = "EN";
  }
}

const rules = document.getElementById("rules");
const submit = document.getElementById("submit");
const message = document.getElementById("message");

function renderLanguage() {
  if (language === "EN") {
    rules.innerHTML = "Game rules";
    roleOne.innerHTML = "Guesser";
    roleTwo.innerHTML = "Hider";
    even.innerHTML = "Even";
    odd.innerHTML = "Odd";
    submit.innerHTML = "Submit";
    swipeInfo.innerHTML = "Swipe up to see history and chat";
    message.setAttribute("placeholder", "Tap to send a message");
  } else {
    rules.innerHTML = "Правила игры";
    roleOne.innerHTML = "Отгадывающий";
    roleTwo.innerHTML = "Загадывающий";
    even.innerHTML = "Четное";
    odd.innerHTML = "Нечетное";
    submit.innerHTML = "Отправить";
    swipeInfo.innerHTML = "Смахните вверх, чтобы увидеть историю и чат";
    message.setAttribute("placeholder", "Нажмите, чтобы отправить сообщение");
  }
}

// Music
const play = document.getElementById("play");
const music = document.getElementById("music");

play.onclick = () => {
  play.classList.toggle("on");
  play.classList.contains("on") ? music.play() : music.pause();
};

// Marbles
function renderMarbles() {
  marblesOne.innerHTML = "";
  for (let i = 0; i < Number(scoreOne.innerHTML); i++) {
    const marble = document.createElement("div");
    marble.classList.add("marble");
    marblesOne.appendChild(marble);
  }
  marblesTwo.innerHTML = "";
  for (let i = 0; i < Number(scoreTwo.innerHTML); i++) {
    const marble = document.createElement("div");
    marble.classList.add("marble");
    marblesTwo.appendChild(marble);
  }
}

// betType
betType.addEventListener("click", () => {
  if (betType.checked === true) {
    betType.value = "odd";
  } else {
    betType.value = "even";
  }
});

// betAmount
const tickOne = document.querySelector(".tick.one");
tickOne.addEventListener("click", () => {
  if (tickOne.classList.contains("ticked")) {
    tickTwo.classList.remove("ticked");
    tickThree.classList.remove("ticked");
    tickFour.classList.remove("ticked");
    tickFive.classList.remove("ticked");
    tickSix.classList.remove("ticked");
    tickSeven.classList.remove("ticked");
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
  }
  betAmount.value = 1;
});

const tickTwo = document.querySelector(".tick.two");
tickTwo.addEventListener("click", () => {
  if (tickTwo.classList.contains("ticked")) {
    tickThree.classList.remove("ticked");
    tickFour.classList.remove("ticked");
    tickFive.classList.remove("ticked");
    tickSix.classList.remove("ticked");
    tickSeven.classList.remove("ticked");
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
  }
  betAmount.value = 2;
});

const tickThree = document.querySelector(".tick.three");
tickThree.addEventListener("click", () => {
  if (tickThree.classList.contains("ticked")) {
    tickFour.classList.remove("ticked");
    tickFive.classList.remove("ticked");
    tickSix.classList.remove("ticked");
    tickSeven.classList.remove("ticked");
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
  }
  betAmount.value = 3;
});

const tickFour = document.querySelector(".tick.four");
tickFour.addEventListener("click", () => {
  if (tickFour.classList.contains("ticked")) {
    tickFive.classList.remove("ticked");
    tickSix.classList.remove("ticked");
    tickSeven.classList.remove("ticked");
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
  }
  betAmount.value = 4;
});

const tickFive = document.querySelector(".tick.five");
tickFive.addEventListener("click", () => {
  if (tickFive.classList.contains("ticked")) {
    tickSix.classList.remove("ticked");
    tickSeven.classList.remove("ticked");
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
    tickFive.classList.add("ticked");
  }
  betAmount.value = 5;
});

const tickSix = document.querySelector(".tick.six");
tickSix.addEventListener("click", () => {
  if (tickSix.classList.contains("ticked")) {
    tickSeven.classList.remove("ticked");
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
    tickFive.classList.add("ticked");
    tickSix.classList.add("ticked");
  }
  betAmount.value = 6;
});

const tickSeven = document.querySelector(".tick.seven");
tickSeven.addEventListener("click", () => {
  if (tickSeven.classList.contains("ticked")) {
    tickEight.classList.remove("ticked");
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
    tickFive.classList.add("ticked");
    tickSix.classList.add("ticked");
    tickSeven.classList.add("ticked");
  }
  betAmount.value = 7;
});

const tickEight = document.querySelector(".tick.eight");
tickEight.addEventListener("click", () => {
  if (tickEight.classList.contains("ticked")) {
    tickNine.classList.remove("ticked");
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
    tickFive.classList.add("ticked");
    tickSix.classList.add("ticked");
    tickSeven.classList.add("ticked");
    tickEight.classList.add("ticked");
  }
  betAmount.value = 8;
});

const tickNine = document.querySelector(".tick.nine");
tickNine.addEventListener("click", () => {
  if (tickNine.classList.contains("ticked")) {
    tickTen.classList.remove("ticked");
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
    tickFive.classList.add("ticked");
    tickSix.classList.add("ticked");
    tickSeven.classList.add("ticked");
    tickEight.classList.add("ticked");
    tickNine.classList.add("ticked");
  }
  betAmount.value = 9;
});

const tickTen = document.querySelector(".tick.ten");
tickTen.addEventListener("click", () => {
  if (tickTen.classList.contains("ticked")) {
    return;
  } else {
    tickOne.classList.add("ticked");
    tickTwo.classList.add("ticked");
    tickThree.classList.add("ticked");
    tickFour.classList.add("ticked");
    tickFive.classList.add("ticked");
    tickSix.classList.add("ticked");
    tickSeven.classList.add("ticked");
    tickEight.classList.add("ticked");
    tickNine.classList.add("ticked");
    tickTen.classList.add("ticked");
  }
  betAmount.value = 10;
});

// Swipe
const layerChat = document.getElementById("layer-chat");
const chatPrompt = document.querySelector(".chat-prompt");
const swipeInfo = document.querySelector(".swipe-info");
const swipeImg = document.querySelector(".swipe-img");

let touchStartY = 0;
let touchEndY = 0;

function checkDirection() {
  if (touchEndY < touchStartY) {
    layerChat.classList.add("up");
    chatPrompt.classList.add("visible");
    swipeInfo.classList.add("none");
    swipeImg.classList.add("rotate");
  }
  if (touchEndY > touchStartY) {
    layerChat.classList.remove("up");
    chatPrompt.classList.remove("visible");
    swipeInfo.classList.remove("none");
    swipeImg.classList.remove("rotate");
  }
}

layerChat.addEventListener("touchstart", (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

layerChat.addEventListener("touchend", (e) => {
  touchEndY = e.changedTouches[0].screenY;
  checkDirection();
});


// Menu controller
const menuLayer = document.getElementById('menu-layer')
const menu = document.getElementById('menu')
menuLayer.addEventListener('click', () => {
  menuLayer.classList.add('closed')
  menu.classList.add('opened')
})

window.addEventListener('click', ({ target }) => {
  if (target !== menu && target !== menuLayer) {
    menuLayer.classList.remove('closed')

    menu.classList.remove('opened')
  }
});






// GAME LOGIC

const Player = (name) => {
  let score = 10;
  let bet;
  let role;
  let ready = false;
  let choice;

  return { name, score, bet, role, ready, choice };
};

let playerOne = Player('Player')
playerOne.role = 'guesser'
let playerTwo = Player('A.I.')
playerTwo.role = 'hider'

const layerBet = document.getElementById('layer-bet')

const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
    if (playerOne.score === 0 || playerTwo.score === 0) return
    layerBet.classList.remove('hidden')
    placeBets()
    playRound()
    runAnimation()
})

function playRound() {
  resolveTurn();
  renderScore();
  renderMarbles();

  if (playerOne.score === 0) {
    //lost
    setTimeout(() => {
      doAnimationLose()

    }, 2000);

  } else if (playerTwo.score === 0) {
    //won
    setTimeout(() => {
      doAnimationWon()

    }, 2000);

  } else {
    //default
    changeRoles();
    renderRoles();
    renderBetTicks()
    betAmount.value = 1;
    tickOne.click();
  }
}

function renderRoles() {
  if (language === 'EN' && playerOne.role === 'guesser') {
    roleOne.innerHTML = 'guesser';
    roleTwo.innerHTML = 'hider';
  } else if (language === 'EN' && playerOne.role === 'hider') {
    roleOne.innerHTML = 'hider';
    roleTwo.innerHTML = 'guesser';
  } else if (language === 'RU' && playerOne.role === 'guesser') {
    roleOne.innerHTML = 'Угадывающий'
    roleTwo.innerHTML = 'Загадывающий'
  } else if (language === 'RU' && playerOne.role === 'hider') {
    roleOne.innerHTML = 'Загадывающий'
    roleTwo.innerHTML = 'Угадывающий'
  }
}

function changeRoles() {
  if (playerOne.score === 1) {
    playerOne.role = "guesser";
    playerTwo.role = "hider";
  } else if (playerTwo.score === 1) {
    playerOne.role = "hider";
    playerTwo.role = "guesser";
  } else if (playerOne.role === "hider") {
    playerOne.role = "guesser";
    playerTwo.role = "hider";
  } else if (playerOne.role === "guesser") {
    playerOne.role = "hider";
    playerTwo.role = "guesser";
  }
}

function renderScore() {
  scoreOne.innerHTML = `${playerOne.score}`;
  scoreTwo.innerHTML = `${playerTwo.score}`;
}

const tickmarks = document.getElementById('tickmarks')
const betTicks = document.getElementById('bet-ticks')

function renderBetTicks() {
  betTicks.classList.remove('hidden')

  if (playerOne.role === 'hider') {
    betTicks.classList.add('hidden')
  }

  let minAmount
  if (playerOne.score > playerTwo.score) {
    minAmount = playerTwo.score
  } else {
    minAmount = playerOne.score
  }

  document.querySelector('.tick.two').classList.remove('none')
  document.querySelector('.tick.three').classList.remove('none')
  document.querySelector('.tick.four').classList.remove('none')
  document.querySelector('.tick.five').classList.remove('none')
  document.querySelector('.tick.six').classList.remove('none')
  document.querySelector('.tick.seven').classList.remove('none')
  document.querySelector('.tick.eight').classList.remove('none')
  document.querySelector('.tick.nine').classList.remove('none')
  document.querySelector('.tick.ten').classList.remove('none')


  switch (minAmount) {
    case 0:
      document.querySelector('.tick.one').classList.add('none')
      document.querySelector('.tick.two').classList.add('none')
      document.querySelector('.tick.three').classList.add('none')
      document.querySelector('.tick.four').classList.add('none')
      document.querySelector('.tick.five').classList.add('none')
      document.querySelector('.tick.six').classList.add('none')
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
    case 1:
      document.querySelector('.tick.two').classList.add('none')
      document.querySelector('.tick.three').classList.add('none')
      document.querySelector('.tick.four').classList.add('none')
      document.querySelector('.tick.five').classList.add('none')
      document.querySelector('.tick.six').classList.add('none')
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 2:
      document.querySelector('.tick.three').classList.add('none')
      document.querySelector('.tick.four').classList.add('none')
      document.querySelector('.tick.five').classList.add('none')
      document.querySelector('.tick.six').classList.add('none')
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 3:
      document.querySelector('.tick.four').classList.add('none')
      document.querySelector('.tick.five').classList.add('none')
      document.querySelector('.tick.six').classList.add('none')
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 4:
      document.querySelector('.tick.five').classList.add('none')
      document.querySelector('.tick.six').classList.add('none')
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 5:
      document.querySelector('.tick.six').classList.add('none')
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 6:
      document.querySelector('.tick.seven').classList.add('none')
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 7:
      document.querySelector('.tick.eight').classList.add('none')
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 8:
      document.querySelector('.tick.nine').classList.add('none')
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 9:
      document.querySelector('.tick.ten').classList.add('none')
      break;
    case 10:
      break;
  }
}

function placeBets() {
  playerOne.choice = betType.value
  playerOne.bet = Number(betAmount.value)

  function aiBet(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (playerTwo.score > playerOne.score) {
    playerTwo.bet = aiBet(1, playerOne.score);
  } else {
    playerTwo.bet = aiBet(1, playerTwo.score)
  }

  function aiChoice() {
    let result;
    let randomNum = aiBet(1, 2);
    if (randomNum === 1) {
      result = 'odd';
    } else {
      result = 'even';
    }
    return result;
  }

  playerTwo.choice = aiChoice();  
}

let scoreDiffOne
let scoreDiffTwo
const animationName = document.getElementById('animation-name')

function resolveTurn() {
  let previousScoreOne = playerOne.score
  let previousScoreTwo = playerTwo.score
  if (playerOne.role === "guesser") {
    if (playerOne.choice === playerTwo.choice) {
      playerOne.score += Number(playerOne.bet);
      playerTwo.score -= Number(playerOne.bet);
      wonAmount = playerOne.bet;
    } else {
      playerOne.score -= Number(playerOne.bet);
      playerTwo.score += Number(playerOne.bet);
      wonAmount = playerOne.bet;
    }
  } else if (playerOne.role === "hider") {
    if (playerOne.choice === playerTwo.choice) {
      playerOne.score -= Number(playerTwo.bet);
      playerTwo.score += Number(playerTwo.bet);
      wonAmount = playerTwo.bet;
    } else {
      playerOne.score += Number(playerTwo.bet);
      playerTwo.score -= Number(playerTwo.bet);
      wonAmount = playerTwo.bet;
    }
  }
  let currentScoreOne = playerOne.score
  let currentScoreTwo = playerTwo.score
  if (currentScoreOne > previousScoreOne) {
    scoreDiffOne = `+${currentScoreOne - previousScoreOne}`
    scoreDiffTwo = `${currentScoreTwo - previousScoreTwo}`
    animationName.innerHTML = `You won ${currentScoreOne - previousScoreOne} marbles this turn 👍`
  } else {
    scoreDiffOne = `${currentScoreOne - previousScoreOne}`
    scoreDiffTwo = `+${currentScoreTwo - previousScoreTwo}`
    animationName.innerHTML = `You lost ${Math.abs(currentScoreOne - previousScoreOne)} marbles this turn`
  }
}

const scoreDifferenceOne = document.getElementById("score-difference-one");
const scoreDifferenceTwo = document.getElementById("score-difference-two");

function checkPositive() {
  scoreDifferenceOne.classList.remove('positive')
  scoreDifferenceOne.classList.remove('negative')
  if (scoreDiffOne < 0) {
    scoreDifferenceOne.classList.add("negative");
  } else {
    scoreDifferenceOne.classList.add("positive");
  }
  scoreDifferenceTwo.classList.remove("positive")
  scoreDifferenceTwo.classList.remove("negative")
  if (scoreDiffTwo < 0) {
    scoreDifferenceTwo.classList.add("negative");
  } else {
    scoreDifferenceTwo.classList.add("positive");
  }
}


function runAnimation() {
  checkPositive()
  scoreDifferenceOne.innerHTML = `${scoreDiffOne}`
  scoreDifferenceOne.classList.remove("hidden");
  scoreDifferenceOne.classList.add("smalltobig");
  scoreDifferenceTwo.innerHTML = `${scoreDiffTwo}`
  scoreDifferenceTwo.classList.remove("hidden");
  scoreDifferenceTwo.classList.add("smalltobig");
  animationName.classList.remove('hidden')
  animationName.classList.add('bottotop')
  setTimeout(() => {
    scoreDifferenceOne.classList.remove("smalltobig");
    scoreDifferenceOne.classList.add("hidden");
    scoreDifferenceTwo.classList.remove("smalltobig");
    scoreDifferenceTwo.classList.add("hidden");
    animationName.classList.remove('bottotop')
    animationName.classList.add('hidden')
  }, "4000");
}


//confetti
const Confettiful = function (el) {
  this.el = el;
  this.containerEl = null;
  this.confettiFrequency = 3;
  this.confettiColors = ["#fce18a", "#ff726d", "#b48def", "#f4306d"];
  this.confettiAnimations = ["slow", "medium", "fast"];
  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function () {
  const containerEl = document.createElement("div");
  const elPosition = this.el.style.position;
  if (elPosition !== "relative" || elPosition !== "absolute") {
    this.el.style.position = "relative";
  }
  containerEl.classList.add("confetti-container");
  this.el.appendChild(containerEl);
  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement("div");
    const confettiSize = Math.floor(Math.random() * 3) + 7 + "px";
    const confettiBackground =
      this.confettiColors[
        Math.floor(Math.random() * this.confettiColors.length)
      ];
    const confettiLeft =
      Math.floor(Math.random() * this.el.offsetWidth) + "px";
    const confettiAnimation =
      this.confettiAnimations[
        Math.floor(Math.random() * this.confettiAnimations.length)
      ];
    confettiEl.classList.add(
      "confetti",
      "confetti--animation-" + confettiAnimation
    );
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    confettiEl.removeTimeout = setTimeout(function () {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);
    this.containerEl.appendChild(confettiEl);
  }, 25);
};

function doConfetti() {
  window.confettiful = new Confettiful(document.body);
}

const mainSide = document.getElementById("main-side");

function doAnimationWon() {
  mainSide.classList.add("blur");
  const popupWin = document.getElementById("popup-win");
  popupWin.classList.remove("none");
  popupWin.classList.add('toptobot')

  mainSide.confettiful = new Confettiful(document.body);

}

function doAnimationLose() {
  mainSide.classList.add("blur");
  const popupLose = document.getElementById("popup-lose");
  popupLose.classList.remove("none");
  popupLose.classList.add('toptobot')

}