function displayHeadbandsPrices(e) {
    let buttonClicked = document.querySelector('.button-display-headbands-prices');
    let paragraph = document.querySelector('.prices-for-headbands');
    let button = 1
    buttonClicked.addEventListener('click', (e) => {
    if (e.target == buttonClicked && button == 1) {
        button = 0;
        paragraph.classList.toggle('open1');
        paragraph.classList.remove('open2');
    } else if (e.target == buttonClicked && button == 0) {
        button = 1;
        paragraph.classList.remove('open1');
        paragraph.classList.toggle('open2');
    }})
}
displayHeadbandsPrices();