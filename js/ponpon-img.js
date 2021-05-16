function ButtonForShowMorePon() {
    let paragraph = document.querySelector('.more-images');
    let button = 1
    let button1 = document.querySelector('.button-show-more-img');
    button1.addEventListener('click', function () {
        paragraph.classList.toggle('open');
    })
    button1.addEventListener('click', (e) => {
        
        if (e.target == button1 && button == 1) {
            button1.textContent = "Show Less";
            button = 0;
            
        } else if (e.target == button1 && button == 0) {
            button1.textContent = "Show More Pon";
            button = 1;
        }
    })
}
ButtonForShowMorePon()