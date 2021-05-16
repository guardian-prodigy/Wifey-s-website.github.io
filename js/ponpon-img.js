function ButtonForShowMorePon() {
    let paragraph = document.querySelector('.more-images');
    let button = 1
    let button1 = document.getElementById('button-show-more-img');
    button1.style.background = "linear-gradient(45deg, black, red)";
    button1.addEventListener('click', function () {
        paragraph.classList.toggle('open');
    })
    button1.addEventListener('click', (e) => {
        if (e.target == button1 && button == 1) {
            button1.textContent = "Show Less";
            button = 0;
            button1.style.background = "linear-gradient(45deg, black, green, black)"
        } else if (e.target == button1 && button == 0) {
            button1.textContent = "Show More Pon";
            button = 1;
            button1.style.background = "linear-gradient(45deg, black, red, black)"
        }
    })
}
ButtonForShowMorePon()