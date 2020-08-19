// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const nav = document.getElementById("nav");
  const themeWrapper = document.querySelector(".theme-switch-wrapper");

  if (screen.width > 800) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      nav.style.padding = "15px 10px";
      nav.style.fontSize = "1rem";
      themeWrapper.style.top = "5px";
      themeWrapper.style.right = "0";
      themeWrapper.style.transform = "scale(0.6)";
    } else {
      nav.style.padding = "30px 10px";
      nav.style.fontSize = "1.5rem";
      themeWrapper.style.top = "30px";
      themeWrapper.style.right = "25px";
      themeWrapper.style.transform = "scale(1)";
    }
  }
}
