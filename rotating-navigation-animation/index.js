const triggerIcon = document.querySelector('.trigger')
const closeIcon = document.querySelector('.close')
const container = document.querySelector('.container')
triggerIcon.addEventListener('click', function() {
  container.classList.add('show-nav')
})
closeIcon.addEventListener('click', function() {
  container.classList.remove('show-nav')
})