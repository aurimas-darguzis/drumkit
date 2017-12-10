let snare = document.getElementById('snare');
window.addEventListener('keyup', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
})

const keys = document.querySelectorAll('.key')
keys.forEach(key => console.log(key))