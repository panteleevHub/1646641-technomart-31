const feedbackPopup = document.querySelector(".feedback");
const feedbackLink = document.querySelector(".contacts__button");
const feedbackClose = feedbackPopup.querySelector(".feedback__close");
const feedbackForm = feedbackPopup.querySelector(".feedback__form");
const userName = feedbackPopup.querySelector(".feedback__user-name");
const userEmail = feedbackPopup.querySelector(".feedback__user-email");
const userEmailText = feedbackPopup.querySelector(".feedback__user-email-text");
const mapLink = document.querySelector(".contacts__map");
const mapPopup = document.querySelector(".map");
const mapClose = mapPopup.querySelector(".map__close");

// Feedback

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("feedback--show");

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("feedback--show");
  feedbackPopup.classList.remove("feedback--error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userEmailText.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("feedback--error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("feedback--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("feedback--show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("feedback--show");
      feedbackPopup.classList.remove("feedback--error");
    }
  }
});

// Map

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map--show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("map--show")) {
      evt.preventDefault();
      mapPopup.classList.remove("map--show");
    }
  }
});
