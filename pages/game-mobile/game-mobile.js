const music = document.getElementById('music');

music.addEventListener('click', () => {
    turnMusic();
})

function turnMusic() {
    music.classList.toggle('playing')
}

const langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener('click', () => {
    switchLang()
})

function switchLang() {
    const ru = document.getElementById('ru')
    const en = document.getElementById('en')

    if (langToggle.checked === true) {
        ru.classList.remove('hidden')
        en.classList.add('hidden')
    } else {
        en.classList.remove('hidden')
        ru.classList.add('hidden')
    }
}

switchLang()

const betRange = document.getElementById('bet-range')

const tickOne = document.querySelector('.tick.one')
const tickTwo = document.querySelector('.tick.two')
const tickThree = document.querySelector('.tick.three')
const tickFour = document.querySelector('.tick.four')
const tickFive = document.querySelector('.tick.five')
const tickSix = document.querySelector('.tick.six')
const tickSeven = document.querySelector('.tick.seven')
const tickEight = document.querySelector('.tick.eight')
const tickNine = document.querySelector('.tick.nine')
const tickTen = document.querySelector('.tick.ten')

tickOne.addEventListener('click', () => {
    if (tickOne.classList.contains('ticked')) {
        tickTwo.classList.remove('ticked')
        tickThree.classList.remove('ticked')
        tickFour.classList.remove('ticked')
        tickFive.classList.remove('ticked')
        tickSix.classList.remove('ticked')
        tickSeven.classList.remove('ticked')
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
    }
    betRange.value = 1
})

tickTwo.addEventListener('click', () => {
    if (tickTwo.classList.contains('ticked')) {
        tickThree.classList.remove('ticked')
        tickFour.classList.remove('ticked')
        tickFive.classList.remove('ticked')
        tickSix.classList.remove('ticked')
        tickSeven.classList.remove('ticked')
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
    }
    betRange.value = 2
})

tickThree.addEventListener('click', () => {
    if (tickThree.classList.contains('ticked')) {
        tickFour.classList.remove('ticked')
        tickFive.classList.remove('ticked')
        tickSix.classList.remove('ticked')
        tickSeven.classList.remove('ticked')
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
    }
    betRange.value = 3
})

tickFour.addEventListener('click', () => {
    if (tickFour.classList.contains('ticked')) {
        tickFive.classList.remove('ticked')
        tickSix.classList.remove('ticked')
        tickSeven.classList.remove('ticked')
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
    }
    betRange.value = 4
})

tickFive.addEventListener('click', () => {
    if (tickFive.classList.contains('ticked')) {
        tickSix.classList.remove('ticked')
        tickSeven.classList.remove('ticked')
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
        tickFive.classList.add('ticked')
    }
    betRange.value = 5
})

tickSix.addEventListener('click', () => {
    if (tickSix.classList.contains('ticked')) {
        tickSeven.classList.remove('ticked')
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
        tickFive.classList.add('ticked')
        tickSix.classList.add('ticked')
    }
    betRange.value = 6
})

tickSeven.addEventListener('click', () => {
    if (tickSeven.classList.contains('ticked')) {
        tickEight.classList.remove('ticked')
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
        tickFive.classList.add('ticked')
        tickSix.classList.add('ticked')
        tickSeven.classList.add('ticked')
    }
    betRange.value = 7
})

tickEight.addEventListener('click', () => {
    if (tickEight.classList.contains('ticked')) {
        tickNine.classList.remove('ticked')
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
        tickFive.classList.add('ticked')
        tickSix.classList.add('ticked')
        tickSeven.classList.add('ticked')
        tickEight.classList.add('ticked')
    }
    betRange.value = 8
})

tickNine.addEventListener('click', () => {
    if (tickNine.classList.contains('ticked')) {
        tickTen.classList.remove('ticked')
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
        tickFive.classList.add('ticked')
        tickSix.classList.add('ticked')
        tickSeven.classList.add('ticked')
        tickEight.classList.add('ticked')
        tickNine.classList.add('ticked')
    }
    betRange.value = 9
})

tickTen.addEventListener('click', () => {
    if (tickTen.classList.contains('ticked')) {
        return
    } else {
        tickOne.classList.add('ticked')
        tickTwo.classList.add('ticked')
        tickThree.classList.add('ticked')
        tickFour.classList.add('ticked')
        tickFive.classList.add('ticked')
        tickSix.classList.add('ticked')
        tickSeven.classList.add('ticked')
        tickEight.classList.add('ticked')
        tickNine.classList.add('ticked')
        tickTen.classList.add('ticked')
    }
    betRange.value = 10
})


//swipe controller

const layerChat = document.getElementById('layer-chat')
const chatPrompt = document.querySelector('.chat-prompt')
const swipeInfo = document.querySelector('.swipe-info')
const swipeImg = document.querySelector('.swipe-img')

let touchStartY = 0
let touchEndY = 0
    
function checkDirection() {
  if (touchEndY < touchStartY) {
    layerChat.classList.add('up')
    chatPrompt.classList.add('visible')
    swipeInfo.classList.add('hidden')
    swipeImg.classList.add('rotate')
  }
  if (touchEndY > touchStartY) {
    layerChat.classList.remove('up')
    chatPrompt.classList.remove('visible')
    swipeInfo.classList.remove('hidden')
    swipeImg.classList.remove('rotate')
  }
}

layerChat.addEventListener('touchstart', e => {
  touchStartY = e.changedTouches[0].screenY
})

layerChat.addEventListener('touchend', e => {
  touchEndY = e.changedTouches[0].screenY
  checkDirection()
})