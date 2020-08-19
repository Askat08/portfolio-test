const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const aboutImg = document.getElementById("about-img");
const textBox = document.getElementById("text-box");
const bar = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
let dark = true;
// const nav = document.getElementById('nav');

// Dark or Light Images
function imageMode(color) {
  // image1.src = `img/dev-${color}.svg`;
  // image2.src = `img/programming-${color}.svg`;
  // image3.src = `img/code-${color}.svg`;
  aboutImg.src = `img/coder-about-${color}.svg`;
}

// Toggles Darl and Light Mode
function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(dark);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(!dark);
  }
}

// Mobile navbar toggle
function barToggle() {
  sidebar.classList.toggle("side-toggle");
  bar.classList.toggle("barIcon");
}

// Hide side bar on click outside if div
window.onload = function () {
  document.onclick = function (e) {
    if (e.target.id !== "bar") {
      //element clicked wasn't the div; hide the div
      sidebar.classList.remove("side-toggle");
      bar.classList.remove("barIcon");
    }
  };
};

// Event Listeners
toggleSwitch.addEventListener("change", switchTheme);
bar.addEventListener("click", barToggle);

// Check Local Storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(dark);
  }
}
