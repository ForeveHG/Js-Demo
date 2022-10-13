const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.search input')
btn.addEventListener('click', function() {
  if(search.classList.contains('active')) search.classList.remove('active')
  else {
    search.classList.add('active')
    input.focus()
  }
})