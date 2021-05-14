function ButtonForShowMorePon() {
    let paragraph = document.getElementById
    ('more-images');
    let button = 1;
    let button1 = document.getElementById('button-show-more-img');
    button1.style.background = "linear-gradient(45deg, black, red)";
    button1.addEventListener('click', function(e) {
        
        if (e.target == button1 && button == 1) {
            paragraph.style.display = "inherit";
            button1.style.background = "linear-gradient(45deg, black, green)";
            button = 0;
            button1.textContent = "Show Less"
        } else if ( e.target == button1 && button == 0) {
            paragraph.style.display = "none";
            button1.style.background = "linear-gradient(45deg, black, red)"
            button = 1;
            button1.textContent = "Show More Pon"
        }
    })
}
ButtonForShowMorePon()