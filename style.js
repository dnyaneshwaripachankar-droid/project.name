// Theme Toggle
constthemeToggle = document.getElementById("theme-toggle");
constbody = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Change button icon based on mode
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // Light Mode Icon
  } else {
    themeToggle.textContent = "🌙"; // Dark Mode Icon
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// Theme Toggle Button
const htemeToggle = document.getElementById("theme-toggle");
constbody = document.body;

// Change Theme on Button Click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update Button Icon
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // Light Mode Icon
  } else {
    themeToggle.textContent = "🌙"; // Dark Mode Icon
  }
});
// Theme Toggle Button
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update icon
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // Light mode icon
  } else {
    themeToggle.textContent = "🌙"; // Dark mode icon
  }
});

// Add to Cart buttons
document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Pizza added to cart! 🍕");
  });
});
// Theme Toggle Button
constthemeToggle = document.getElementById("theme-toggle");
constbody = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update icon
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // Light mode icon
  } else {
    themeToggle.textContent = "🌙"; // Dark mode icon
  }
});

// Offer Buttons
document.querySelectorAll(".offer-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Offer Applied! 🎉");
  });
});
// Theme Toggle Button
constthemeToggle = document.getElementById("theme-toggle");
constbody = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update icon
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // Light mode icon
  } else {
    themeToggle.textContent = "🌙"; // Dark mode icon
  }
});
// Theme Toggle Button
constthemeToggle = document.getElementById("theme-toggle");
constbody = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Update icon
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // Light mode icon
  } else {
    themeToggle.textContent = "🌙"; // Dark mode icon
  }
});
