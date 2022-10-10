function installExpand() {
  const container = document.querySelector('.container')
  const cards = document.querySelectorAll('.card')
  container?.addEventListener('click', function(event) {
    const target = event.target as Element
    if(target.classList.contains('card')) {
      cards.forEach(card => {
        removeExpand(card)
        if(card === target) triggerExpand(card)
      })
    }
  })
}

function triggerExpand(element: Element) {
  element.classList.add('active')
}

function removeExpand(element: Element) {
  element.classList.remove('active')
}

installExpand()