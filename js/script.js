// prevent default form submit refresh
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const navToggle = document.querySelector(".navigation__toggle");
const navList = document.querySelector(".navigation__list");

navList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navToggle.checked = false;
  }
});
