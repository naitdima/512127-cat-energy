var hamburgerBtn = document.querySelector(".hamburger-btn");
var pageHeaderNav = document.querySelector(".page-header__nav");

pageHeaderNav.classList.remove("page-header__nav--show");

hamburgerBtn.addEventListener("click", function () {
  pageHeaderNav.classList.toggle("page-header__nav--show");
  hamburgerBtn.classList.toggle("hamburger-btn--close");
});
