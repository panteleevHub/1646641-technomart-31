const cartPopup = document.querySelector(".cart-popup");
const buttonsBuy = document.querySelectorAll(".product-cards__button--buy");
const buttonsFavorites = document.querySelectorAll(".product-cards__button--favorites");
const cartPopupClose = cartPopup.querySelector(".cart-popup__close");
const menuItemCart = document.querySelector(".user-menu-item--cart");
const menuItemFavorites = document.querySelector(".user-menu-item--favorites");

for (let buttonBuy of buttonsBuy) {
  buttonBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("cart-popup--show");
    menuItemCart.classList.add("user-menu-item--added");
  });
}

for (let buttonFavorites of buttonsFavorites) {
  buttonFavorites.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuItemFavorites.classList.add("user-menu-item--added");
  });
}

cartPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("cart-popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("cart-popup--show")) {
      evt.preventDefault();
      cartPopup.classList.remove("cart-popup--show");
    }
  }
});
