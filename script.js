function playSound(e) {

  let keyCode
  e.type === 'keyup' ? keyCode = e.keyCode : keyCode = this.getAttribute('data-key')

  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function playWithKeyboard(e) {
  const el = this;
  const key = el.getAttribute('data-key')
  const audio = document.querySelector(`audio[data-key="${key}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  this.classList.add('playing')
}

function removeTransition() {
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
keys.forEach(key => key.addEventListener('click', playSound))


window.addEventListener('keyup', playSound)


function log(...e) {
  console.log(...e)
}
