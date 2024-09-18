const buttons = document.getElementsByClassName('filter-button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        this.classList.add('active');
    });
}