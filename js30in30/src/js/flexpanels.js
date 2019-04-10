function toggleOpen() {
    this.classList.toggle('open');
}

function toggleOpenActive(e) {
    if (e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}

document.querySelectorAll('.panel')
        .forEach(panel => {
            panel.addEventListener('click', toggleOpen);
            panel.addEventListener('transitionend', toggleOpenActive);
        });