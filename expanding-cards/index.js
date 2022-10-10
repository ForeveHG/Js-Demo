function installExpand() {
    var container = document.querySelector('.container');
    var cards = document.querySelectorAll('.card');
    container === null || container === void 0 ? void 0 : container.addEventListener('click', function (event) {
        var target = event.target;
        if (target.classList.contains('card')) {
            cards.forEach(function (card) {
                removeExpand(card);
                if (card === target)
                    triggerExpand(card);
            });
        }
    });
}
function triggerExpand(element) {
    element.classList.add('active');
}
function removeExpand(element) {
    element.classList.remove('active');
}
installExpand();
