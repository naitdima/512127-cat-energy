var hamburgerBtn = document.querySelector(".hamburger-btn");
var pageHeaderNav = document.querySelector(".page-header__nav");

hamburgerBtn.addEventListener("click", function () {
  pageHeaderNav.classList.toggle("page-header__nav--show");
  hamburgerBtn.classList.toggle("hamburger-btn--close");
});
