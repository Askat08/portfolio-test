/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  const themeWrapper = document.querySelector(".theme-switch-wrapper");
  const bar = document.querySelector(".mobile-bar");

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
    themeWrapper.style.top = "15px";
    bar.style.top = "15px";
  } else {
    document.getElementById("nav").style.top = "-60px";
    themeWrapper.style.top = "-60px";
    bar.style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};