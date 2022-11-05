const music = document.getElementById('music');

music.addEventListener('click', () => {
    turnMusic();
})

function turnMusic() {
    music.classList.toggle('playing')
}

const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click', () => {
    
})