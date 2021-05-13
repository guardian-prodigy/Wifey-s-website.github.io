function Button() {
    let paragraph = document.getElementById
    ('more-images');
    let button = 1;
    let button1 = document.querySelector('#button-show-more-img');
    button1.addEventListener('click', function(e) {
        if (e.target == button1 && button == 1) {
            paragraph.style.display = "inherit";
            button = 0;
            button1.textContent = "Show Less"
        } else if ( e.target == button1 && button == 0) {
            paragraph.style.display = "none";
            button = 1;
            button1.textContent = "Show More Pon"
        }
    })
}
Button()