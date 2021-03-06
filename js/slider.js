/* Promo slider */

const sliderPromo = document.querySelector(".site-promo__item--slider");
const sliderPromoArrowPrev = sliderPromo.querySelector(".site-promo__arrow-button--left");
const sliderPromoArrowNext = sliderPromo.querySelector(".site-promo__arrow-button--right");
const sliderPromoSlides = sliderPromo.querySelectorAll(".site-promo__slide");
const sliderPromoButtonsList = sliderPromo.querySelector(".site-promo__slider-buttons");
const sliderPromoButtons = sliderPromo.querySelectorAll(".site-promo__slider-button");

let activeSlideIndex = 0;

const sliderPromoArrowNextClickHandler = (() => {
  activeSlideIndex++;
   if (activeSlideIndex >= sliderPromoSlides.length) {
     sliderPromoSlides[activeSlideIndex - 1].classList.remove("site-promo__slide--active");
     sliderPromoButtons[activeSlideIndex - 1].classList.remove("site-promo__slider-button--active");
     activeSlideIndex = 0;
     sliderPromoSlides[activeSlideIndex].classList.add("site-promo__slide--active");
     sliderPromoButtons[activeSlideIndex].classList.add("site-promo__slider-button--active");
   } else {
    sliderPromoSlides[activeSlideIndex - 1].classList.remove("site-promo__slide--active");
    sliderPromoButtons[activeSlideIndex - 1].classList.remove("site-promo__slider-button--active");
    sliderPromoSlides[activeSlideIndex].classList.add("site-promo__slide--active");
    sliderPromoButtons[activeSlideIndex].classList.add("site-promo__slider-button--active");
   }
});
sliderPromoArrowNext.addEventListener("click", sliderPromoArrowNextClickHandler);

const sliderPromoArrowPrevClickHandler = (() => {
  activeSlideIndex--;
   if (activeSlideIndex < 0) {
     sliderPromoSlides[activeSlideIndex + 1].classList.remove("site-promo__slide--active");
     sliderPromoButtons[activeSlideIndex + 1].classList.remove("site-promo__slider-button--active");
     activeSlideIndex = sliderPromoSlides.length - 1;
     sliderPromoSlides[activeSlideIndex].classList.add("site-promo__slide--active");
     sliderPromoButtons[activeSlideIndex].classList.add("site-promo__slider-button--active");
   } else {
    sliderPromoSlides[activeSlideIndex + 1].classList.remove("site-promo__slide--active");
    sliderPromoButtons[activeSlideIndex + 1].classList.remove("site-promo__slider-button--active");
    sliderPromoSlides[activeSlideIndex].classList.add("site-promo__slide--active");
    sliderPromoButtons[activeSlideIndex].classList.add("site-promo__slider-button--active");
   }
});
sliderPromoArrowPrev.addEventListener("click", sliderPromoArrowPrevClickHandler);

const sliderPromoButtonClickHandler = ((evt) => {
  evt.preventDefault();
  const {target} = evt;
  if (target.tagName !== "BUTTON") {
    return;
  }
  if (target.classList.contains("site-promo__slider-button--active")) {
    target.blur();
    return;
  }

  const promoActiveButton = sliderPromoButtonsList.querySelector(".site-promo__slider-button--active");
  promoActiveButton.classList.remove("site-promo__slider-button--active");
  const promoActiveSlide = sliderPromo.querySelector(".site-promo__slide--active");
  promoActiveSlide.classList.remove("site-promo__slide--active");

  sliderPromoSlides.forEach((item) => {
    if (item.className.includes(target.id)) {
      item.classList.add("site-promo__slide--active");
      target.classList.add("site-promo__slider-button--active");
      target.blur();
    }
  });
});
sliderPromoButtonsList.addEventListener("click", sliderPromoButtonClickHandler);

/* Services slider */

const sliderServices = document.querySelector(".services__slider");
const sliderServicesButtons = sliderServices.querySelector(".services__slider-buttons");
const sliderServicesSlides = sliderServices.querySelectorAll(".services__slide");

const sliderServicesButtonClickHandler = ((evt) => {
  evt.preventDefault();
  const {target} = evt;
  if (target.tagName !== "BUTTON") {
    return;
  }
  if (target.classList.contains("services__slider-button--active")) {
    target.blur();
    return;
  }

  const servicesActiveButton = sliderServicesButtons.querySelector(".services__slider-button--active");
  servicesActiveButton.classList.remove("services__slider-button--active");
  const servicesActiveSlide = sliderServices.querySelector(".services__slide--active");
  servicesActiveSlide.classList.remove("services__slide--active");

  sliderServicesSlides.forEach((item) => {
    if (item.className.includes(target.id)) {
      item.classList.add("services__slide--active");
      target.classList.add("services__slider-button--active");
      target.blur();
    }
  });
});
sliderServicesButtons.addEventListener("click", sliderServicesButtonClickHandler);
