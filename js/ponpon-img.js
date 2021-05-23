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
function ButtontoDisplayPrices() {
    let paragraph = document.querySelector('.paragraph-for-prices');
    let button1 = document.querySelector(".button-to-display-prices");
    let button = 1
    button1.addEventListener('click', (e) => {
        if (e.target == button1 && button == 1){
           paragraph.classList.toggle('open1');
           paragraph.classList.remove('open2');
           button = 0;
           button1.textContent = "Close Prices";
        } else if (e.target == button1 && button == 0) {
            paragraph.classList.remove('open1');
            paragraph.classList.toggle('open2');
            button = 1;
            button1.textContent = "Display Prices";
        }
        
    })
}
ButtontoDisplayPrices()

function More2coloredLargePon1() {
    let button1 = document.getElementById('button-for-more-large-pon1');
    let button = 1;
    let paragraph = document.querySelector('.p-for-large-pons1');
    button1.addEventListener('click', (e) => {
        if (e.target == button1 && button == 1) {
            paragraph.classList.toggle('open1');
            paragraph.classList.remove('open2');
            button1.textContent = "Show Less";
            button = 0;
        } else if (e.target == button1 && button == 0) {
            paragraph.classList.remove('open1');
            paragraph.classList.toggle('open2');
            button1.textContent = "More Examples";
            button = 1;
        } else if (e.target != button1) {
            paragraph.classList.remove('open2');
            paragraph.classList.toggle('open1');

        }
    })
}
More2coloredLargePon1()

function More2coloredLargePon2() {
    let button1 = document.getElementById('button-for-more-large-pon2');
    let button = 1;
    let paragraph = document.querySelector('.p-for-large-pons2');
    button1.addEventListener('click', (e) => {
        if (e.target == button1 && button == 1) {
            paragraph.classList.toggle('open1');
            paragraph.classList.remove('open2');
            button1.textContent = "Show Less";
            button = 0;
        } else if (e.target == button1 && button == 0) {
            paragraph.classList.remove('open1');
            paragraph.classList.toggle('open2');
            button1.textContent = "More Examples";
            button = 1;
        } else if (e.target != button1) {
            paragraph.classList.remove('open2');
            paragraph.classList.toggle('open1');

        }
    })
}
More2coloredLargePon2()

function More2coloredLargePon3() {
    let button1 = document.getElementById('button-for-more-large-pon3');
    let button = 1;
    let paragraph = document.querySelector('.p-for-large-pons3');
    button1.addEventListener('click', (e) => {
        if (e.target == button1 && button == 1) {
            paragraph.classList.toggle('open1');
            paragraph.classList.remove('open2');
            button1.textContent = "Show Less";
            button = 0;
        } else if (e.target == button1 && button == 0) {
            paragraph.classList.remove('open1');
            paragraph.classList.toggle('open2');
            button1.textContent = "More Examples";
            button = 1;
        } else if (e.target != button1) {
            paragraph.classList.remove('open2');
            paragraph.classList.toggle('open1');

        }
    })
}
More2coloredLargePon3()