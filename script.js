// JavaScript for Hamburger Menu and Dark Mode
// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Check for saved theme in localStorage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
} else {
  document.documentElement.classList.add("light");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
}

themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  document.documentElement.classList.toggle("light");
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");

  // Save theme preference to localStorage
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
