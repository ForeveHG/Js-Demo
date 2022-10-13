const bg = document.querySelector('.bg')
const countEle = document.querySelector('.count')
let count = 100
let filter = 200

function setCount() {
  if(count === 0) return
  count -= 1;
  filter -= 2;
  countEle.innerHTML = count + '%'
  countEle.style.opacity = count / 100
  bg.style.filter = `blur(${filter / 10}px)`
  setTimeout(() => {
    setCount()
  }, 20)
}

window.onload = () => {
  setCount()
}



