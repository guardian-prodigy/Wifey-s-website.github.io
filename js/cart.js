if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }
  var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
function ShowMoreBtn() {
  let button = document.querySelector(".show-more-letters-e-z");
  let btn = 1;
  let paragraph = document.querySelector(".letter-e-z-reveal");
  button.addEventListener("click", (e) => {
    if (e.target == button && btn == 1) {
      paragraph.classList.toggle("open1");
      paragraph.classList.remove("open2");
      btn = 0;
      button.textContent = "Show Less";
    } else if (e.target == button && btn == 0) {
      paragraph.classList.toggle("open2");
      paragraph.classList.remove("open1");
      btn = 1;
      button.textContent = "Show More";
    }
  });
}
ShowMoreBtn();

function DisplayArrowsBoth1() {
  let slider_img = document.querySelector(".shop-item-image-names1");
  let buttonleftarrow2 = document.querySelector(".left-arrow-for-letter-e-z1");
  let buttonrightarrow2 = document.querySelector(
    ".right-arrow-for-letter-e-z1"
  );
  let images = [
    "LOVE-name-without-chain.jpeg",
    "3rd-name-letter.jpg",
    "4th-name-letter.jpg",
    "5th-name-letters.jpg",
    "6th-name-letters.jpg",
    "7th-name-letters.jpg",
    "8th-name-letters.jpg",
  ];
  let i = 0;
  buttonleftarrow2.addEventListener("click", left);
  buttonrightarrow2.addEventListener("click", right);
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
    return slider_img.setAttribute("src", "letters-images/" + images[i]);
  }
}
DisplayArrowsBoth1();
function DisplayArrowsBoth2() {
  let slider_img = document.querySelector(".shop-item-image-names2");
  let buttonleftarrow2 = document.querySelector(".left-arrow-for-letter-e-z2");
  let buttonrightarrow2 = document.querySelector(
    ".right-arrow-for-letter-e-z2"
  );
  let images = [
    "LOVE-name-without-chain.jpeg",
    "3rd-name-letter.jpg",
    "4th-name-letter.jpg",
    "5th-name-letters.jpg",
    "6th-name-letters.jpg",
    "7th-name-letters.jpg",
    "8th-name-letters.jpg",
  ];
  let i = 0;
  buttonleftarrow2.addEventListener("click", left);
  buttonrightarrow2.addEventListener("click", right);
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
    return slider_img.setAttribute("src", "letters-images/" + images[i]);
  }
}
DisplayArrowsBoth2();
