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
}
DisplayPrices();
function ArrowLeftAndRight1() {
  function Arrow1Left() {
    let button = document.querySelector(".arrow-pointing-left1");
    let image = document.querySelector(".div2-section-images1");
    let btn = 1;
    button.addEventListener("click", (e) => {
      if (e.target == button && btn == 1) {
        image.setAttribute(
          "src",
          "./letters-images/LOVE-name-without-chain.jpeg"
        );
        btn = 2;
      } else if (e.target == button && btn == 2) {
        image.setAttribute("src", "./letters-images/3rd-name-letter.jpg");
        btn = 3;
      } else if (e.target == button && btn == 3) {
        image.setAttribute("src", "./letters-images/4th-name-letter.jpg");
        btn = 4;
      } else if (e.target == button && btn == 4) {
        image.setAttribute("src", "./letters-images/5th-name-letters.jpg");
        btn = 1;
      }
    });
  }
  Arrow1Left();

  function Arrow1Right() {
    let button = document.querySelector(".arrow-pointing-right1");
    let image = document.querySelector(".div2-section-images1");
    let btn = 4;
    button.addEventListener("click", (e) => {
      if (e.target == button && btn == 4) {
        image.setAttribute("src", "./letters-images/5th-name-letters.jpg");
        btn = 3;
      } else if (e.target == button && btn == 3) {
        image.setAttribute("src", "./letters-images/4th-name-letter.jpg");
        btn = 2;
      } else if (e.target == button && btn == 2) {
        image.setAttribute("src", "./letters-images/3rd-name-letter.jpg");
        btn = 1;
      } else if (e.target == button && btn == 1) {
        image.setAttribute(
          "src",
          "./letters-images/LOVE-name-without-chain.jpeg"
        );
        btn = 4;
      }
      Arrow1Left();
    });
  }
  Arrow1Right();
}
ArrowLeftAndRight1()
function ArrowLeftAndRight2() {
  function Arrow2Left() {
    let button = document.querySelector(".arrow-pointing-left2");
    let image = document.querySelector(".div2-section-images2");
    let btn = 1;
    button.addEventListener("click", (e) => {
      if (e.target == button && btn == 1) {
        image.setAttribute(
          "src",
          "./letters-images/LOVE-name-without-chain.jpeg"
        );
        btn = 2;
      } else if (e.target == button && btn == 2) {
        image.setAttribute("src", "./letters-images/3rd-name-letter.jpg");
        btn = 3;
      } else if (e.target == button && btn == 3) {
        image.setAttribute("src", "./letters-images/4th-name-letter.jpg");
        btn = 4;
      } else if (e.target == button && btn == 4) {
        image.setAttribute("src", "./letters-images/5th-name-letters.jpg");
        btn = 1;
      }
    });
  }
  Arrow2Left();

  function Arrow2Right() {
    let button = document.querySelector(".arrow-pointing-right2");
    let image = document.querySelector(".div2-section-images2");
    let btn = 4;
    button.addEventListener("click", (e) => {
      if (e.target == button && btn == 4) {
        image.setAttribute("src", "./letters-images/5th-name-letters.jpg");
        btn = 3;
      } else if (e.target == button && btn == 3) {
        image.setAttribute("src", "./letters-images/4th-name-letter.jpg");
        btn = 2;
      } else if (e.target == button && btn == 2) {
        image.setAttribute("src", "./letters-images/3rd-name-letter.jpg");
        btn = 1;
      } else if (e.target == button && btn == 1) {
        image.setAttribute(
          "src",
          "./letters-images/LOVE-name-without-chain.jpeg"
        );
        btn = 4;
      }
      Arrow2Left();
    });
  }
  Arrow2Right();
}
ArrowLeftAndRight2()
