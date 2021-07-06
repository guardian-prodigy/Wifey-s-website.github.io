function DisplayPrices() {
  const btn = document.querySelector(".button-for-displaying-prices-top");
  const paragraph = document.querySelector(".hidden-display-prices");
  let button = 1;
  btn.addEventListener("click", (e) => {
    if (e.target == btn && button == 1) {
      button = 0;
      paragraph.classList.toggle("open1");
      paragraph.classList.remove("open2");
    } else if (e.target == btn && button == 0) {
      paragraph.classList.toggle("open2");
      paragraph.classList.remove("open1");
      button = 1;
    }
  });
}DisplayPrices()
function DisplayAll4arrowsdiv2() {
function DisplayArrowsBoth1() {
  let slider_img = document.querySelector(".div2-section-images1");
  let buttonleftarrow1 = document.querySelector('.arrow-pointing-left1');
  let buttonrightarrow1 = document.querySelector('.arrow-pointing-right1');
  let images = [
    'LOVE-name-without-chain.jpeg', '3rd-name-letter.jpg', '4th-name-letter.jpg','5th-name-letters.jpg', '6th-name-letters.jpg', '7th-name-letters.jpg', '8th-name-letters.jpg'
  ];
  buttonleftarrow1.addEventListener('click', left)
  buttonrightarrow1.addEventListener('click', right)
  let i = 0;
  
  function left() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
  }
  function right() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg()
  }
  function setImg() {
    return slider_img.setAttribute('src', 'letters-images/' + images[i]);
  }
}
DisplayArrowsBoth1()

function DisplayArrowsBoth2() {
  let slider_img = document.querySelector(".div2-section-images2");
  let buttonleftarrow2 = document.querySelector('.arrow-pointing-left2');
  let buttonrightarrow2 = document.querySelector('.arrow-pointing-right2');
  let images = [
    'LOVE-name-without-chain.jpeg', '3rd-name-letter.jpg', '4th-name-letter.jpg','5th-name-letters.jpg', '6th-name-letters.jpg', '7th-name-letters.jpg', '8th-name-letters.jpg'
  ];
  let i = 0;
  buttonleftarrow2.addEventListener('click', left)
  buttonrightarrow2.addEventListener('click', right)
  function left() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
  }
  function right() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg()
  }
  function setImg() {
    return slider_img.setAttribute('src', 'letters-images/' + images[i]);
  }
}
DisplayArrowsBoth2()
}DisplayAll4arrowsdiv2()
function DisplayExtralettersEZ() {
  let slider_img = document.querySelector('.extra-image-letter-e-z');
  let leftbutton = document.querySelector('.left-arrow-for-letter-e-z')
  let rightbutton = document.querySelector('.right-arrow-for-letter-e-z');
  let images = [
    'letter-E-with-chain.jpg',
    'letter-F-with-chain.jpg',
    'letter-G-with-chain.jpg',
    'letter-H-with-chain.jpg',
    'letter-I-with-chain.jpg',
    'letter-J-with-chain.jpg',
    'letter-K-with-chain.jpg',
    'letter-L-with-chain.jpg',
    'letter-M-with-chain.jpg',
    'letter-N-with-chain.jpg',
    'letter-O-with-chain.jpg',
    'letter-P-with-chain.jpg',
    'letter-Q-with-chain.jpg',
    'letter-R-with-chain.jpg',
    'letter-S-with-chain.jpg',
    'letter-T-with-chain.jpg',
    'letter-U-with-chain.jpg',
    'letter-V-with-chain.jpg',
    'letter-W-with-chain.jpg',
    'letter-X-with-chain.jpg',
    'letter-Y-with-chain.jpg',
    'letter-Z-with-chain.jpg'
  ]
  let i = 0;
  leftbutton.addEventListener('click', left);
  rightbutton.addEventListener('click', right);
  function left() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
  }
  function right() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
  }
  function setImg() {
    return slider_img.setAttribute('src', 'letters-images/' + images[i]);
  }
} DisplayExtralettersEZ()



