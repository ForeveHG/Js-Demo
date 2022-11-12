
const boxs = document.querySelectorAll('.box')

window.addEventListener('scroll', onScroll)

function onScroll() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxs.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if(top < triggerBottom) box.classList.add('show')
    else box.classList.remove('show')
  })
}