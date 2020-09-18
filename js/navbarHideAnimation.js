/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  const themeWrapper = document.querySelector(".theme-switch-wrapper");
  const bar = document.querySelector("#nav-icon");
  const icons = document.querySelector(".fixed-icons");
  const email = document.querySelector(".fixed-email");

  if (prevScrollpos > 800) {
    icons.style.opacity = "1";
    email.style.opacity = "1";
  } else {
    icons.style.opacity = "0";
    email.style.opacity = "0";
  }

  if (prevScrollpos > currentScrollPos + 10) {
    document.getElementById("nav").style.transform = "translateY(0)";
    themeWrapper.style.transform = "translateY(0)";
    bar.style.transform = "translateY(0)";
  } else if (prevScrollpos <= currentScrollPos) {
    document.getElementById("nav").style.transform = "translateY(-90px)";
    themeWrapper.style.transform = "translateY(-90px)";
    bar.style.transform = "translateY(-90px)";
  }
  prevScrollpos = currentScrollPos + 10;
};
